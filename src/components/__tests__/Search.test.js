import { render, act, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should search restaurant list for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("restaurant-card");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput, {
    target: { value: "Pizza" },
  });

  fireEvent.click(searchButton);
  
  const cardsAfterSearch = screen.getAllByTestId("restaurant-card");
  expect(cardsAfterSearch[0].textContent).toContain("Pizza");
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("restaurant-card");
  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedButton);

  const cardsAfterFilter = screen.getAllByTestId("restaurant-card");
  expect(cardsAfterFilter.length).toBe(4);
});
