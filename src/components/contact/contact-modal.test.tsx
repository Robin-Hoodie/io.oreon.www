import React from "react";
import { fireEvent, render, wait } from "@testing-library/react";
import ContactModal from "./contact-modal";
import classes from "contact-modal.module.sass";

const fireChangeEventWithEmptyString = (input: Element): void => {
  //First input something, otherwise the second change event does not fire
  fireEvent.change(input, {
    target: { value: "value" }
  });
  fireEvent.change(input, {
    target: { value: "" }
  });
};

describe("ContactModal", () => {
  test("setting the 'opened' property to 'true' should add the opened class to <ContactModal/>", () => {
    const { container } = render(
      <ContactModal
        opened={true}
        layoutDispatch={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass(classes.opened);
  });

  test("setting the 'opened' property to 'false' should NOT add the opened class to <ContactModal/>", () => {
    const { container } = render(
      <ContactModal
        opened={false}
        layoutDispatch={jest.fn()} />
    );
    expect(container.firstChild).not.toHaveClass(classes.opened);
  });

  test("should NOT set the invalid class when filling in a name", () => {
    const { getByLabelText } = render(
      <ContactModal
        opened={true}
        layoutDispatch={jest.fn()} />
    );
    const nameInput = getByLabelText(/name/i);

    fireEvent.change(nameInput, {
      target: { value: "Robin" }
    });
    expect(nameInput).not.toHaveClass(classes.invalid);
  });

  test("should set the invalid class when filling in an empty string", () => {
    const { getByLabelText } = render(
      <ContactModal
        opened={true}
        layoutDispatch={jest.fn()} />
    );
    const nameInput = getByLabelText(/name/i);
    fireChangeEventWithEmptyString(nameInput);

    expect(nameInput).toHaveClass(classes.invalid);
  });

  test("should NOT set the invalid class when filling in a valid email address", () => {
    const { getByLabelText } = render(
      <ContactModal
        opened={true}
        layoutDispatch={jest.fn()} />
    );
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(emailInput, {
      target: { value: "robin@oreon.io" }
    });
    expect(emailInput).not.toHaveClass(classes.invalid);
  });

  test("should set the invalid class when filling in an empty string as the email address", () => {
    const { getByLabelText } = render(
      <ContactModal
        opened={true}
        layoutDispatch={jest.fn()} />
    );
    const emailInput = getByLabelText(/email/i);
    fireChangeEventWithEmptyString(emailInput);
    expect(emailInput).toHaveClass(classes.invalid);
  });

  test("should set the invalid class when filling in an email address without '@'", () => {
    const { getByLabelText } = render(
      <ContactModal
        opened={true}
        layoutDispatch={jest.fn()} />
    );
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(emailInput, {
      target: { value: "robin" }
    });
    expect(emailInput).toHaveClass(classes.invalid);
  });

  test("should call layoutDispatch when clicking on the submit button", async () => {
    const layoutDispatchMock = jest.fn();
    const { getByText } = render(
      <ContactModal
        opened={true}
        layoutDispatch={layoutDispatchMock} />
    );
    const submitButton = getByText(/send\smessage/i);
    fireEvent.click(submitButton);
    //Submit button onClick handler is async, so we need to wait for expectation to complete
    await wait(() => expect(layoutDispatchMock).toHaveBeenCalledWith({type: "CLOSE_MODAL"}));
  });
});
