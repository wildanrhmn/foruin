import React, { useEffect } from "react";
import { useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import Styles from "../../styles/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AsyncLogin } from "../../state/auth/middleware";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setUsername] = useState("");
  // const [error, setError] = useState(false);
  const { auth } = useSelector(states => states);
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async(e) => {
    e.preventDefault();
    dispatch(AsyncLogin({ email, password }));
    navigate('/');
  };

  useEffect(() => {
    if(auth.token ){
      /* eslint-disable */
      navigate('/')
    }
  }, [auth])
  return (
    <section className={Styles.loginWrapper}>
      <div className="container">
        <div className={Styles.loginForm}>
          <p
            className="mb-4 text-center"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Login Organization
          </p>
          <Form onSubmit={handleLogin}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
              style={{ fontSize: "15px", fontWeight: "600" }}
            >
              <Form.Control
                type="email"
                placeholder="Email"
                style={{ height: "50px", fontSize: "14px" }}
                className={Styles.loginFormControl}
                value={email}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              style={{ fontSize: "15px", fontWeight: "600" }}
            >
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ height: "50px", fontSize: "14px" }}
                className={Styles.loginFormControl}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </FloatingLabel>
            <Form.Group
              className={`${Styles.checkbox} ms-1 mb-4 mt-3`}
              controlId="rememberMeCheck"
            >
              <Form.Check
                type="checkbox"
                label="Remember me"
                className={`${Styles.checkbox}`}
              />
            </Form.Group>
            <div className={`${Styles.buttonWrapper} d-flex flex-column gap-3`}>
              <Button
                className={`${Styles.btnInLogin} ${Styles.btnLogin}`}
                type="submit"
              >
                Login
              </Button>
              <Button className={`${Styles.btnInLogin} ${Styles.btnDaftar}`}>
                Daftar Organisasi
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Login;
