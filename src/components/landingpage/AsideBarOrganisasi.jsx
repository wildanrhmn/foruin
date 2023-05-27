import React from "react";

import Styles from "../../styles/landingpage/AsideBar.module.css";
import { Button } from "react-bootstrap";
import Image from "../../assets/logo/LogoUin.png";

const AsideBarOrganisasi = ({ data }) => {
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
                src={Image}
                className={`mr-3 ${Styles.imageOrganization}`}
                lassName={`mr-3 ${Styles.imageOrganization}`}
                alt="..."
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
                  style={{ fontWeight: "600", fontSize: "15px" }}
                >
                  {item.namaOrganisasi}
                </h6>
                <span className="text-muted" style={{ fontSize: "13px" }}>
                  @{item.username}
                </span>
              </div>
            </div>
            <Button className={Styles.buttonVisit}>Kunjungi</Button>
          </li>
        ))}
      </ul>

      <h3
        style={{
          textAlign: "center",
          fontSize: "13px",
          color: "#444BF2",
        }}
      >
        Tampilkan lebih banyak
      </h3>
    </div>
  );
};

export default AsideBarOrganisasi;
