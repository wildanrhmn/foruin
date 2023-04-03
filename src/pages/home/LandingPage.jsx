import React from "react";
import Posts from "../../components/posts/Posts";

import Styles from "../../styles/LandingPage.module.css";
import { Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Image from "../../assets/logo/LogoUin.png";

const LandingPage = () => {
  const isLarge = useMediaQuery({
    query: "(max-width: 1400px)",
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${isLarge ? "col-lg-9" : "col-lg-9"}`}>
          <Posts
            profilePic="https://picsum.photos/id/237/200/300"
            name="John Doe"
            username="johndoe123"
            description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.

      "
            imageSrc="https://picsum.photos/id/1024/500/300"
          />
        </div>
        <div
          className={`${isLarge ? "col-lg-3" : "col-lg-3"} ${
            Styles.containerRightBar
          }`}
        >
          <div className={`mb-4 ${Styles.organizationListContainer}`}>
            <h3
              className="mt-3 mb-3"
              style={{ fontWeight: "600", fontSize: "16px" }}
            >
              Organisasi
            </h3>
            <ul style={{ paddingLeft: "0" }} className={Styles.list}>
              <li className={`mb-3 ${Styles.listOrganization}`}>
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
                      DEMA U
                    </h6>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      @demaulala
                    </span>
                  </div>
                </div>
                <Button className={Styles.buttonVisit}>Kunjungi</Button>
              </li>
              <li className={`mb-3 ${Styles.listOrganization}`}>
                <div
                  className="media-body"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <img
                    src={Image}
                    className={`mr-3 ${Styles.imageOrganization}`}
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
                      DEMA U
                    </h6>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      @demaulala
                    </span>
                  </div>
                </div>
                <Button className={Styles.buttonVisit}>Kunjungi</Button>
              </li>
              <li className={`mb-3 ${Styles.listOrganization}`}>
                <div
                  className="media-body"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <img
                    src={Image}
                    className={`mr-3 ${Styles.imageOrganization}`}
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
                      DEMA U
                    </h6>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      @demaulala
                    </span>
                  </div>
                </div>
                <Button className={Styles.buttonVisit}>Kunjungi</Button>
              </li>
            </ul>

            <h3 style={{ textAlign: "center", fontSize: "13px" }}>
              Tampilkan lebih banyak
            </h3>
          </div>

          <div className={`mb-4 ${Styles.organizationListContainer}`}>
            <h3
              className="mt-3 mb-3"
              style={{ fontWeight: "600", fontSize: "16px" }}
            >
              Topik Menarik
            </h3>
            <ul style={{ paddingLeft: "0" }} className={Styles.list}>
              <li className={`mb-3 ${Styles.listOrganization}`}>
                <div
                  className="media-body"
                  style={{ display: "flex", gap: "10px" }}
                >
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
                      DEMA U
                    </h6>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      @demaulala
                    </span>
                  </div>
                </div>
                <Button className={Styles.buttonVisit}>Kunjungi</Button>
              </li>
              <li className={`mb-3 ${Styles.listOrganization}`}>
                <div
                  className="media-body"
                  style={{ display: "flex", gap: "10px" }}
                >
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
                      DEMA U
                    </h6>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      @demaulala
                    </span>
                  </div>
                </div>
                <Button className={Styles.buttonVisit}>Kunjungi</Button>
              </li>
              <li className={`mb-3 ${Styles.listOrganization}`}>
                <div
                  className="media-body"
                  style={{ display: "flex", gap: "10px" }}
                >
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
                      DEMA U
                    </h6>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      @demaulala
                    </span>
                  </div>
                </div>
                <Button className={Styles.buttonVisit}>Kunjungi</Button>
              </li>
            </ul>

            <h3 style={{ textAlign: "center", fontSize: "13px" }}>
              Tampilkan lebih banyak
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
