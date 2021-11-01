import React, { Component } from "react";
import Identicon from "identicon.js";
import photo from "../photo.png";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar">
          <label class="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
            <i class="fa fa-bars"></i>
          </label>
          <a href="#" class="logo">
            <img src={photo} width="40" height="40"></img>
          </a>
          <input type="checkbox" id="chkToggle"></input>
          <ul class="main-nav" id="js-menu">
            {this.props.account ? (
              <button style={{marginRight:"10px"}} type="button" class="btn btn-success position-relative">
              Connected
            </button>
            ) : (
              <button style={{marginRight:"10px"}} type="button" class="btn btn-danger position-relative">
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

        {/* <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={photo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Dgram
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-secondary">
                <small id="account">{this.props.account}</small>
              </small>
              {this.props.account ? (
                <img
                  alt="stfu3"
                  className="ml-2"
                  width="30"
                  height="30"
                  src={`data:image/png;base64,${new Identicon(
                    this.props.account,
                    30
                  ).toString()}`}
                />
              ) : (
                <span></span>
              )}
            </li>
          </ul>
        </nav> */}
      </>
    );
  }
}

export default Navbar;
