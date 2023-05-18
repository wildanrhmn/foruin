import React, { useEffect } from "react";

import Styles from "../../styles/landingpage/LandingPage.module.css";
import { useMediaQuery } from "react-responsive";

import AsideBarOrganisasi from "../../components/landingpage/AsideBarOrganisasi";
import AsideBarTopik from './../../components/landingpage/AsideBarTopik';
import OrganizationCard from "../../components/organization_list/OrganizationCard";

import { useDispatch } from "react-redux";
import { AsyncGetAllOrganizations } from "../../state/users/middleware";

import { dataOrganisasi, dataTopik } from "../../utils/DummyData";

const OrganizationList = () => {
  // const { users = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AsyncGetAllOrganizations());
  }, [dispatch]);

  const isLarge = useMediaQuery({
    query: "(max-width: 1400px)",
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${isLarge ? "col-lg-9" : "col-lg-9"}`}>
          <OrganizationCard data={dataOrganisasi} />
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

export default OrganizationList;
