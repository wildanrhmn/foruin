import React, { useState } from 'react'
import { Form, FloatingLabel, Button } from "react-bootstrap";
import Styles from "../../styles/Register.module.css";
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { AsyncRegister } from '../../state/auth/middleware';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Register = () => {
    const [isAgreeTerms, setIsAgreeTerms] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }  
        setOpenSnackBar(false);
      };

    const handleRegister = (e) => {
        e.preventDefault();
        if(!isAgreeTerms){
            setOpenSnackBar(true);
            return;
        }
        try{
            dispatch(AsyncRegister({ name, email, password, username }));
        } catch (err) {
            console.error(err);
        }
    }  
    return (
        <section className={Styles.registerWrapper}>
            <div className="container">
                <p
                    className="mb-2 text-center"
                    style={{ fontSize: "32px", fontWeight: "600", color: "#444BF2" }}
                >
                    Sign Up
                </p>
                <p
                    className="mb-3 text-center"
                    style={{ fontSize: "20px", fontWeight: "400", color: "#577590" }}
                >
                    Create account as a User
                </p>
                <Form onSubmit={handleRegister}
                    className={Styles.registerForm}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                        <Form.Control
                            type="input"
                            placeholder="Account Name"
                            style={{ height: "50px", fontSize: "14px" }}
                            className={Styles.registerFormControl}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Account Name"
                        className="mb-3"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                        <Form.Control
                            type="input"
                            placeholder="Nama Akun"
                            style={{ height: "50px", fontSize: "14px" }}
                            className={Styles.registerFormControl}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </FloatingLabel>
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
                            className={Styles.registerFormControl}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                        className="mb-3"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            style={{ height: "50px", fontSize: "14px" }}
                            className={Styles.registerFormControl}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FloatingLabel>
                    
                    <Form.Group
                        className={`${Styles.checkbox} ms-1 mb-4 mt-3 d-flex gap-2 align-items-center`}
                        controlId="persyaratanLayanan"
                    >
                        <Form.Check
                            type="checkbox"
                            className={`${Styles.checkbox}`}
                            onChange={() => setIsAgreeTerms(!isAgreeTerms)}
                        />
                        <span style={{ fontSize: "16px", fontWeight: "600" }}>I agree to the terms of service and privacy policy</span>
                    </Form.Group>
                    <div className={`${Styles.buttonWrapper} d-flex flex-column gap-3`}>
                        <Button
                            className={`${Styles.btnInRegister} ${Styles.btnRegister}`}
                            type="submit"
                        >
                            Sign Up
                        </Button>
                        <Button
                            className={`${Styles.btnInRegister} ${Styles.btnLogin}`}
                            type="button"
                        >
                            <Link to={`/login`}
                                style={{ textDecoration: "none", color: "#1e1e1e" }}
                            >Log In</Link>
                        </Button>
                    </div>
                </Form>
            </div>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose} style={{ zIndex: 9999 }}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Please agree to terms and condition to sign up.
                </Alert>
            </Snackbar>
        </section>
    )
}

export default Register