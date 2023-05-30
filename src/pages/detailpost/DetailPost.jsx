import React, { useEffect, useState } from "react";
import Styles from "../../styles/posts/Posts.module.css";
import { Card, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AsyncGetDetailPost } from "../../state/detailPost/middleware";

import Posts from "../../components/posts/Posts";
import CommentsComponent from "../../components/comments/PostComments";
import ModalPostComment from "../../components/comments/ModalPostComment";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { AsyncGetComments, AsyncCreateComments } from "../../state/discussion/middleware";
import { Avatar } from "@mui/material";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DetailPost = () => {
  const { id } = useParams();
  const { auth } = useSelector((states) => states);
  const { detailPost = {} } = useSelector((states) => states);
  const { discussions = [] } = useSelector((states) => states);
  const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
  const { role } = loginForumInfo || {};
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);
  //For Snackbar Close
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const handleReplyOpen = () => {
    if (auth.role !== undefined || role !== undefined) {
      setShowReplyForm(true);
      return;
    }
    setOpenSnackBar(true);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    try{
      if(replyText !== ''){
        dispatch(AsyncCreateComments(id, replyText));
      }
    } catch (error) {
      console.log(error);
    }
    setReplyText("");
    setShowReplyForm(false);
  };

  useEffect(() => {
    dispatch(AsyncGetDetailPost(id));
    dispatch(AsyncGetComments(id));
  }, [dispatch, id]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [detailPost]);
  return (
   <div className="container-fluid" style={{paddingBottom: '55px'}}>
      <div style={{padding: '20px 0 20px 20px'}}>
        <div style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => navigate('/')}>
          <Back
            style={{
              color: "#1e1e1e",
              width: '26px',
              height: '26px',     
            }}
          />
          <span style={{fontSize: '18px', fontWeight: 600, paddingLeft: '20px'}}>Topic</span>
        </div>
      </div>
      <Posts
        _id={detailPost?.id}
        id_user={detailPost?.created_by}
        username={detailPost?.display_name}
        profilePic={detailPost?.profile_picture?.url}
        description={detailPost?.body}
        name={detailPost?.username}
        category={detailPost?.category}
        totalLikes={detailPost?.likes?.length}
        totalComments={detailPost?.discussion?.length}
        imageSrc={detailPost?.attachments}
        date={detailPost?.updated_at}
        likes={detailPost?.likes}
      />
      <Card className={Styles.cardPosts}>
        <Card.Body className="d-flex p-3">
          <div className="flex-shrink-0 me-3">
            {auth.profile_picture === 'none' || !auth.profile_picture  ? (
              <Avatar />
              ) : (
              <Image
                src={
                  auth.profile_picture
                }
                alt="Profile Pic"
                roundedCircle
                style={{ width: "50px", height: "50px" }}
              />
            )}
          </div>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <h3
                  className="mb-0"
                  style={{ fontWeight: 600, fontSize: "16px" }}
                >
                  {auth.username ? auth.username : "Name"}
                </h3>
                <small className="text-muted" style={{ cursor: "pointer" }}>
                  @{auth.display_name ? auth.display_name : "username"}
                </small>
              </div>
            </div>
            <small
              className="text-muted"
              style={{
                cursor: "pointer",
                fontSize: "14px",
                paddingTop: "25px",
              }}
            >
              Give your opinion
            </small>
          </div>
          <div style={{ paddingTop: "5px", paddingRight: "55px" }}>
            <button className={Styles.buttonReply} onClick={handleReplyOpen}>
              Reply
            </button>
          </div>
        </Card.Body>
      </Card>
      {discussions?.map((comment) => (
        <CommentsComponent
          profilePic={comment.profile_picture.url}
          name={comment.username}
          username={comment.display_name}
          comment={comment.body}
          id_comment={comment.id}
          id_post={comment.topic}
        />
      ))}
      <ModalPostComment
        show={showReplyForm}
        handleSubmit={handleReplySubmit}
        setValue={(e) => setReplyText(e.target.value)}
        onHide={() => setShowReplyForm(false)}
      />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        style={{ zIndex: 9999 }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please Log In to Comment.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DetailPost;
