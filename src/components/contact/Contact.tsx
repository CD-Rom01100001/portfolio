import { FC, useState } from 'react';
import FadeInSection from '../../utils/FadeInSection';
import { useAppSelector } from '../../store/hooks';

import css from './Contact.module.css'

const Contact: FC = () => {

  const language = useAppSelector(state => state.activeLanguage.activeLanguage)

  const [message, setMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/romanchernyshkov88@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setMessage('sent')
        form.reset(); // очищаем форму
        setTimeout(()=>setMessage(''), 5000)
      } else {
        setMessage('sending error')
        setTimeout(()=>setMessage(''), 5000)
      }
    } catch (error) {
      setMessage('error')
      setTimeout(()=>setMessage(''), 5000)
      console.error(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  const messages = {
    'RU': {
      sending: 'Сообщение отправляется...',
      sent: 'Сообщение отправлено!',
      sendingError: 'Ошибка отправки.',
      error: 'Произошла ошибка.',
    },
    'EN': {
      sending: 'The message goes out...',
      sent: 'Message sent!',
      sendingError: 'Send error.',
      error: 'There was an error.',
    }
  };

  return (
    <div className={css.contact}>
      <FadeInSection >
      <div className={css.titleWrap}>
        <h2 className={css.contactTitle}>
          {language === 'RU' ?
            'контакты'
            :
            'contacts'
          }
          </h2>
      </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className={css.ctaTextBlock}>
          <p className={css.ctaText}>
            {language === 'RU' ?
              'Если у вас есть вопросы или предложения, пожалуйста, свяжитесь со мной.'
              :
              'If you have any questions or suggestions, please contact me.'
            }
          </p>
        </div>
      </FadeInSection>

      <form onSubmit={handleSubmit} className={css.formBlock}>
        <FadeInSection delay={0.2}>
          <input 
            type="text"
            name="name"
            placeholder={language === 'RU' ?
              'Введите ваше имя'
              :
              'Enter your name'
            } 
            required />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <input 
            type="email" 
            name="email" 
            placeholder={language === 'RU' ?
              'Введите адрес электронной почты для обратной связи'
              :
              'Enter your e-mail address for feedback'
            } 
            required />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <textarea 
          name="message" 
          rows={4} 
          placeholder={language === 'RU' ?
            'Введите ваше сообщение'
            :
            'Enter your message'
          } 
          required />
        </FadeInSection>

        <input type="hidden" name="_captcha" value="false" />

        <FadeInSection delay={0.5} >
          <div className={css.btnWuap}>
            <button type="submit" className={css.button} disabled={isLoading}>
              {language === 'RU' ?
                'Отправить'
                :
                'Submit'
              } 
            </button>
          </div>
        </FadeInSection>

        <p className={css.alert} style={{ 
          color: message === 'sent' ? '#1BC41D' : 
          message === 'sending error' || message === 'error' ? '#EE0000' :
          '#FFF' 
          }}
        >
          {isLoading ? 
            messages[language].sending :
            message === 'sent' ? 
            messages[language].sent : 
            message === 'sending error' ? 
            messages[language].sendingError : 
            message === 'error' ? 
            messages[language].error : 
            ''
          }
        </p>
      </form>
  
    </div>
  );
}

export default Contact;