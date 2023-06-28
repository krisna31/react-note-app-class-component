// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../context/ThemeContext";
import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <h1>
          <Link to={"/"}>Aplikasi Catatan</Link>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to={"/archives"}>Arsip</Link>
            </li>
          </ul>
        </nav>
        <ThemeConsumer>
          {(theme) => {
            return (
              <button className="toggle-theme" onClick={this.props.toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            );
          }}
        </ThemeConsumer>
        <button className="button-logout" type="button">
          <Link to={"/login"}>
            <FaSignOutAlt />
          </Link>
        </button>
      </header>
    );
  }
}

MyHeader.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
