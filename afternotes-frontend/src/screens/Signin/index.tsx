import storage from "@/services/storage";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Signin.module.css";
import { v4 as uuid } from "uuid";
import { AES, enc } from "crypto-js";

export const PASSPHRASE_STORE_KEY = "passphrase";

type Props = {
  setUserData: (userData: { email: string; password: string }) => void;
};
const Signin = ({ setUserData }: Props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  console.log({ user });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const encryptedPassword = storage.get<string | undefined>(
      `${user.email}:${PASSPHRASE_STORE_KEY}`
    );

    if (!encryptedPassword) {
      const passphrase = uuid();
      storage.set(
        `${user.email}:${PASSPHRASE_STORE_KEY}`,
        AES.encrypt(passphrase, user.password).toString()
      );
      setUserData({ email: user.email, password: passphrase });
      return;
    }

    const passphrase = AES.decrypt(encryptedPassword, user.password).toString(
      enc.Utf8
    );

    if (passphrase) {
      setUserData({ email: user.email, password: passphrase });
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <h2>Log in to Afternotes</h2>
        <div className={styles.social_buttons}>
          <button>
            <img src="/github.png" alt="" /> GitHub
          </button>
          <button>
            <img src="/google.png" alt="" />
            Google
          </button>
        </div>
        <p className={styles.enter}>Or Log in with</p>

        <form onSubmit={handleSubmit}>
          <span>{error}</span>
          <div className={styles.field}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button className={styles.login}>Iniciar sesion</button>
          <a href="/" className={styles.forgot}>
            Forgot password
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signin;
