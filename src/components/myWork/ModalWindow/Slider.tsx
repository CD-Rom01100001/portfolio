import { FC, JSX, useEffect, useRef, useState } from 'react'
import css from './Slider.module.css'

type ImageType = {
  src: string;
  id: number;
}

interface SliderProps {
  images: ImageType[];
}

type styleForSliderLineType = {
  transform: string;
  transition: string;
  width: string;
}

const setArrow = (arrDir: string): JSX.Element => {
  const arr = arrDir === 'left' ? 
    "M45.125 10.375l-21.625 21.625 21.625 21.625-4.75 4.75-26.375-26.375 26.375-26.375z" :
    arrDir === 'right' ?
    "M15.625 11l5.75-5.625 26.625 26.625-26.625 26.625-5.75-5.625 21.125-21z" :
    '';
    
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 64 64">
      <title>arrow_back_ios</title>
      <path fill="#ccc" d={arr}></path>
    </svg>
  )
}

const Slider: FC<SliderProps> = ({ images }) => {

  const [activeIndex, setActiveIndex] = useState<number>(0)// текущий индекс слайда
  const [animatingFlag, setAnimatingFlag] = useState<boolean>(false)// Флаг, указывающий, происходит ли в данный момент анимация. Используется, чтобы заблокировать кнопки во время перехода
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)// Направление анимации: "next" (вперёд) или "prev" (назад). null означает, что слайдер статичен
  const [width, setWidth] = useState<number>(0)// Состояние ширины слайдера (в пикселях). Используется для расчёта transform: translateX(...)

  const sliderRef = useRef<HTMLDivElement>(null)// получим слайдер (div.slider). Используется для измерения ширины через ResizeObserver

  /* при клике на другую карточку обнуляет индекс текущего слайда, что бы изображения следующей, выбранной карточки начинались с первого изображения */
  useEffect(() => setActiveIndex(0), [images])

  // изменяет ширину слайдера при изменении ширины окна
  useEffect(() => {
    if (!sliderRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width)
      }
    })
    resizeObserver.observe(sliderRef.current)

    return () => resizeObserver.disconnect()
  }, [])

  const prevIndex: number = (activeIndex - 1 + images.length) % images.length// если в конце — перейти в начало
  const nextIndex: number = (activeIndex + 1) % images.length// если в начале — перейти в конец
  const slides: ImageType[] = [images[prevIndex], images[activeIndex], images[nextIndex]]// содержит 3 изображения: [предыдущее, текущее, следующее], нужно для анимации сдвига

  /* если анимация завершена (animatingFlag === false), то перелистывает слайд вперед */
  const moveNext = (): void => {
    if (animatingFlag) return
    setDirection("next")
    setAnimatingFlag(true)
  }

  /* если анимация завершена (animatingFlag === false), то перелистывает слайд назад */
  const movePrev = (): void => {
    if (animatingFlag) return
    setDirection("prev")
    setAnimatingFlag(true)
  }

  /* После окончания анимации обновляет индекс текущего слайда и сбрасывает флаг */
  const handleTransitionEnd = (): void => {
    if (!animatingFlag) return
    setActiveIndex(prev =>
      direction === "next" ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
    )
    setAnimatingFlag(false)
    setDirection(null)
  }

  /* если идёт анимация (animatingFlag === true), то перелистывает слайд назад */
  const translateX = animatingFlag
    /* "next" - анимация вперёд — сдвигаем налево на 2 ширины */
    ? direction === "next"
    ? -2 * width
    /* "prev" - анимация назад — сдвигаем вправо на 0 (показать предыдущий) */
    : 0
    /* если анимации нет — просто показываем текущий слайд по центру */
    : -width

  const styleForSliderLine = (): styleForSliderLineType => {
    return {  
      transform: `translateX(${translateX}px)`,
      transition: animatingFlag ? "transform 0.5s ease-in-out" : "none",
      width: `${3 * width}px`
    }
  }

  //* савйпы */
  const touchStartX = useRef<number | null>(null)// координата X (по горизонтали), где палец коснулся экрана.
  const touchEndX = useRef<number | null>(null)// координата X, где палец отпустил экран.

  /* Когда пользователь касается экрана */
  const handleTouchStart = (e: React.TouchEvent) => {
    /* 
    - e.touches[0] — массив всех пальцев, касающихся экрана. Нам нужен первый (первый палец)
    - .clientX — координата по горизонтали
    - Сохраняем эту координату в touchStartX
    Пример: если пользователь коснулся экрана в точке X=250px, то touchStartX.current = 250
    */
    touchStartX.current = e.touches[0].clientX
  }

  /* Пока палец движется по экрану */
  const handleTouchMove = (e: React.TouchEvent) => {
    /* 
    - Это обновляет touchEndX на текущую позицию пальца, пока он движется
    - Нам нужно сохранить последнюю координату пальца
    - Пример: если палец движется влево и останавливается на X=150px, то touchEndX.current = 150
    */
    touchEndX.current = e.touches[0].clientX
  }

  /* Когда палец отпустили — анализируем свайп */
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return

    const diff = touchStartX.current - touchEndX.current// вычисляем как далеко пользователь провел пальцем
    const minSwipeDistance = 50// минимальная длина свайпа, чтобы не реагировать на случайные касания

    /* проверяем, что-бы свайп был больше 50 пикселей, чтобы не реагировать на случайные прикосновения */
    if (Math.abs(diff) > minSwipeDistance) {
      /* значит палец прошёл влево — надо листать вперёд */
      if (diff > 0) {
        moveNext()
      }
      /* палец шёл вправо — надо листать назад */ 
      else {
        movePrev()
      }
    }

    // очистка
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div 
      className={css.slider} 
      ref={sliderRef} 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>

        <div className={`${css.arrow} ${css.arrowLeft}`} onClick={movePrev}>
          {setArrow('left')}
        </div>
        <div className={`${css.arrow} ${css.arrowRight}`} onClick={moveNext}>
          {setArrow('right')}
        </div>

      <div className={css.sliderLine} 
        style={styleForSliderLine()}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map(({ src, id }) => (
          <img className={css.sliderImage}
            src={src}
            alt={`slide-${id}`}
            style={{ width: `${width}px` }}
            key={id}
          />
        ))}
      </div>

    </div>
  )
}

export default Slider