import { Link } from "react-router-dom";

import logo from "../../assets/Find-a-Pet-logo.svg";
import { getPath } from "../../utils/string";

import styles from "./styles.module.css";

export const Navbar = () => {
  const leftNavItems = ["Breeds", "Organizations"];
  const rightNavItems = ["Sign Up", "Log In"];

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.leftNavItems}>
          {leftNavItems.map((item, idx) => (
            <Link key={idx} to={`/${getPath(item)}`}>
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.rightWrapper}>
        {rightNavItems.map((item, idx) => (
          <Link key={idx} to={`/${getPath(item)}`}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};
