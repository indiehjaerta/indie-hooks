import { useEffect, useState } from "react";

export const useCountdown = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  const startCountDown = (seconds: number) => {
    setCount(seconds);
  };

  const stopCountDown = () => {
    setCount(0);
  };

  return { count, startCountDown, stopCountDown };
};
