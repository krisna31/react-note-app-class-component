import React from "react";
import "../styles/style.css";
import useInput from "../utils/useInput";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LoginPages({ setAuthedUser }) {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const dataUser = await login({ email, password });
    !dataUser.error && setAuthedUser(dataUser.data.accessToken);
  };

  return (
    <main>
      <section className="login-page">
        <h2>Yuk, login untuk menggunakan aplikasi.</h2>
        <form onSubmit={loginHandler}>
          <div className="input-login">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => onChangeEmail(e)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => onChangePassword(e)} />
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </section>
    </main>
  );
}

export default LoginPages;

LoginPages.propTypes = {
  setAuthedUser: PropTypes.func.isRequired,
};
