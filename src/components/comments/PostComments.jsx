import { useState, useRef, useEffect } from "react";
import { Card, Image } from "react-bootstrap";
import Styles from "../../styles/posts/Posts.module.css";
import { useMediaQuery } from "react-responsive";
// import { useSelector } from "react-redux";
import { ReactComponent as Dots } from "../../assets/icons/Threedots.svg";

const CommentsComponent = ({ profilePic, name, username, comment }) => {
  const containerRef = useRef(null);
  // const { auth } = useSelector((states) => states);
  // const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
  // const { role } = loginForumInfo || {}; // Add null check here
  const [show, setShow] = useState(false);
  const isMd = useMediaQuery({ query: "(max-width: 1400px)" });

  const handleToggleMenu = (e) => {
    e.preventDefault();
    setShow(!show); // toggle the menu visibility for this component
  };

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
    <Card className={Styles.cardPosts}>
      <Card.Body className="d-flex p-3">
        <div className="flex-shrink-0 me-3">
          <Image
            src={profilePic}
            alt="Profile Pic"
            roundedCircle
            style={{ width: "45px", height: "45px" }}
          />
        </div>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <h3
                className="mb-0"
                style={{ fontWeight: 600, fontSize: "15px" }}
              >
                {name}
              </h3>
              <small
                className="text-muted"
                style={{ cursor: "pointer", fontSize: "12px" }}
              >
                @{username}
              </small>
            </div>

            <div className={Styles.menuPost} ref={containerRef}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" onClick={handleToggleMenu}>
                <Dots
                  style={{
                    color: "#C2C9D1",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />             
                  <ul className={`${Styles.subMenu} ${show ? Styles.show : ""}`}>
                    <li>Hapus Komen</li>
                  </ul> 
              </a>
            </div>
          </div>
          <div>
            <div
              className={`${Styles.description} 
                    ${`${Styles.descriptionText}`}`}
              style={
                isMd
                  ? { fontSize: "16px", lineHeight: "30px" }
                  : { fontSize: "15px", lineHeight: "30px" }
              }
            >
              <p className={`${Styles.text}`}>{comment}</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CommentsComponent;
