import { useState } from "react";

export const Count = () => {
  const [value, setValue] = useState(0);

  const increase = () => {
    if (value >= 0 && value < 5) {
      setValue(value + 1);
    }
  };
  const decrease = () => {
    if (value > 0 && value <= 5) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
