import { RestaurantsPage } from "./pages/restaurants-page.jsx";
import { Layout } from "./components/layout/layout.jsx";
import { ThemeContextProvider } from "./components/theme-switch/theme-context.jsx";
import { AuthContextProvider } from "./components/auth-context/auth-context.jsx";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { OneRestaurantPage } from "./pages/one-restaurant-page.jsx";
import { ReviewsPage } from "./pages/reviews-page.jsx";
import { HomePage } from "./pages/home-page.jsx";
import { MenuPage } from "./pages/menu-page.jsx";
import { DishPage } from "./pages/dish-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage title="All you need is anyFood()" />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "restaurants",
        element: <RestaurantsPage />,
      },
      {
        path: "restaurants/:restaurantId",
        element: <OneRestaurantPage />,
        children: [
          {
            index: true,
            element: <Navigate to="menu" />,
          },
          {
            path: "menu",
            element: <MenuPage />,
          },
          {
            path: "reviews",
            element: <ReviewsPage />,
          },
        ],
      },
      { path: "dish/:dishId", element: <DishPage /> },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
