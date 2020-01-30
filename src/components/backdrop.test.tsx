import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Backdrop from "./backdrop";

describe("Backdrop", () => {
  test("setting the 'opened' property to 'true' should add the 'opened' class to <Backdrop/>", () => {
    const { container } = render(
      <Backdrop
        opened={true}
        layoutDispatch={jest.fn()} />
    );
    expect(container.firstChild).toHaveClass("opened");
  });

  test("setting the 'opened' property to 'false' should NOT add the 'opened' class to <Backdrop/>", () => {
    const { container } = render(
      <Backdrop
        opened={false}
        layoutDispatch={jest.fn()} />
    );
    expect(container.firstChild).not.toHaveClass("opened");
  });

  test("clicking the backdrop should trigger 2 'layoutDispatch' calls", () => {
    const layoutDispatchMock = jest.fn();
    const { container } = render(
      <Backdrop
        opened={true}
        layoutDispatch={layoutDispatchMock} />
    );
    container.firstElementChild && fireEvent.click(container.firstElementChild);
    expect(layoutDispatchMock).toHaveBeenCalledTimes(2);
    expect(layoutDispatchMock).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
    expect(layoutDispatchMock).toHaveBeenCalledWith({ type: "CLOSE_MOBILE_MENU" });
  });
});
