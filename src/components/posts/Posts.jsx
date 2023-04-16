import { useState, useEffect, useRef } from "react";
import { Card, Image } from "react-bootstrap";
import Styles from "../../styles/posts/Posts.module.css";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageSlider from "../tools/PostSlider";
import { useNavigate } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";
import { ReactComponent as Comment } from "../../assets/icons/comment_duotone.svg";
import { ReactComponent as Share } from "../../assets/icons/Vector.svg";
import { ReactComponent as Dots } from "../../assets/icons/Threedots.svg";


function Posts({
  _id,
  profilePic,
  name,
  username,
  description,
  imageSrc,
  category,
  totalLikes,
  totalComments,
}) {
  const [likes, setLikes] = useState(false);
  // const [comments, setComments] = useState(false);
  // const [shared, setShared] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useSelector((states) => states);
  const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
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
      category,
    };
    localStorage.setItem("postData", JSON.stringify(bundle));
    navigate(`/update-post/${_id}`);
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
              <a href="" onClick={(e) => { e.preventDefault(); setShow(!show); }}>  
                <Dots
                  style={{
                    color: "#C2C9D1",
                    fontSize: "20px",
                    cursor: "pointer",
                    margin: "0 15px 15px 0",
                  }}
                />
                {/* This will be based on role */}
                {auth.role || role === "Verified" ? (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li onClick={handleNavigate}>Edit Post</li>
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
              className={`${Styles.description} 
              ${`${Styles.descriptionText}`}`}
              style={
                isMd
                  ? { fontSize: "18px", lineHeight: "30px" }
                  : { fontSize: "16px", lineHeight: "30px" }
              }
            >
              <p className={`${Styles.text}`}>
                {location.pathname.includes("/post/") ? (
                  description
                ): (
                  description.substring(0, 100)
                )}
              </p>
            </div>
            {location.pathname.includes("/post/") ? (
              ""
            ) : (
              <button
                onClick={() => navigate(`/post/${_id}`)}
                style={{ backgroundColor: "transparent", color: "blue" }}
              >
                <span style={{ fontSize: "14px" }}>
                  Tampilkan lebih banyak...
                </span>
              </button>
            )}
          </div>
          <div className="d-flex justify-content-center flex-column">
            <ImageSlider imageSrc={imageSrc} />
            <ul
              className={`${location.pathname.includes('/post/') ? isMd ? Styles.DetailpostCtaMd : Styles.DetailpostCtaLg : isMd ? Styles.postCtaMd : Styles.postCtaLg}`}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <FiThumbsUp
                  className={`${Styles.iconPost} ${likes ? Styles.liked : ""}`}
                  onClick={() => setLikes(!likes)}
                />
                <span>{totalLikes}</span>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Comment className={Styles.iconPost} />
                <span>{totalComments}</span>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Share className={Styles.iconPost} />
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Posts;
