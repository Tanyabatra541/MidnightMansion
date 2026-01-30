import * as React from "react";
import styles from "./LoginModal.module.scss";

type Props = {
  onClose: () => void;
};

export const LoginModal = ({ onClose }: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showOptions, setShowOptions] = React.useState(false);

  const handleSubmit = () => {
    console.log({ email, password });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>login</h2>

        <label>
          email
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className={styles.submit} onClick={handleSubmit}>
          login
        </button>

        <div
          className={styles.optionsToggle}
          onClick={() => setShowOptions(!showOptions)}
        >
          additional options ▶
        </div>

        {showOptions && (
          <div className={styles.options}>
            <a href="#">forgot your password?</a>
            <a href="#">register</a>
          </div>
        )}
      </div>
    </div>
  );
};
