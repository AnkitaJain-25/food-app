import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Veg Pizza (13)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("food-items")).toHaveLength(13);

  const addButtons = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addButtons[2]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("food-items")).toHaveLength(15);

  const removeButtons = screen.getAllByRole("button", { name: "Remove Item" });
  fireEvent.click(removeButtons[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  expect(screen.getAllByTestId("food-items")).toHaveLength(14);

  fireEvent.click(addButtons[2]);
  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCart);
  expect(
    screen.getByText("Your Cart is Empty. Add Items to the cart.")
  ).toBeInTheDocument();

  expect(screen.getAllByTestId("food-items")).toHaveLength(13);
});
