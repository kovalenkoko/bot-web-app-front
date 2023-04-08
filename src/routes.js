import ItemDetailsPage from "./pages/ItemDetails/ItemDetailsPage";
import MarketPage from "./pages/Market/MarketPage";

export const ROUTES = [
  {
    path: "/",
    element: <MarketPage />,
  },
  {
    path: "/item-details/:id",
    element: <ItemDetailsPage />,
  },
  {
    path: "*",
    element: <div>No such route</div>,
  },
];
