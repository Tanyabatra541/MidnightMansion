import * as React from "react";
import styles from "./LoginButton.module.scss";

type Props = {
  onClick: () => void;
};

export const LoginButton = ({ onClick }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      login
    </button>
  );
};
