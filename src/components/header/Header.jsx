import React from "react";
import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { FaSearch } from "react-icons/fa";
import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification-on.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile-2.svg";
import { ReactComponent as Square } from "../../assets/icons/Add_square.svg";
import { Nav, Navbar, Form, Button, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Styles from "../../styles/Navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={Styles.navContainer}>
      <div className={Styles.verticalNav}>
        <div className={Styles.logoContainer} style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
          <Logo className={Styles.logo} />
        </div>
        <div className={Styles.iconContainer}>
          <div className={Styles.sideIcon}>
            <Home className={Styles.sideLink}
             onClick={() => navigate("/")}
            />
          </div>
          <div  className={Styles.sideIcon}>
            <Notification
              className={Styles.sideLink}
            />
          </div>
          <div  className={Styles.sideIcon}>
            <Profile
            
              onClick={() => navigate("/login")}
              className={Styles.sideLink}
            />
          </div>
          <div className={Styles.sideIcon}>
            <Square className={Styles.sideLink} />
          </div>
        </div>
      </div>
      <Navbar className={Styles.horizontalNav}>
        <Nav className={`mr-auto ${Styles.navLinks}`}>
          <Nav.Link as={NavLink} to="/"
          style={location.pathname === '/' ? {color: '#444BF2'} : {}}>
            Beranda
          </Nav.Link>
          <Nav.Link as={NavLink} to="/terbaru"
          style={location.pathname === '/terbaru' ? {color: '#444BF2'} : {}}>
            Terbaru
          </Nav.Link>
          <Nav.Link as={NavLink} to="/organisasi"
          style={location.pathname === '/organisasi' ? {color: '#444BF2'} : {}}>
            Organisasi
          </Nav.Link>
          <Nav.Link as={NavLink} className={Styles.hasSubMenu}>
            Topik
            <ul className={Styles.subMenu}>
              <li>
                <Nav.Link as={NavLink} to="">
                  Info Kampus
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="">
                  Magang
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="">
                  Lomba
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="">
                  Penelitian
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="">
                  Seminar
                </Nav.Link>
              </li>
              <li>
                <Nav.Link as={NavLink} to="">
                  Olahraga
                </Nav.Link>
              </li>
            </ul>
          </Nav.Link>
        </Nav>

        <InputGroup className={Styles.inputGroup}>
          <Form.Control
            placeholder="Cari"
            aria-label="Cari"
            className={Styles.myFormControl}
          />
          <Button className={Styles.buttonForm}>
            <FaSearch size={24} color="#444BF2" />
          </Button>
        </InputGroup>
      </Navbar>
    </div>
  );
}

export default Navigation;
