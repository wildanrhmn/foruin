import React from "react";

import { Button } from "react-bootstrap";
import Image from "react-bootstrap";
import Styles from "../../styles/Navbar.module.css";

const Header = () => {
  return (
    <div className={Styles.header}>
      <div className="container">
        <div className={Styles.header_container}>
          <div className={Styles.header_wrapper}>
            <div className={Styles.left}>
              <h1>LOGO</h1>
            </div>
            <div className={Styles.right}>
              <ul className={`${Styles.menu}`}>
                <li>Home</li>
                <li>Forum</li>
                <li>Dashboard</li>
                <li>Setting</li>
              </ul>

              <div className={Styles.button_wrapper}>
                <Button className={Styles.btnLogin}>Login</Button>
                <Button className={Styles.btnRegister}>Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
