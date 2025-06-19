import { render, screen } from "@testing-library/react";
import RestaurantCard, {withHigherRatings} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"

describe("Contact Us Page Test Cases", () => {
  it("Should load restaurant card component", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
  });

  it("Should render restaurant card component with Promoted Label", () => {
    render(withHigherRatings(RestaurantCard)({ resData: MOCK_DATA }));
    const label = screen.getByText("Promoted");
    expect(label).toBeInTheDocument();
  });
});
