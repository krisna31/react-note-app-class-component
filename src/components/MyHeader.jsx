// import PropTypes from "prop-types";
import React, { Component } from "react";

export default class MyHeader extends Component {
  render() {
    return (
      <header>
        <h1>
          <a href="/">Aplikasi Catatan</a>
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/archives">Arsip</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
