import ItemDetailsPage from "./pages/ItemDetails/ItemDetailsPage";
import MarketPage from "./pages/Market/MarketPage";
import OrderPage from "./pages/Order/OrderPage";

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
    path: "/order/:id",
    element: <OrderPage />,
  },
  {
    path: "*",
    element: <div>No such route</div>,
  },
];
