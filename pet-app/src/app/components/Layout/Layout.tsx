import { useLocation } from "react-router";
import { Navbar } from "../NavBar/Navbar";

import styles from "./styles.module.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isSearch =
    location.pathname === "/search" ? styles.searchLayout : styles.container;

  return (
    <div className={`${isSearch}`}>
      <Navbar />
      {children}
    </div>
  );
};
