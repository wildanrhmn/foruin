import React from "react";

import { Button } from "react-bootstrap";
import { AsyncGetPosts } from "../../state/posts/middleware";
import { useDispatch } from "react-redux";
import Styles from '../../styles/landingpage/AsideBar.module.css';


const AsideBarTopik = ({ data }) => {
  const dispatch = useDispatch();

  const getPostsByCategory = (name) => {
    if(name === null){
      return;
    }
    try{
      dispatch(AsyncGetPosts(1, name));
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className={`mb-4 ${Styles.organizationListContainer}`}>
      <h3 className="mt-3 mb-3" style={{ fontWeight: "600", fontSize: "16px" }}>
        Topik Menarik
      </h3>
      <ul style={{ paddingLeft: "0" }}>
         {data.slice(0,5).map((item) => (
          <li className={`mb-3 ${Styles.listOrganization}`} key={item.name}>
            <div className="media-body" style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h6
                  className="mt-0 mb-1"
                  style={{ fontWeight: "600", fontSize: "15px" }}
                >
                  {item.name}
                </h6>
                <span className="text-muted" style={{ fontSize: "13px" }}>
                  {item.count_posts}{' '}artikel
                </span>
              </div>
            </div>
           <Button className={Styles.buttonVisit} onClick={() => getPostsByCategory(item.name)}>Jelajahi</Button>
          </li>     
        ))}
      </ul>
    </div>
  );
};

export default AsideBarTopik;
