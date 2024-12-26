import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useAuth } from "../auth-context/use-auth";
import { Cart } from "../cart/cart";
import { ProgressBar } from "../progress-bar/progress-bar";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
  const { isAuth } = useAuth();

  return (
    <div>
      <Header />
      <ProgressBar />
      <Outlet />
      {children}
      {isAuth.name && <Cart />}
      <Footer />
    </div>
  );
};
