import { render, act, fireEvent, screen } from "@testing-library/react";
import Body from "../Body";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import UserContext from "../../utils/UserContext";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render the Body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const bodyElement = document.querySelector(".body");
  expect(bodyElement).toBeInTheDocument();
});

it("should show offline message when offline", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  fireEvent(window, new Event("offline"));
  const offlineMessage = screen.getByText(
    "Looks like you're offline!! Please check your internet connection"
  );
  expect(offlineMessage).toBeInTheDocument();
});

it("should update logged in username with loggedInUser input", async () => {
  const setUserName = jest.fn();
  const providerProps = {
    value: {
      loggedInUser: "",
      setUserName,
    },
  };

  await act(async () =>
    render(
      <BrowserRouter>
        <UserContext.Provider value={providerProps.value}>
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    )
  );

  const loggedInUserInput = screen.getByTestId("user-input");
  fireEvent.change(loggedInUserInput, {
    target: { value: "Ankita" },
  });

  expect(setUserName).toHaveBeenCalledWith("Ankita");
});
