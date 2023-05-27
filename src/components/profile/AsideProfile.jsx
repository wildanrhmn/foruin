import React from 'react'
import { useState, useEffect, useRef } from "react";


import Anya from '../../assets/images/anya.jpg';
import { Image } from "react-bootstrap";
import { ReactComponent as Dots } from "../../assets/icons/Threedots.svg";



import Styles from "../../styles/profile/AsideProfile.module.css"

const AsideProfile = () => {

    const [show, setShow] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setShow(false);
            }
        }
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [containerRef]);

    return (
        <div className={`${Styles.asideProfile}`}>
            <div className={`${Styles.bgProfile}`}>
                <Image
                    src={Anya}
                    alt="Profile Pic"
                    style={{
                        objectFit: 'cover',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>
            <div className="d-flex justify-content-between position-relative ">
                <Image
                    src={Anya}
                    alt="Profile Pic"
                    roundedCircle
                    className={`${Styles.imgProfile} `}
                />

                <div className={Styles.menuPost} ref={containerRef} >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        href=""
                        onClick={(e) => {
                            e.preventDefault();
                            setShow(!show);
                        }}
                    >
                        <Dots
                            style={{
                                color: "#C2C9D1",
                                fontSize: "20px",
                                cursor: "pointer",
                                margin: "0 15px 15px 0",
                            }}
                        />
                        <div
                            className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <p style={{ marginBottom: "0", color: "#1e1e1e" }}>
                                Banned This Account
                            </p>
                        </div>

                    </a>
                </div>
            </div>

            <p style={{ fontSize: '48px', fontWeight: '700', marginBottom: '0' }}
            >Traveloak</p>
            <p style={{ fontSize: '24px', fontWeight: '700', color: '#C2C9D1' }}
            >@traveloak</p>
            <p style={{ marginLeft: '16px', marginRight: '16px' }}
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam magnam nesciunt omnis quos excepturi quae facilis molestias corrupti dicta ad officia soluta dolorem ipsam aliquid illo officiis eaque sapiente voluptatem nemo quod, voluptas, reprehenderit harum saepe? Molestias cum ipsum et eius minima ipsam repudiandae sapiente est. Perspiciatis, sit debitis!</p>
        </div>
    )
}

export default AsideProfile