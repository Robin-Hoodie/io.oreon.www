import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MobileMenu from "./mobile-menu";
import classes  from "./mobile-menu-button.module.sass";

describe("MobileMenu", () => {
  test("setting the 'opened' property to 'true' should add the opened class to <MobileMenu/>", () => {
    const { container } = render(
      <MobileMenu
        layoutDispatch={jest.fn()}
        opened={true} />
    );
    expect(container.firstChild).toHaveClass(classes.opened);
  });

  test("setting the 'opened' property to 'false' should NOT add the opened class to <MobileMenu/>", () => {
    const { container } = render(
      <MobileMenu
        layoutDispatch={jest.fn()}
        opened={false} />
    );
    expect(container.firstChild).not.toHaveClass(classes.opened);
  });

  test("clicking the button should trigger 2 'layoutDispatch' calls", () => {
    const layoutDispatchMock = jest.fn();
    const { getByText } = render(
      <MobileMenu
        layoutDispatch={layoutDispatchMock}
        opened={true} />
    );
    fireEvent.click(getByText(/work/i));
    expect(layoutDispatchMock).toHaveBeenCalledTimes(2);
    expect(layoutDispatchMock).toHaveBeenNthCalledWith(1, { type: "OPEN_MODAL" });
    expect(layoutDispatchMock).toHaveBeenNthCalledWith(2, { type: "CLOSE_MOBILE_MENU" });
  });
});
