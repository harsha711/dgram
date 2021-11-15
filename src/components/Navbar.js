import React, { Component } from "react";
import Identicon from "identicon.js";
import photo from "../photo.png";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <label
            className="navbar-toggle"
            id="js-navbar-toggle"
            htmlfor="chkToggle"
          >
            <i className="fa fa-bars"></i>
          </label>
          <a href="#" className="logo">
            <img
              src={"/cat.png"}
              width="50"
              height="50"
              style={{ marginLeft: "50px" }}
            ></img>
            <span style={{ color: "black", marginLeft: "10px" }}>Newko</span>
          </a>
          <input type="checkbox" id="chkToggle"></input>
          <ul className="main-nav" id="js-menu" style={{ marginTop: "10px" }}>
            {this.props.account ? (
              <button
                style={{ marginRight: "10px" }}
                type="button"
                className="btn btn-success position-relative"
              >
                Connected
              </button>
            ) : (
              <button
                style={{ marginRight: "10px" }}
                type="button"
                className="btn btn-danger position-relative"
              >
                Disconnected
              </button>
            )}

            <small style={{ color: "black", marginTop: "7px" }}>
              <small id="account">{this.props.account}</small>
            </small>
            {this.props.account ? (
              <img
                alt="stfu3"
                className="ml-2"
                width="40"
                height="40"
                src={`data:image/png;base64,${new Identicon(
                  this.props.account,
                  30
                ).toString()}`}
              />
            ) : (
              <span></span>
            )}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
