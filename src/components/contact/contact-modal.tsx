import React, { ChangeEvent, Dispatch, MouseEvent, useState } from "react";

import "./contact-modal.sass";
import { sendEmailEndpoint } from "../../config";
import { LayoutAction } from "../layout";

interface ContactModalProps {
  opened: boolean;
  layoutDispatch: Dispatch<LayoutAction>;
}

const simpleEmailRegex = /.+@.+\..+/;

const ContactModal = ({ opened = false, layoutDispatch }: ContactModalProps): JSX.Element => {
  let classNames = "contact-modal";
  if (opened) {
    classNames += " opened";
  }
  const [formState, setFormState] = useState({
    name: {
      valid: true,
      value: ""
    },
    email: {
      valid: true,
      value: ""
    },
    message: {
      valid: true,
      value: ""
    }
  });

  //TODO: Email should remain valid while field is focused
  const updateFormState = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { value, name } = event.target;
    let validity = true;
    if (name === "email" && !simpleEmailRegex.test(value)) {
      validity = false;
    } else {
      validity = !!value;
    }
    setFormState(prevState => ({
      ...prevState,
      [name]: {
        valid: validity,
        value
      }
    }));
  };

  //TODO: Show some kind of feedback whether sending was successfull
  //TODO: Validate form
  const validateAndSendEmail = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    await fetch(sendEmailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fromEmail: formState.email.value,
        name: formState.name.value,
        message: formState.message.value
      })
    });
    layoutDispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <dialog className={classNames}>
      <h1>Contact Me</h1>
      <form
        className="contact-modal__form"
        noValidate>
        <div className="contact-modal__form__name">
          <label htmlFor="name">Name <span style={{ fontWeight: "bold" }}>*</span></label>
          <input
            id="name"
            required
            value={formState.name.value}
            onChange={updateFormState}
            className={formState.name.valid ? "contact-modal__form__valid" : "contact-modal__form__invalid"}
            type="text"
            name="name" />
          <span
            className="contact-modal__form__error-message"
            style={{ visibility: formState.name.valid ? "hidden" : "visible" }}>I&apos;d like to know how to address you</span>
        </div>
        <div className="contact-modal__form__email">
          <label htmlFor="email">Email Address <span style={{ fontWeight: "bold" }}>*</span></label>
          <input
            id="email"
            required
            value={formState.email.value}
            onChange={updateFormState}
            className={formState.email.valid ? "contact-modal__form__valid" : "contact-modal__form__invalid"}
            type="email"
            name="email" />
          <span
            className="contact-modal__form__error-message"
            style={{ visibility: formState.email.valid ? "hidden" : "visible" }}>I can&apos;t reply if I don&apos;t know how to reach you</span>
        </div>
        <div className="contact-modal__form__message">
          <label htmlFor="message">Send me a message</label>
          <textarea
            id="message"
            required
            value={formState.message.value}
            onChange={updateFormState}
            className={formState.message.valid ? "contact-modal__form__valid" : "contact-modal__form__invalid"}
            name="message" />
          <span
            className="contact-modal__form__error-message"
            style={{ visibility: formState.message.valid ? "hidden" : "visible" }}>Sending an empty message wouldn&apos;t make a lot of sense, now would it?</span>
        </div>
        <button
          className="default-button contact-modal__form__submit"
          onClick={validateAndSendEmail}
          type="submit">
          Send Message
        </button>
      </form>
    </dialog>
  );
};

export default ContactModal;
