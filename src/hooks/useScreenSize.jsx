import { useState, useEffect } from "react";

const useScreenSize = () => {
    
  const [width, setWidth] = useState(window.screen.availWidth);
  const [height, setHeight] = useState(window.screen.availHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {

    setWidth(window.screen.availWidth);
    setHeight(window.screen.availHeight);

  };

  return { width, height };
};


export default useScreenSize;