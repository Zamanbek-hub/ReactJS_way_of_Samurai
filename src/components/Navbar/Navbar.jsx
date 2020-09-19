import React from "react";
import classes from "./Navbar.module.css";

// classes from module like this
// let classes = {
//   nav: "Navbar_nav__2Wjc7",
//   item: "Navbar_nav__2Wjc7",
//  active : "Navbar_active_21311"
// };

// let c1 = "item";
// let c2 = "active";
// // item active
// let classes = c1 + " " + c2;
// let classesNew = `${c1} ${c2}`;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a>Profile</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a>Messages</a>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
