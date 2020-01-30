import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  test("clicking the primary button should call 'layoutDispatch'", () => {
    const layoutDispatch = jest.fn();
    const { getByText } = render(
      <Header
        layoutDispatch={layoutDispatch}
        siteTitle="siteTitle" />
    );
    fireEvent.click(getByText(/work/i));
    expect(layoutDispatch).toHaveBeenCalledWith({ type: "OPEN_MODAL" });
  });

  test("clicking <MobileMenuButton/> should call 'layoutDispatch'", () => {
    const layoutDispatch = jest.fn();
    const { getByTestId } = render(
      <Header
        layoutDispatch={layoutDispatch}
        siteTitle="" />
    );
    fireEvent.click(getByTestId("mobile-menu"));
    expect(layoutDispatch).toHaveBeenCalledWith({ type: "TOGGLE_MOBILE_MENU" });
  });
});
