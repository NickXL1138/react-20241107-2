import { Count } from "../count/count";
import { useCount } from "../count/use-count";

export const DishCount = () => {
  const { value, increase, decrease } = useCount();

  return <Count value={value} increase={increase} decrease={decrease} />;
};
