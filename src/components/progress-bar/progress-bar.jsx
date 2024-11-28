import { useProgressBar } from "./use-progress-bar";

export const ProgressBar = () => {
  const withPrecent = useProgressBar();

  return (
    <div
      style={{
        width: withPrecent,
        position: "fixed",
        height: "8px",
        top: "0px",
        backgroundColor: "#FF0000",
      }}
    ></div>
  );
};
