import React from 'react'
import { useState, useEffect, useRef } from "react";


import { Image } from "react-bootstrap";
import { ReactComponent as Dots } from "../../assets/icons/Threedots.svg";
import { Avatar } from '@mui/material';


import Styles from "../../styles/profile/AsideProfile.module.css"
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

const AsideProfile = ({ data }) => {
    const { auth } = useSelector((states) => states);
    const isDekstop = useMediaQuery({ query: "(max-width: 1400px)" });
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
                {data.profile_picture?.url === 'none' ? (
                    ''
                ) : (
                    <Image
                        src={data.profile_picture?.url}
                        alt="Profile Pic"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                )}
            </div>
            <div className="d-flex justify-content-between position-relative ">
            {data.profile_picture?.url === 'none' ? (
                    <Avatar style={{width: "164px" , height: "164px"}} />
                ) : (
                    <Image
                        src={data.profile_picture?.url}
                        alt="Profile Pic"
                        roundedCircle
                        className={`${Styles.imgProfile} `}
                        
                    />
                )}
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
                            {auth.role === "Common" && auth.id_user === data.id ? (
                                <div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "14px", padding: '10px'}}>
                                        <p style={{ marginBottom: "0", color: "#1e1e1e", borderBottom: "1px solid #EBEBEB", paddingBottom: "5px" }}>
                                            Edit Profile
                                        </p>
                                        <p style={{ marginBottom: "0", color: "#1e1e1e", paddingTop: "5px" }}>
                                            Verify Account
                                        </p>
                                    </div>
                                </div>
                            ) :  auth.role === "Common" ? (
                                <p style={{ marginBottom: "0", color: "#1e1e1e" }}>
                                    Report Account
                                </p>
                            ) : auth.role ==="Verified"  && auth.id_user === data.id ? (
                                <p style={{ marginBottom: "0", color: "#1e1e1e" }}>
                                    Edit Profile
                                </p>
                            ) : auth.role ==="Verified" ? (
                                <p style={{ marginBottom: "0", color: "#1e1e1e" }}>
                                    Report Account
                                </p>
                            ) 
                              : auth.role === "SysAdmin" ? (
                                <p style={{ marginBottom: "0", color: "#1e1e1e" }}>
                                    Banned This Account
                                </p>
                            ) : (
                                <p style={{ marginBottom: "0", color: "#1e1e1e" }}>
                                    You have to <span>Login</span> first.
                                </p>
                            )}
                        </div>

                    </a>
                </div>
            </div>

            <p style={ isDekstop ? { fontSize: '32px', fontWeight: '700', marginBottom: '0' } : { fontSize: '48px', fontWeight: '700', marginBottom: '0' } }
            >{data.username}</p>
            <p style={ isDekstop ? { fontSize: '18px', fontWeight: '700', color: '#C2C9D1' } : { fontSize: '24px', fontWeight: '700', color: '#C2C9D1' } }
            >@{data.display_name}</p>
            <p style={{ marginLeft: '16px', marginRight: '16px' }}
            >{data.description}</p>
        </div>
    )
}

export default AsideProfile