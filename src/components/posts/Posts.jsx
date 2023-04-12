import { useState, useEffect, useRef } from "react";
import { Card, Image } from "react-bootstrap";
import Styles from "../../styles/posts/Posts.module.css";
import { useMediaQuery } from "react-responsive";
import { FaEllipsisH } from "react-icons/fa";
import { useSelector } from "react-redux";
import ImageSlider from "../tools/PostSlider";
import { useNavigate } from "react-router-dom";

function Posts({ _id, profilePic, name, username, description, imageSrc, category }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { auth } = useSelector((states) => states);
  const loginForumInfo = JSON.parse(sessionStorage.getItem('login_forum_info'));
  const { role } = loginForumInfo || {}; // Add null check here
  const [show, setShow] = useState(false);
  const isMd = useMediaQuery({
    query: "(max-width: 1400px)",
  });

  const containerRef = useRef(null);

  
  const handleNavigate = () => {
    const bundle = {
      _id,
      profilePic,
      name,
      username,
      description,
      imageSrc,
      category
    };
    localStorage.setItem('postData', JSON.stringify(bundle))
    navigate(`/update-post/${_id}`)
  }
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

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={Styles.cardPosts}>
      <Card.Body className="d-flex p-3">
        <div className="flex-shrink-0 me-3">
          <Image
            src={profilePic}
            alt="Profile Pic"
            roundedCircle
            style={{ width: "75px", height: "75px" }}
          />
        </div>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between">
            <div className="d-flex gap-2">
              <h3
                className="mb-0"
                style={{ fontWeight: 600, fontSize: "18px" }}
              >
                {name}
              </h3>
              <small className="text-muted" style={{ cursor: "pointer" }}>
                @{username}
              </small>
            </div>
            <div className={Styles.menuPost} ref={containerRef}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">
                <FaEllipsisH
                  style={{
                    color: "#C2C9D1",
                    fontSize: "20px",
                    cursor: "pointer",
                    margin: "0 15px 15px 0",
                  }}
                  onClick={() => setShow(!show)}
                />
                {/* This will be based on role */}
                {auth.role || role === "Verified" ? (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li onClick={handleNavigate}>
                      Edit Post
                    </li>
                    <li>Delete Post</li>
                    <li>Pin Post</li>
                  </ul>
                ) : (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li>Tidak tertarik dengan postingan ini</li>
                    <li>Bisukan @traveloak</li>
                    <li>Blokir @traveloak</li>
                    <li>Laporkan Postingan</li>
                  </ul>
                )}
              </a>
            </div>
          </div>
          <div>
            <div
              className={`${Styles.description} ${
                expanded
                  ? `${Styles.descriptionText} ${Styles.open}`
                  : `${Styles.descriptionText} ${Styles.close}`
              }`}
              style={
                isMd
                  ? { fontSize: "18px", lineHeight: "30px" }
                  : { fontSize: "16px", lineHeight: "30px" }
              }
            >
              <p
                className={
                  expanded ? `${Styles.open} ${Styles.text}` : `${Styles.text}`
                }
              >
                {description}
              </p>
            </div>
            {description.length > 100 && (
              <button
                onClick={toggleExpanded}
                style={{ backgroundColor: "transparent", color: "blue" }}
              >
                {expanded ? (
                  <span style={{ fontSize: "14px" }}>
                    Tampilkan lebih sedikit...
                  </span>
                ) : (
                  <span style={{ fontSize: "14px" }}>
                    Tampilkan lebih banyak...
                  </span>
                )}
              </button>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <ImageSlider imageSrc={imageSrc} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Posts;
