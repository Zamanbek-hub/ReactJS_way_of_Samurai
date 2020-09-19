import React from "react";
import s from "./Header.module.css";
// we cant {s.header-gda} we  can't use '-'

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" />
    </header>
  );
};

export default Header;
