// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({query, setQuery}) => {
  return (
    <header className={styles.header}>
      <div className={"container " + styles.wrapper}>
        <Link to="/" className={styles.logo}>
          MovieBrowser
        </Link>
        <input
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          className={styles.searchInput}
          placeholder="Поиск фильмов..."
          value={query}
        />
      </div>
    </header>
  );
};

export default Header;
