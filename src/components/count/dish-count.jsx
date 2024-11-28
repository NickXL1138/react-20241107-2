import { Count } from "./count";
import { useCount } from "./use-count";

export const DishCount = () => {
  const { value, increase, decrease } = useCount();

  return <Count value={value} increase={increase} decrease={decrease} />;
};
