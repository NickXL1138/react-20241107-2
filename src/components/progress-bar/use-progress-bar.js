import { useState } from "react";
import { useEffect } from "react";

const getScrollPercent = () => {
  return (
    (window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
      100 +
    "%"
  );
};

export const useProgressBar = () => {
  const [widthPercent, setWidthPercent] = useState(0);

  useEffect(() => {
    const scrollPersent = () => {
      setWidthPercent(getScrollPercent());
    };

    window.addEventListener("scroll", scrollPersent);
    return () => {
      window.removeEventListener("scroll", scrollPersent);
    };
  }, []);

  return widthPercent;
};
