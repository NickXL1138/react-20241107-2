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
  const [withPrecent, setWithPrecent] = useState(0);

  useEffect(() => {
    const scrollPersent = () => {
      setWithPrecent(getScrollPercent());
    };

    window.addEventListener("scroll", scrollPersent);
    return () => {
      window.removeEventListener("scroll", scrollPersent);
    };
  }, []);

  console.log(withPrecent);
  return withPrecent;
};
