import { Link } from "react-router-dom";

import logo from "../../assets/Find-a-Pet-logo.svg";

import styles from "./styles.module.css";

export const Navbar = () => {
  const leftNavItems = ["Breeds", "Organizations"];
  const rightNavItems = ["Sign Up", "Log In"];
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.leftNavItems}>
          {leftNavItems.map((item, idx) => (
            <Link key={idx} to={`/${item.toLocaleLowerCase()}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.rightWrapper}>
        {rightNavItems.map((item, idx) => (
          <Link key={idx} to={`/${item.toLocaleLowerCase()}`}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};
