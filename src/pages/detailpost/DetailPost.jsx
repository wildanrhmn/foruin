import React from "react";
import Styles from '../../styles/posts/Posts.module.css';
import { Card, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Posts from "../../components/posts/Posts";
import { dataVideoImages, comments } from "../../utils/DummyData";
import CommentsComponent from "../../components/comments/PostComments";
import ModalPostComment from "../../components/comments/ModalPostComment";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DetailPost = () => {
  const { id } = useParams();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [detail, setDetail] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);

  const { auth } = useSelector((states) => states);
  const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
  const { role } = loginForumInfo || {}; // Add null check here

 //For Snackbar Close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
  };

  async function getDetailArticle(id) {
    const data = await api.GetDetailPost(id);
    setDetail(data);
  }

  const handleReplyOpen = () => {
    if(auth.role !== undefined || role !== undefined){
      setShowReplyForm(true);
      return;
    }
    setOpenSnackBar(true);
  }

  const handleReplySubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the reply comment to the backend or perform any other actions
    console.log("Reply submitted:", replyText);
    setReplyText("");
    setShowReplyForm(false);
  };

  useEffect(() => {
    getDetailArticle(id);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [detail]);

  return (
    <div className="container-fluid">
      <Posts
        username={detail?.display_name}
        profilePic={detail?.profile_pic}
        description={detail?.body}
        name={detail?.username}
        category={detail?.category}
        totalLikes={1.234}
        totalComments={5}
        _id={detail?._id}
        imageSrc={dataVideoImages}
      />

      <Card className={Styles.cardPosts}>
        <Card.Body className="d-flex p-3">
          <div className="flex-shrink-0 me-3">
            <Image
              src={'https://ih1.redbubble.net/image.4372059190.7849/st,small,507x507-pad,600x600,f8f8f8.jpg'}
              alt="Profile Pic"
              roundedCircle
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <h3
                  className="mb-0"
                  style={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Jamal
                </h3>
                <small className="text-muted" style={{ cursor: "pointer" }}>
                  @Jamal123
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
          <button
            className={Styles.buttonReply}
            onClick={handleReplyOpen}
          >
            Reply
          </button>
        </Card.Body>
      </Card>
     {comments.map((comment) => (
        <CommentsComponent
            profilePic={comment.profilePic}
            name={comment.name}
            username={comment.username}
            comment={comment.description}
        />
     ))}
       {/* Modal Input Comment */}
      <ModalPostComment
          show={showReplyForm}
          handleSubmit={handleReplySubmit}
          setValue={(e) => setReplyText(e.target.value)}
          onHide={() => setShowReplyForm(false)}
        />
      <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose} style={{ zIndex: 9999 }}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Please Log In to Comment.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DetailPost;
