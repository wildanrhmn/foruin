import { Card, Image } from "react-bootstrap";
import Styles from "../../styles/posts/Posts.module.css";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
import ImageSlider from "../tools/PostSlider";
import { useNavigate } from "react-router-dom";
// import { FiThumbsUp } from "react-icons/fi";
// import { ReactComponent as Comment } from "../../assets/icons/comment_duotone.svg";
// import { ReactComponent as Share } from "../../assets/icons/Vector.svg";


function Deleted({
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
  // const [likes, setLikes] = useState(false);
  // const [comments, setComments] = useState(false);
  // const [shared, setShared] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // const { auth } = useSelector((states) => states);
  // const loginForumInfo = JSON.parse(sessionStorage.getItem("login_forum_info"));
  // const { role } = loginForumInfo || {}; // Add null check here
 
  const isMd = useMediaQuery({
    query: "(max-width: 1400px)",
  });

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
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Deleted;
