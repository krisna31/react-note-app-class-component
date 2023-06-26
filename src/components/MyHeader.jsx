// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MyHeader extends Component {
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
      </header>
    );
  }
}
