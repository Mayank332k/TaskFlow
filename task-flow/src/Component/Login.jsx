import styles from "./Login.module.css";
import { AuthContext } from "../Store/Auth-store";
import { useContext } from "react";
import { useState } from "react";

function Login() {
  const { credentials, setIsAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const OnLogin = () => {
    if (email === credentials.id && password === credentials.pass) {
      setIsAuth(true);
    } else {
      setLoginFailed(true);
      setTimeout(() => {
        setLoginFailed(false);
        setEmail("");
        setPassword("");
      }, 900);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>TaskFlow</div>
      <form className={styles.loginForm}>
        <h1 className={styles.title}>Welcome</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`${styles.input} ${
              loginFailed ? styles.inputError : ""
            }`}
            placeholder="name@example.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`${styles.input} ${
              loginFailed ? styles.inputError : ""
            }`}
            placeholder="Your password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className={styles.button}
          onClick={() => {
            OnLogin();
          }}
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Login;
