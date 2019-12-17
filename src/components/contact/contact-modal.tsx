import React from "react";

import "./contact-modal.sass";

interface ContactModalProps {
  opened: boolean;
}

const ContactModal = ({ opened = false }: ContactModalProps): JSX.Element => {
  let classNames = "contact-modal";
  if (opened) {
    classNames += " opened";
  }
  return (
    <dialog className={classNames}>
      <h1>Contact Me</h1>
      <form className="contact-modal__form">
        <div className="contact-modal__form__name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name" />
        </div>
        <div className="contact-modal__form__email">
          <label htmlFor="email">Email Address <span style={{ fontWeight: "bold" }}>*</span></label>
          <input
            type="email"
            name="email" />
        </div>
        <div className="contact-modal__form__message">
          <label htmlFor="message">Send me a message</label>
          <textarea
            name="message" />
        </div>
        <button
          className="default-button contact-modal__form__submit"
          type="submit">
          Send Message
        </button>
      </form>
    </dialog>
  );
};

export default ContactModal;
