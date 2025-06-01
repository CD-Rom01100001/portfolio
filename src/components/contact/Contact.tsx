import { FC, useState } from 'react';
import FadeInSection from '../../utils/FadeInSection';

import css from './Contact.module.css'

interface ContactProps {

}

const Contact: FC<ContactProps> = ({}) => {

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

  return (
    <div className={css.contact}>
      <FadeInSection >
      <div className={css.titleWrap}>
        <h2 className={css.contactTitle}>contacts</h2>
      </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className={css.ctaTextBlock}>
          <p className={css.ctaText}>
            If you have any questions or suggestions, please contact me.
          </p>
        </div>
      </FadeInSection>

      <form onSubmit={handleSubmit} className={css.formBlock}>
        <FadeInSection delay={0.2}>
          <input type="text" name="name" placeholder='Name' required />
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <input type="email" name="email" placeholder='Enter your e-mail address for feedback' required />
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <textarea name="message" rows={4} placeholder='Enter your message' required />
        </FadeInSection>

        <input type="hidden" name="_captcha" value="false" />

        <FadeInSection delay={0.5} >
          <div className={css.btnWuap}>
            <button type="submit" className={css.button} disabled={isLoading}>Submit</button>
          </div>
        </FadeInSection>

        <p className={css.alert} style={{ 
          color: message === 'sent' ? '#1BC41D' : 
          message === 'sending error' || message === 'error' ? '#EE0000' :
          '#FFF' 
          }}
        >
          {isLoading
            ? 'The message goes out...'
            : message === 'sent'
            ? 'Message sent!'
            : message === 'sending error'
            ? 'Send error.'
            : message === 'error'
            ? 'There was an error.'
            : ''}
        </p>
      </form>
  
    </div>
  );
}

export default Contact;