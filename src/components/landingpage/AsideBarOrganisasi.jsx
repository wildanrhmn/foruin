import React from "react";

import Styles from "../../styles/landingpage/AsideBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";


const AsideBarOrganisasi = ({ data }) => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ query: "(max-width: 1400px)" });
  return (
    <div className={`mb-4 ${Styles.organizationListContainer}`}>
      <h3 className="mt-3 mb-3" style={{ fontWeight: "600", fontSize: "16px" }}>
        Organisasi
      </h3>
      <ul style={{ paddingLeft: "0" }} className={Styles.list}>
        {data.slice(0, 5).map((item) => (
          <li className={`mb-3 ${Styles.listOrganization}`} key={item.id}>
            <div
              className="media-body"
              style={{ display: "flex", gap: "10px" }}
            >
              <img
                src={item.profile_picture.url}
                className={`mr-3 ${Styles.imageOrganization}`}
                alt="..."
                style={{borderRadius: '50%'}}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h6
                  className="mt-0 mb-1"
                  style={isDesktop ? { fontWeight: "600", fontSize: "12px" } :{ fontWeight: "600", fontSize: "15px" }}
                >
                  {item.username}
                </h6>
                <span className="text-muted" style={isDesktop ? { fontWeight: "600", fontSize: "11px" } :{ fontWeight: "600", fontSize: "13px" }}>
                  @{item.display_name}
                </span>
              </div>
            </div>
           <Link className={Styles.buttonVisit} 
           style={{textDecoration: 'none'}}
            to={`/profile/${item._id}`}>Kunjungi</Link>
          </li>
        ))}
      </ul>
      <h3
        style={{
          textAlign: "center",
          fontSize: "13px",
          color: "#444BF2",
          cursor: "pointer",
        }}
        onClick={() => navigate("/organization-list")}
      >
        Tampilkan lebih banyak
      </h3>
    </div>
  );
};

export default AsideBarOrganisasi;
