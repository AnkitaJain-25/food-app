import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header Component Test Cases", () => {
  it("Should render Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"});

    expect(loginButton).toBeInTheDocument();
  });

  it("Should render Header Component with a Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart (0)");

    expect(cartItems).toBeInTheDocument();
  });

  it("Should render Header Component with a Cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("Should change login button to logout and vice-versa on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);
    expect(loginButton).toBeInTheDocument();
  });

  it("should change online status to 🔴 when offline", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // Check initial online status
    const onlineStatus = screen.getByText("Online Status: ✅");
    expect(onlineStatus).toBeInTheDocument();

    // Simulate going offline
    fireEvent(window, new Event('offline'));
    const offlineStatus = screen.getByText("Online Status: 🔴");
    expect(offlineStatus).toBeInTheDocument();
  });
  
});
