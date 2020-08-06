import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Main.module.css";

const Main = () => (
  <div className={styles["main"]}>
    <div className={styles["main-context"]}>
      <h1>Do you really want to know?</h1>
      <h1>Choose</h1>
      <div className={styles["pills"]}>
        <NavLink to="/portfolio/red">
          <div className={styles["pills-container"]}>
            <i className={[styles["pill-red"], "pills icon"].join(" ")}></i>
            <span>Red Pill</span>
          </div>
        </NavLink>
        <NavLink to="/portfolio/blue">
          <div className={styles["pills-container"]}>
            <i className={[styles["pill-blue"], "pills icon"].join(" ")}></i>
            <span>Blue Pill</span>
          </div>
        </NavLink>
      </div>
    </div>
  </div>
);

export default Main;
