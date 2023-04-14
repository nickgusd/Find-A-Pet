import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/high-res-logo.svg";
import { useAppDispatch } from "../../hooks";
import { setMobileNav } from "../../slice/animalsSlice";

import styles from "./styles.module.css";

export const MobileNav = ({
  logoutWithRedirect,
  loginWithRedirect,
  isAuthenticated,
}: any) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.mobileNav}>
      <div className={styles.close}>
        <Link to="/" onClick={() => dispatch(setMobileNav(false))}>
          <img src={logo} alt="logo" />
        </Link>
        <AiOutlineClose
          color="#525252"
          onClick={() => dispatch(setMobileNav(false))}
        />
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
        <Link to="/organizations" onClick={() => dispatch(setMobileNav(false))}>Organizations</Link>
        <Link to="/favorites" onClick={() => dispatch(setMobileNav(false))}>Favorites</Link>
      </div>
    </div>
  );
};
