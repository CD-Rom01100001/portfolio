import { FC } from 'react';
import FadeInSection from '../../utils/FadeInSection';

import css from './Contact.module.css'

interface ContactProps {

}

const Contact: FC<ContactProps> = ({}) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/romanchernyshkov88@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Сообщение отправлено!");
        form.reset(); // очищаем форму
      } else {
        alert("Ошибка при отправке.");
      }
    } catch (error) {
      alert("Произошла ошибка.");
      console.error(error);
    }
  };

  return (
    <div className={css.contact}>
      {/* <FadeInSection delay={0.2}> */}
        <h2 className={css.contactTitle}>contacts</h2>
      {/* </FadeInSection> */}

      <div className={css.formBlock}>
        <form onSubmit={handleSubmit}>
          <h3>Contact Me</h3>
          <label>
            Name
            <input type="text" name="name" placeholder='Name' required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder='Enter your e-mailEnter your e-mail address for feedback' required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} placeholder='Enter your message' required />
          </label>
          <input type="hidden" name="_captcha" value="false" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;