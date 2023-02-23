import React from "react";
import { Link } from "react-router-dom";
import linked24 from "../../../assets/social/linkedin24W.png";
import git24 from "../../../assets/social/github24W.png";
import wellfound24 from "../../../assets/social/wellfound24W.png";
import styles from "./social.module.scss";

function SocialLinks() {
  const linkedIn = { pathname: "https://www.linkedin.com/in/ross-mabbett/" };
  const git = { pathname: "https://github.com/rtexelm" };
  const wellfound = { pathname: "https://angel.co/u/ross-mabbett" };
  // const email = {};
  // const portfolio = {};

  return (
    <div className={styles.social}>
      <ul className={styles.links}>
        <li>
          <Link to={linkedIn} target="_blank">
            <img src={linked24} alt="LinkedIn" />
          </Link>
        </li>
        <li>
          <Link to={git} target="_blank">
            <img src={git24} alt="gitHub" />
          </Link>
        </li>
        <li>
          <Link to={wellfound} target="_blank">
            <img src={wellfound24} alt="Wellfound" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
