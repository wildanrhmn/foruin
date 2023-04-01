import React from "react";
import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { FaSearch } from "react-icons/fa";
import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as Hashtag } from "../../assets/icons/Hashtag.svg";
import { ReactComponent as Notification } from "../../assets/icons/notification-on.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as Profile } from "../../assets/icons/profile-2.svg";
import { ReactComponent as Square } from "../../assets/icons/Add_square.svg";
import { Nav, Navbar, Form, Button, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Styles from "../../styles/Navbar.module.css";
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
      <div className={Styles.navContainer}>
        <div className={Styles.verticalNav}>
          <div className={Styles.logoContainer}>
            <Logo className={Styles.logo} />
          </div>
          <div className={Styles.iconContainer}>
            <Home style={{cursor: 'pointer'}}/>
            <Hashtag style={{cursor: 'pointer'}} />
            <Notification style={{cursor: 'pointer'}} />
            <Profile style={{cursor: 'pointer'}} onClick={() => navigate('/login')} />
            <Square style={{cursor: 'pointer'}}  />
            <Settings style={{cursor: 'pointer'}} />
          </div>
        </div>
        <Navbar className={Styles.horizontalNav}>
          <Nav className={`mr-auto ${Styles.navLinks}`}>
            <Nav.Link as={NavLink} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/terbaru">
              Terbaru
            </Nav.Link>
            <Nav.Link as={NavLink} to="/organisasi">
              Organisasi
            </Nav.Link>
            <Nav.Link as={NavLink} to="/topik">
              Topik
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
