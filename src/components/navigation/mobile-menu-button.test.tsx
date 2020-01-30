import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MobileMenuButton from "./mobile-menu-button";

describe("MobileMenuButton", () => {
  test("clicking on the root element should call 'onClick'", () => {
    const onClickMock = jest.fn();
    const { container } = render(<MobileMenuButton onClick={onClickMock} />);
    container.firstElementChild && fireEvent.click(container.firstElementChild); //Below assertion will fail if && does not coalesce
    expect(onClickMock).toHaveBeenCalled();
  });
});
