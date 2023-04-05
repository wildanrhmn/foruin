import React from "react";
import Posts from "../../components/posts/Posts";

import Styles from "../../styles/LandingPage.module.css";
import { useMediaQuery } from "react-responsive";

import AsideBarOrganisasi from "../../components/landingpage/AsideBarOrganisasi";
import AsideBarTopik from './../../components/landingpage/AsideBarTopik';

import { dataOrganisasi, dataTopik } from "../../utils/DummyData";
import Image from '../../assets/images/PostImg.png'

const LandingPage = () => {
  const isLarge = useMediaQuery({
    query: "(max-width: 1400px)",
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${isLarge ? "col-lg-9" : "col-lg-9"}`}>
          <Posts
            profilePic="https://picsum.photos/id/237/200/300"
            name="John Doe"
            username="johndoe123"
            imageSrc={Image}
            description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      "
          />
          <Posts
            profilePic="https://picsum.photos/id/237/200/300"
            name="John Doe"
            username="johndoe123"
            imageSrc={Image}
            description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      "
          />
          <Posts
            profilePic="https://picsum.photos/id/237/200/300"
            name="John Doe"
            username="johndoe123"
            imageSrc={Image}
            description="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec eget fermentum neque, non faucibus nibh. Sed vel massa in enim ornare vulputate. Morbi ut ex sapien. Integer nec ultrices turpis. In tempor risus ut libero fermentum, in dignissim libero tempor.
      "
          />
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
