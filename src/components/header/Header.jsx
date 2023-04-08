import React, { useState, useRef, useEffect } from "react";
import { Nav, Navbar, Form, Button, InputGroup } from "react-bootstrap";

import { ReactComponent as Logo } from "../../assets/logo/Logo.svg";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as CloseIcon } from '../../assets/icons/Expand_left_stop.svg';
import { ReactComponent as Banned } from '../../assets/icons/Banned.svg';
import { ReactComponent as Home } from '../../assets/icons/Home.svg';
import { ReactComponent as Notification } from '../../assets/icons/notification-on.svg';
import { ReactComponent as AddSquare } from '../../assets/icons/Add_square.svg';
import { ReactComponent as Person } from '../../assets/icons/profile-2.svg';
import { ReactComponent as Trash } from '../../assets/icons/Trash.svg';
import { ReactComponent as Permission } from '../../assets/icons/Permission.svg';
import { ReactComponent as Submission } from '../../assets/icons/Submission.svg';
import { ReactComponent as Reports } from '../../assets/icons/Reports.svg';

import { useSelector, useDispatch } from "react-redux";
import { AsyncGetPosts } from "../../state/posts/middleware";

import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Styles from "../../styles/headerfooter/Navbar.module.css";

import { animated as a, useSpring } from "@react-spring/web";
import cookies from "../../utils/cookie";

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const { auth = {} } = useSelector(states => states);
  const dispatch = useDispatch();

  const [sidebarToggle, setSidebarToggle] = useState(false);
  const ref = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem('postData')
    sessionStorage.removeItem('login_forum_info')
    cookies.remove('refreshToken')

    navigate('/login');
    window.location.reload();
  }

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
    dispatch(AsyncGetPosts())
  }, [dispatch])

  const handleNavigate = () => {
    if(auth.role){
      navigate('/profile')
    } else {
      navigate('/login')
    }
  }

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

  if(auth.role === 'SysAdmin'){
    return(
      <div className={Styles.navContainer}>
      <a.div className={Styles.verticalNav} style={auth.role === 'SysAdmin' ? {...navAnimation, width: '220px'} : {...navAnimation}} ref={ref}>
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
            } ${location.pathname === "/deleted-post" ? Styles.active : ""}`}
          >
            <Trash
              className={`${Styles.sideLink} ${
                location.pathname === "/deleted-post" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Hapus Posting</a.span>}
          </div>
        <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/banned-account" ? Styles.active : ""}`}
          >
            <Banned
              className={`${Styles.sideLink} ${
                location.pathname === "/banned-account" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Akun Banned</a.span>}
          </div>
        <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/reported-post" ? Styles.active : ""}`}
          >
            <Reports
              className={`${Styles.sideLink} ${
                location.pathname === "/reported-post" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Persetujuan Akun</a.span>}
          </div>
        <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/account-permission" ? Styles.active : ""}`}
          >
            <Permission
              className={`${Styles.sideLink} ${
                location.pathname === "/account-permission" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Form Submisi</a.span>}
          </div>
        <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/submission-form" ? Styles.active : ""}`}
          >
            <Submission
              className={`${Styles.sideLink} ${
                location.pathname === "/submission-form" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap" }}>Form Submisi</a.span>}
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
            to="/organization-list"
            style={
              location.pathname === "/organization-list" ? { color: "#444BF2" } : {}
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
            <Button onClick={handleLogout}>Logout</Button>
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
    )
  }

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
            <Home
              className={`${Styles.sideLink} ${
                location.pathname === "/" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap", fontSize: '16px'}}>Beranda</a.span>}
          </div>
          <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/notification" ? Styles.active : ""}`}
          >
            <Notification
              className={`${Styles.sideLink} ${
                location.pathname === "/notification" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap", fontSize: '16px' }}>Notifikasi</a.span>}
          </div>
          <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } 
              ${location.pathname === "/login" || location.pathname === "/profile" ? Styles.active : ""}`}
            onClick={handleNavigate}
          >
            <Person
              className={`${Styles.sideLink} ${
                location.pathname === "/login" || location.pathname === "/profile" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap", fontSize: '16px' }}>Profile</a.span>}
          </div>
          <div
            className={`${Styles.sideIcon} ${
              sidebarToggle ? Styles.expanded : ""
            } ${location.pathname === "/create-post" ? Styles.active : ""}`}
            onClick={() => navigate("/create-post")}
          >
            <AddSquare
              className={`${Styles.sideLink} ${
                location.pathname === "/create-post" ? Styles.active : ""
              }`}
            />
            {sidebarToggle && <a.span style={{...springProps ,whiteSpace: "nowrap", fontSize: '16px' }}>Buat Posting</a.span>}
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
            to="/organization-list"
            style={
              location.pathname === "/organization-list" ? { color: "#444BF2" } : {}
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
        <Button onClick={handleLogout}>Logout</Button>
      </Navbar>
    </div>
  );
}

export default Navigation;
