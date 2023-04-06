import React, { useState, useRef, useEffect } from "react";

import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as CloseIcon } from '../../assets/icons/Expand_left_stop.svg';
import { Nav, Navbar, Form, Button, InputGroup } from "react-bootstrap";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { BiMessageSquareAdd } from "react-icons/bi";

import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Styles from "../../styles/headerfooter/Navbar.module.css";

import { animated as a, useSpring } from "@react-spring/web";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const ref = useRef(null);
  const navAnimation = useSpring({
    to: {
      maxWidth: sidebarToggle ? "220px" : "83px",
    },
    config: {
      tension: 250,
      friction: 20,
      duration: sidebarToggle ? 200 : 200,
    },
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setSidebarToggle(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  const closeExpandedAnimation = useSpring({
    to: { 
      transform: sidebarToggle ? 'translateX(0)' : 'translateX(-10px)',
      display : sidebarToggle ? 'block' : 'none',
      visibility : 'visible',
      opacity : sidebarToggle ? 1 : 0,
    },
    config: {
      tension: 250,
      friction: 20,
      duration: sidebarToggle ? 200 : 200,
    },
  })

  const springProps = useSpring({
    to: {
      opacity: sidebarToggle ? 1 : 0,
      transform: sidebarToggle ? "translateX(0)" : "translateX(-20px)",
    },
    config: {
      tension: 250,
      friction: 20,
      duration: sidebarToggle ? 200 : 200,
    }
  });

  return (
    <div className={Styles.navContainer}>
      <a.div className={Styles.verticalNav} style={navAnimation} ref={ref}>
        <div className={`${Styles.logoContainer} ${sidebarToggle ? Styles.expanded : ''}`} style={{ cursor: "pointer" }}>
          <Logo
            className={Styles.logo}
            onClick={() => setSidebarToggle(true)}
          />
          <a.div style={closeExpandedAnimation} className={Styles.closeExpanded} onClick={() => setSidebarToggle(false)}>
              <CloseIcon />
          </a.div>
        </div>
        <div className={Styles.iconContainer}>
          <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/" ? Styles.active : ""}`}
            onClick={() => navigate("/")}
          >
            <FiHome
              className={`${Styles.sideLink} ${
                location.pathname === "/" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Beranda</a.span>}
          </div>
          <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/notification" ? Styles.active : ""}`}
          >
            <IoMdNotificationsOutline
              className={`${Styles.sideLink} ${
                location.pathname === "/notification" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Notifikasi</a.span>}
          </div>
          <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } 
              ${location.pathname === "/login" ? Styles.active : ""}`}
            onClick={() => navigate("/login")}
          >
            <MdOutlinePersonOutline
              className={`${Styles.sideLink} ${
                location.pathname === "/login" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Profile</a.span>}
          </div>
          <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/create-post" ? Styles.active : ""}`}
          >
            <BiMessageSquareAdd
              className={`${Styles.sideLink} ${
                location.pathname === "/create-post" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Buat Posting</a.span>}
          </div>
        </div>
      </a.div>

      <Navbar className={Styles.horizontalNav}>
        <Nav className={`mr-auto ${Styles.navLinks}`}>
          <Nav.Link
            as={NavLink}
            to="/"
            style={location.pathname === "/" ? { color: "#444BF2" } : {}}
          >
            Beranda
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/terbaru"
            style={location.pathname === "/terbaru" ? { color: "#444BF2" } : {}}
          >
            Terbaru
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/organisasi"
            style={
              location.pathname === "/organisasi" ? { color: "#444BF2" } : {}
            }
          >
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
            <Search />
          </Button>
        </InputGroup>
      </Navbar>
    </div>
  );
}

export default Navigation;
