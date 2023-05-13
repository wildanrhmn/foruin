import React from "react";
import Posts from "../../components/posts/Posts";

import Styles from "../../styles/landingpage/LandingPage.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import AsideBarOrganisasi from "../../components/landingpage/AsideBarOrganisasi";
import AsideBarTopik from './../../components/landingpage/AsideBarTopik';

import { dataOrganisasi, dataTopik, dataVideoImages } from "../../utils/DummyData";

const LandingPage = () => {
  const isLarge = useMediaQuery({
    query: "(max-width: 1400px)",
  });

  const { posts = [] } = useSelector(states => states);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${isLarge ? "col-lg-9" : "col-lg-9"}`}>
          {posts?.map(post => (
            <>
              <Posts
                _id={post.id}
                profilePic="https://picsum.photos/id/237/200/300"
                name={post.display_name}
                username={post.username}
                imageSrc={dataVideoImages}
                description={post.body}
                category={post.category}
                totalLikes={post.likes.length}
                totalComments={post.discussion.length}
              />
            </>
          ))}
        </div>
        <div className={`${isLarge ? "col-lg-3" : "col-lg-3"}`}>
          <div className={Styles.containerRightBar}>
            <AsideBarOrganisasi data={dataOrganisasi} />
            <AsideBarTopik data={dataTopik} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
