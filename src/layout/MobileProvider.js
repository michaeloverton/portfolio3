import React, { createContext, useContext, useState, useEffect } from "react";

const MOBILE_WIDTH = 800; // This is the bootstrap 'lg' breakpoint.

// type MobileContextType = {
//   isMobile: () => boolean;
//   width: () => number;
// };

const MobileContext = createContext({
  isMobile: () => false,
  width: () => window.innerWidth,
});

export const MobileProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const mobile = { isMobile: () => width <= MOBILE_WIDTH, width: () => width };

  return (
    <MobileContext.Provider value={mobile}>{children}</MobileContext.Provider>
  );
};

export const useIsMobile = () => {
  return useContext(MobileContext);
};
