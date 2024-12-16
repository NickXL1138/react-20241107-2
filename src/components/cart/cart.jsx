import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart-slice";
import { CartItem } from "./cart-item";

import styles from "./cart.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <div className={styles.cartContainer}>
      <h3 className={styles.cartHeader}>Корзина</h3>
      <ul>
        {items.map(({ id }) => (
          <li key={id} className={styles.cartListItem}>
            <CartItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
