import { h } from "preact";

import Link from "../link";

import styles from "./styles.module.css";

export default function Shell({ children }) {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.content}>{children}</main>
    </div>
  );
}
