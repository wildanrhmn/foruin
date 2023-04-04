import React from 'react'
import { Form, FloatingLabel, Button } from "react-bootstrap";
import Styles from "../../styles/Register.module.css";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className={Styles.registerWrapper}>
            <div className="container">
                <p
                    className="mb-2 text-center"
                    style={{ fontSize: "32px", fontWeight: "600", color: "#444BF2" }}
                >
                    Registrasi Akun Foruin
                </p>
                <p
                    className="mb-3 text-center"
                    style={{ fontSize: "20px", fontWeight: "400", color: "#577590" }}
                >
                    Buat Akun Baru untuk Organisasi
                </p>
                <Form onSubmit=""
                    className={Styles.registerForm}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nama Organisasi"
                        className="mb-3"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                        <Form.Control
                            type="input"
                            placeholder="Nama Organisasi"
                            style={{ height: "50px", fontSize: "14px" }}
                            className={Styles.registerFormControl}
                            required
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Nama Akun"
                        className="mb-3"
                        style={{ fontSize: "15px", fontWeight: "600" }}
                    >
                        <Form.Control
                            type="input"
                            placeholder="Nama Akun"
                            style={{ height: "50px", fontSize: "14px" }}
                            className={Styles.registerFormControl}
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
                            required
                        />
                    </FloatingLabel>

                    <Form.Group controlId="formFile"
                        className={`mb-3 mt-3`}
                    >
                        <Form.Label
                            style={{ fontSize: "14px", fontWeight: "600" }}
                        >
                            Lampiran
                        </Form.Label>
                        <Form.Control type="file" multiple
                            style={{ fontSize: "10px" }}
                            required
                        />
                        <Form.Label
                            style={{ fontSize: "12px", color: "#577590" }}
                        >
                            Unggah beberapa file untuk membuktikan kamu adalah organisasi
                        </Form.Label>
                    </Form.Group>


                    <Form.Group
                        className={`${Styles.checkbox} ms-1 mb-4 mt-3`}
                        controlId="persyaratanLayanan"
                    >
                        <Form.Check
                            type="checkbox"
                            label="Kami menyetujui persyaratan layanan dan kebijakan privasi"
                            className={`${Styles.checkbox}`}
                            required
                        />
                    </Form.Group>
                    <div className={`${Styles.buttonWrapper} d-flex flex-column gap-3`}>
                        <Button
                            className={`${Styles.btnInRegister} ${Styles.btnRegister}`}
                            type="submit"
                        >
                            Daftar
                        </Button>
                        <Button
                            className={`${Styles.btnInRegister} ${Styles.btnLogin}`}
                            type="button"
                        >
                            <Link to={`/login`}
                                style={{ textDecoration: "none", color: "#444BF2" }}
                            >Masuk</Link>
                        </Button>
                    </div>
                </Form>

            </div>
        </section>
    )
}

export default Register