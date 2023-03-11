import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/high-res-logo.svg";

import styles from "./styles.module.css";

export const MobileNav = ({ setMobileNav }: any) => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.close}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <AiOutlineClose color="#525252" onClick={() => setMobileNav(false)} />
      </div>
      <div className={styles.links}>
        <Link to="/organizations">Organizations</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="#">Log In</Link>
      </div>
    </div>
  );
};
