import { useState } from "react";
import { Card, Image, Button } from "react-bootstrap";
import Styles from "../../styles/Posts.module.css";
import { useMediaQuery } from "react-responsive";

function Posts({ profilePic, name, username, description, imageSrc }) {
  const [expanded, setExpanded] = useState(false);
  const isMd = useMediaQuery({
    query: "(max-width: 1400px)",
  });

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{ borderRadius: "0", border: "0.1px solid #ccc" }}>
      <Card.Body className="d-flex">
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
            {/* <div>
              <Button size="sm">Follow</Button>
            </div> */}
          </div>
          <div className="mt-2">
            <p
              className={`${Styles.description} ${
                expanded ? "" : Styles.descriptionText
              }`}
              style={
                isMd
                  ? { fontSize: "18px", lineHeight: "30px" }
                  : { fontSize: "16px", lineHeight: "30px" }
              }
            >
              {description}
            </p>
            {description.length > 100 && (
              <Button variant="link" onClick={toggleExpanded}>
                {expanded ? "Tampilkan lebih sedikit..." : "Tampilkan lebih banyak..."}
              </Button>
            )}
          </div>
          {imageSrc && (
            <div className="mt-3 d-flex justify-content-center">
              <Image src={imageSrc} alt="Post" fluid style={{borderRadius: '18px'}} />
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Posts;
