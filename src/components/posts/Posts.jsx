import { useState, useEffect, useRef } from "react";
import { Card, Image } from "react-bootstrap";
import Styles from "../../styles/posts/Posts.module.css";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AsyncLikePost } from "../../state/posts/middleware";
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
  const dispatch = useDispatch();
  const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
  const { role } = loginForumInfo || {}; // Add null check here
  const [show, setShow] = useState(false);
  const isMd = useMediaQuery({query: "(max-width: 1400px)"});
  const containerRef = useRef(null);
  const [dateTime, setDateTime] = useState('');
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

  const handleLike = (_id) => {
    setLikes(!likes);
    if(likes) {
      try{
        dispatch(AsyncLikePost(_id));
      } catch (error) {
        console.log(error);
      }
    }
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

  useEffect(() => {
    // Get the current date and time
    const currentDate = new Date();

    // Convert the date and time to the desired format
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const formattedTime = currentDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });

    // Set the formatted date and time
    const formattedDateTime = `${formattedTime} - ${formattedDate}`;
    setDateTime(formattedDateTime);
  }, []);

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
                {/* This will be based on role */}
                {auth.role === "Verified" || role === "Verified" ? (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li onClick={handleNavigate}>Edit Post</li>
                    <li>Delete Post</li>
                    <li>Pin Post</li>
                  </ul>
                ) : auth.role === "SysAdmin" || role === "SysAdmin" ? (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li>Force Delete Post</li>
                    <li>Ban Post</li>
                  </ul>
                ) : auth.role === "Common" || role === "Common" ? (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li>Bisukan @Jamal</li>
                  </ul>
                ) : (
                  <div
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                    style={{display:'flex', justifyContent:'center', alignItems:'center'}}
                  >
                    <p style={{marginBottom: '0', color: '#1e1e1e'}}>You have to <span style={{color:'blue', cursor:'pointer'}}>Log In</span> first.</p>
                  </div>
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
                {location.pathname.includes("/post/")
                  ? description
                  : description.substring(0, 100)}
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
            {location.pathname.includes("/post/") ? (
              <div className="d-flex align-items-center justify-content-center" style={{width:'100%'}}>
                <div style={{transform: 'translateX(-50%)'}}>
                  <p className="text-mute" style={{fontSize: '14px', color: '#808080'}}>{dateTime}</p>
                </div>
                <ul
                  className={`${ 
                      isMd
                      ? Styles.DetailpostCtaMd
                      : Styles.DetailpostCtaLg
                  }`}
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
                    <span style={{ fontSize: "14px" }}>{totalLikes}</span>
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
                    <span style={{ fontSize: "14px" }}>{totalComments}</span>
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
                </ul>
              </div>
            ) : (
              <ul
                className={`${ 
                    isMd
                    ? Styles.postCtaMd
                    : Styles.postCtaLg
                }`}
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
                    onClick={() => handleLike(_id)}
                  />
                  <span style={{ fontSize: "14px" }}>{totalLikes}</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                  onClick={() => navigate(`/post/${_id}`)}
                >
                  <Comment className={Styles.iconPost} />
                  <span style={{ fontSize: "14px" }}>{totalComments}</span>
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
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Posts;
