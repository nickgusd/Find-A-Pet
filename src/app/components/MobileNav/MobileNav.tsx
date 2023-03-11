import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/high-res-logo.svg";

import styles from "./styles.module.css";

export const MobileNav = ({
  setMobileNav,
  logoutWithRedirect,
  loginWithRedirect,
  isAuthenticated,
}: any) => {
  return (
    <div className={styles.mobileNav}>
      <div className={styles.close}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <AiOutlineClose color="#525252" onClick={() => setMobileNav(false)} />
      </div>
      <div className={styles.links}>
        {isAuthenticated && (
          <div onClick={() => logoutWithRedirect()}>Log Out</div>
        )}
        {!isAuthenticated && (
          <div
            onClick={() =>
              loginWithRedirect({
                appState: {
                  returnTo: window.location.pathname + window.location.search,
                },
              })
            }
          >
            Log In
          </div>
        )}
        <Link to="/organizations">Organizations</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
};
