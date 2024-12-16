import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";
import { Layout } from "./components/layout/layout.jsx";
import { ThemeContextProvider } from "./components/theme-switch/theme-context.jsx";
import { AuthContextProvider } from "./components/auth-context/auth-context.jsx";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./components/home-page/home-page.jsx";
import { OneRestaurantPage } from "./components/one-restaurant-page/one-restaurant-page.jsx";
import { MenuContainer } from "./components/menu/menu-container.jsx";
import { ReviewsPage } from "./components/reviews-page/reviews-page.jsx";
import { DishPage } from "./components/dish-page/dish-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage title="All you need is anyFood()" />,
  },
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
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
            element: <MenuContainer />,
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
