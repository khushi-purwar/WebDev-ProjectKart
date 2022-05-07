import { useLayoutEffect, useState } from "react";

export const getSingleDecimalValue = (num) => {
  return (Math.round(num * 10) / 10).toFixed(1);
};

export const isCollectionsEmpty = (data) => {
  return Array.isArray(data) && data.length === 0;
};

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
