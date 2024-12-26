import { useDispatch, useSelector } from "react-redux";
import { Count } from "../count/count";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart-slice";

export const DishCount = ({ id }) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  return <Count value={amount} increase={increase} decrease={decrease} />;
};
