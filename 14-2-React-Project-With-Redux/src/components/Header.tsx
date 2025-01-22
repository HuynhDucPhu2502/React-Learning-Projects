import classes from "./Header.module.css";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { RootState } from "../store";

const Header = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
