import React from "react";

import aboutMe from "../about";
import projects from "../projectList";
import menuItems from "../constants";

import styles from "./Red.module.css";

function Red(props) {
  return (
    <div className={styles["container"]}>
      <div className={styles["header-red"]}>
        <h1 className={styles["desktop-h1"]}>Welcome To The Rabbit Hole</h1>
        <h1 className={styles["mobile-h1"]}>Welcome</h1>
        <hr />
      </div>
      <div className={styles["main"]}>
        <div className={styles["text-container"]}>
          <p>{aboutMe.intro}</p>
        </div>
        <div className={styles["text-container"]}>
          <h2 className={styles["h2-headers"]}>Interests</h2>
          <ul>
            {aboutMe.interest.map((ele, i) => (
              <li key={i}>{ele}</li>
            ))}
          </ul>
        </div>
        <div className={styles["text-container"]}>
          <h2 className={styles["h2-headers"]}>Projects</h2>
          <div className={styles["projects"]}>
            {projects.map((p, i) => (
              <div key={i} className={styles["project"]}>
                <a
                  className={styles["project-a"]}
                  href={p.src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["footer-desktop"]}>
        {menuItems.social.map((ele, i) => (
          <a key={i} href={ele.href} target="_blank" rel="noopener noreferrer">
            <i className={ele.icon}></i>
          </a>
        ))}
      </div>
      <div className={styles["footer-mobile"]}>
        {menuItems.social.map((ele, i) => (
          <a key={i} href={ele.href} target="_blank" rel="noopener noreferrer">
            <i className={ele.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Red;
