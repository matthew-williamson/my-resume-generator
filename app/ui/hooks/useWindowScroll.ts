import { useEffect, useState } from "react";

const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return scrollPosition;
};

export default useWindowScroll;
