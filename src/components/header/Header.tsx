// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ChangeEvent, ReactNode } from "react";

type typeHeaderProps = {
  query: string;
  setQuery: (value: string) => void;
};

const Header = ({ query, setQuery }: typeHeaderProps): ReactNode | null => {
  return (
    <header className={styles.header}>
      <div className={"container " + styles.wrapper}>
        <Link to="/" className={styles.logo}>
          MovieBrowser
        </Link>
        <input
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
          }
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
