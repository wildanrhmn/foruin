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

const DetailPost = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);

  async function getDetailArticle(id) {
    const data = await api.GetDetailPost(id);
    setDetail(data);
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
        totalLikes={detail?.likes[0]}
        totalComments={detail?.total_comments}
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
            onClick={() => setShowReplyForm(true)}
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
    </div>
  );
};

export default DetailPost;
