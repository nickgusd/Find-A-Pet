import { Navbar } from "../NavBar/Navbar";

import styles from "./styles.module.css";

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
};
