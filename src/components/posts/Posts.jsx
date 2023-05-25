import { useState, useEffect, useRef } from "react";
import { Card, Image } from "react-bootstrap";
import Styles from "../../styles/posts/Posts.module.css";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AsyncLikePost, AsyncVerifiedTakedownPost, AsyncAdminTakedownPost } from "../../state/posts/middleware";
import ImageSlider from "../tools/PostSlider";
import { useNavigate } from "react-router-dom";
import { FiThumbsUp } from "react-icons/fi";
import SimpleDialog from "../tools/DialogShare";


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
  date,
}) {
  const [shared, setShared] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useSelector((states) => states);
  const dispatch = useDispatch();
  const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
  const { role } = loginForumInfo || {}; 

  const [show, setShow] = useState(false);
  const isMd = useMediaQuery({ query: "(max-width: 1400px)" });
  const containerRef = useRef(null);
  const [likes, setLikes] = useState(localStorage.getItem(`liked_${_id}`) === 'true');
  const [likeCount, setLikeCount] = useState(parseInt(localStorage.getItem(`likeCount_${_id}`), 10) || 0);
  const formattedDate = formatDateTime(date);

  function formatDateTime(dateTimeStr) {
    // Assuming `dateTimeStr` is in ISO 8601 format like "2023-05-18T04:12:06.147Z"
    const dateTime = new Date(dateTimeStr);

    // Format the date and time
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return dateTime.toLocaleString("en-US", options);
  }

  const handleClickOpen = () => {
    setShared(true);
  };

  const handleClose = (value) => {
    setShared(false);
    setSelectedValue(value);
  };
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

function createMarkup(value) {
  if (location.pathname.includes("/post/")) {
    return {
      __html: value
    };
  } else {
    const maxLength = 200;
    const truncatedValue = value.length > maxLength ? value.substring(0, maxLength) + "..." : value;

    return {
      __html: truncatedValue
    };
  }
}

  const handleLike = (_id) => {
    if(!auth.token){
      navigate("/login");
      return;
    }
    const updatedLikes = !likes;
    const updatedLikeCount = updatedLikes ? likeCount + 1 : likeCount - 1;
  
    setLikes(updatedLikes);
    setLikeCount(updatedLikeCount);
  
    localStorage.setItem(`liked_${_id}`, updatedLikes);
    localStorage.setItem(`likeCount_${_id}`, updatedLikeCount.toString());
  
    try {
      dispatch(AsyncLikePost(_id, auth.id_user));
    } catch (error) {
      console.log(error);
    }
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

  const handleDeletePost = (_id) => {
    if(auth.role === 'SysAdmin'){
      try{
        dispatch(AsyncAdminTakedownPost(_id));
      }
      catch(err){
        console.log(err);
      }
      return;
    }
    else{
        try{
          dispatch(AsyncVerifiedTakedownPost(_id));
        }
        catch(err){
          console.log(err);
        }
      }
  }

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
                    <li onClick={() => handleDeletePost(_id)}>Delete Post</li>
                    <li>Pin Post</li>
                  </ul>
                ) : auth.role === "SysAdmin" || role === "SysAdmin" ? (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li onClick={() => handleDeletePost(_id)}>Force Delete Post</li>
                    <li>Ban Post</li>
                  </ul>
                ) : auth.role === "Common" || role === "Common" ? (
                  <ul
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                  >
                    <li>Bisukan @{username}</li>
                  </ul>
                ) : (
                  <div
                    className={`${Styles.subMenu} ${show ? Styles.show : ""}`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ marginBottom: "0", color: "#1e1e1e" }}>
                      You have to{" "}
                      <span style={{ color: "blue", cursor: "pointer" }}>
                        Log In
                      </span>{" "}
                      first.
                    </p>
                  </div>
                )}
              </a>
            </div>
          </div>
          <div>
            <div
              className={`${location.pathname.includes("/post/") ? Styles.description : ""} ${Styles.descriptionHome} 
              ${`${Styles.descriptionText}`}`}
              style={
                isMd
                  ? { fontSize: "18px", lineHeight: "30px" }
                  : { fontSize: "16px", lineHeight: "30px" }
              }
            >
              <p className={`${Styles.text}`} dangerouslySetInnerHTML={createMarkup(description)}></p>
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
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ width: "100%" }}
              >
                <div style={{ transform: "translateX(-50%)" }}>
                  <p
                    className="text-mute"
                    style={{ fontSize: "14px", color: "#808080" }}
                  >
                    {formattedDate}
                  </p>
                </div>
                <ul
                  className={`${
                    isMd ? Styles.DetailpostCtaMd : Styles.DetailpostCtaLg
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
                      className={`${Styles.iconPost} ${
                        likes ? Styles.liked : ""
                      }`}
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
                    onClick={handleClickOpen}
                  >
                    <Share className={Styles.iconPost} />
                  </li>
                  <SimpleDialog
                    selectedValue={selectedValue}
                    open={shared}
                    onClose={handleClose}
                  />
                </ul>
              </div>
            ) : (
              <ul className={`${isMd ? Styles.postCtaMd : Styles.postCtaLg}`}>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FiThumbsUp
                    className={`${Styles.iconPost} ${
                      likes ? Styles.liked : ""
                    }`}
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
                  onClick={handleClickOpen}
                >
                  <Share className={Styles.iconPost} />
                </li>
                  <SimpleDialog
                    selectedValue={selectedValue}
                    open={shared}
                    onClose={handleClose}
                  />
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
