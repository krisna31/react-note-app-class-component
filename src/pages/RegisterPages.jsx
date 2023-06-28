import React, { useEffect } from "react";
import "../styles/style.css";
import useInput from "../utils/useInput";
import { register } from "../utils/network-data";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function RegisterPages() {
  const [name, onChangename] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [confirmationPassword, onChangeconfirmationPassword] = useInput("");
  const navigator = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmationPassword) {
      alert("Password tidak sama");
      return;
    }
    await register({ name, email, password });
    navigator("/login");
  };

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <main>
      <section className="login-page">
        <h2>Yuk, login untuk menggunakan aplikasi.</h2>
        <form onSubmit={registerHandler}>
          <div className="input-login">
            <label htmlFor="name">Name</label>
            <input type="name" id="name" value={name} onChange={(e) => onChangename(e)} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => onChangeEmail(e)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => onChangePassword(e)} />
            <label htmlFor="confirmationPassword">Confirmation Password</label>
            <input type="password" id="confirmationPassword" value={confirmationPassword} onChange={(e) => onChangeconfirmationPassword(e)} />
            <button type="submit">Register</button>
          </div>
        </form>
        <p>
          Sudah punya akun? <Link to="/login">Login di sini</Link>
        </p>
      </section>
    </main>
  );
}

export default RegisterPages;
