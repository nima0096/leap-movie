import { useEffect, useState } from "react";

export const useWidth = (breakpoint = 768) => {
  const [isSmaller, setIsSmaller] = useState(false);

  useEffect(() => {
    const checkIsSmaller = () => {
      setIsSmaller(window.innerWidth < breakpoint);
    };

    checkIsSmaller();
    window.addEventListener("resize", checkIsSmaller);

    return () => {
      window.removeEventListener("resize", checkIsSmaller);
    };
  }, [breakpoint]);

  return { isSmaller, isBigger: !isSmaller };
};
