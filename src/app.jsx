import { RestaurantsPage } from "./components/restaurants-page/restaurants-page.jsx";
import { Layout } from "./components/layout/layout.jsx";
import { ThemeContextProvider } from "./components/theme-switch/theme-context.jsx";
import { AuthContextProvider } from "./components/auth-context/auth-context.jsx";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
};
