import React from "react";
import Posts from "../../components/posts/Posts";

import Styles from "../../styles/landingpage/LandingPage.module.css";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import AsideBarOrganisasi from "../../components/landingpage/AsideBarOrganisasi";
import AsideBarTopik from './../../components/landingpage/AsideBarTopik';

import { dataOrganisasi, dataTopik  } from "../../utils/DummyData";

const LandingPage = () => {
  const isLarge = useMediaQuery({
    query: "(max-width: 1400px)",
  });

  const { posts = [] } = useSelector(states => states);
  console.info(posts)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${isLarge ? "col-lg-9" : "col-lg-9"}`}>
          {posts && posts?.map(post => (
            <>
              <Posts
                _id={post.id}
                profilePic={post.profile_picture?.url}
                name={post.display_name}
                username={post.username}
                imageSrc={post.attachments}
                description={post.body}
                category={post.category}
                totalLikes={post.likes.length}
                totalComments={post.discussion.length}
                likes={post.likes}
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
