export const Count = ({ value, increase, decrease }) => {
  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
