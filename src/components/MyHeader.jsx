// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ThemeConsumer } from "../context/ThemeContext";
import { FaMoon, FaSignOutAlt, FaSun } from "react-icons/fa";
import PropTypes from "prop-types";
import { getAccessToken } from "../utils/network-data";

export default class MyHeader extends Component {
  constructor(props) {
    super(props);

    this.logoutHandler = this.logoutHandler.bind(this);
  }

  logoutHandler() {
    this.props.setAuthedUser(null);
  }

  render() {
    return (
      <header>
        <h1>
          <Link to={"/"}>Aplikasi Catatan</Link>
        </h1>
        {getAccessToken() && (
          <nav className="navigation">
            <ul>
              <li>
                <Link to={"/archives"}>Arsip</Link>
              </li>
            </ul>
          </nav>
        )}
        <ThemeConsumer>
          {(theme) => {
            return (
              <button className="toggle-theme" onClick={this.props.toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            );
          }}
        </ThemeConsumer>
        {getAccessToken() && (
          <button className="button-logout" type="button" onClick={this.logoutHandler}>
            <FaSignOutAlt />
          </button>
        )}
      </header>
    );
  }
}

MyHeader.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  setAuthedUser: PropTypes.func,
};
