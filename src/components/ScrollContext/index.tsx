import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";

interface ScrollProviderProps {
  children: ReactNode;
}

const ScrollContext = createContext<number>(0);

export const useScroll = (): number => {
  return useContext(ScrollContext);
};

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={scrollY}>{children}</ScrollContext.Provider>
  );
};
