// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"container " + styles.wrapper}>
        <Link to="/" className={styles.logo}>
          MovieBrowser
        </Link>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Поиск фильмов..."
        />
      </div>
    </header>
  );
};

export default Header;
