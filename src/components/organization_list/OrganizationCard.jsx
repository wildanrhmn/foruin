import { Card, Image } from "react-bootstrap";
import Styles from "../../styles/organizationlist/OrganizationList.module.css";
import { useMediaQuery } from "react-responsive";

const OrganizationCard = ({ data }) => {
    const isLarge = useMediaQuery({
        query: '(max-width: 1400px)'
    })
  return (
    <>
      {data.map((item) => (
        <Card className={Styles.cardPosts}>
          <Card.Body className="d-flex p-3">
            <div className="flex-shrink-0 me-3">
              <Image
                src={item.profile_picture.url}
                alt="Profile Pic"
                roundedCircle
                style={{ width: "75px", height: "75px" }}
              />
            </div>
            <div
              className="flex-grow-1"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                  <h3
                    className="mb-0"
                    style={{ fontWeight: 600, fontSize: "18px" }}
                  >
                    {item.username}
                  </h3>
                  <small className="text-muted" style={{ cursor: "pointer" }}>
                    @{item.display_name}
                  </small>
                </div>
              </div>
              <div>
                <div style={isLarge ? {maxWidth: '600px', lineHeight: '25px'}: {}}>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className={Styles.buttonKunjungi} style={isLarge ? {fontSize: '12px'} : {}}>
                Kunjungi Profile
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default OrganizationCard;
