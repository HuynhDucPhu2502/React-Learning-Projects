import classes from "./MainNavigation.module.css";

import NewLetterSignup from "./NewLetterSignup";

import { NavLink, Form, useRouteLoaderData } from "react-router-dom";

const MainNavigation = () => {
  const token = useRouteLoaderData("root");

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"events"}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"newsletter"}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              NewsLetter
            </NavLink>
          </li>
          {token ? (
            <li>
              <Form action="/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          ) : (
            <li>
              <NavLink
                to={"auth?mode=login"}
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Authentication
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      <NewLetterSignup />
    </header>
  );
};

export default MainNavigation;
