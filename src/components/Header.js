import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui pointing menu container">
          <Link className="item" to="/about">
            Streamer
          </Link>
          <div className="right menu">
            <Link to="/" className="item">
              Streams
            </Link>
            <a className="item">Login</a>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Header;
