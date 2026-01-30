import * as React from "react";
import styles from "./LoginModal.module.scss";

type Props = {
  onClose: () => void;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export const LoginModal = ({ onClose }: Props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showOptions, setShowOptions] = React.useState(false);
  const [errors, setErrors] = React.useState<{ email?: string; password?: string }>({});

  const handleSubmit = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "email is required";
    } else if (!EMAIL_REGEX.test(email.trim())) {
      newErrors.email = "please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "password is required";
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      newErrors.password = `password must be at least ${MIN_PASSWORD_LENGTH} characters`;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ email, password });
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.welcome}>welcome!</div>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>login</h2>

        <label className={errors.email ? styles.labelError : undefined}>
          email
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>

        <label className={errors.password ? styles.labelError : undefined}>
          password
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
            }}
            aria-invalid={!!errors.password}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
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
