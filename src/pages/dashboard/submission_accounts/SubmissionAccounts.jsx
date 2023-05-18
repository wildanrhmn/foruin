import { useState, useEffect, useRef } from "react";
import CardDashboard from "../../../components/banned_report_submission/Card";
import RadioButtonGroup from "./../../../components/tools/RadioButtonGroup";

import { ReactComponent as Filter } from "../../../assets/icons/Filter_alt_fill.svg";
import { useSelector, useDispatch } from "react-redux";
import { AsyncAdminGetSubmissions } from "../../../state/submission/middleware";
import Styles from "../../../styles/posts/Posts.module.css";
const SubmissionAccounts = () => {
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [radioValue, setRadioValue] = useState('');

  const { submission = {} } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef]);

  useEffect(() => {
    dispatch(AsyncAdminGetSubmissions());
  }, [dispatch])
  return (
    <>
    <div style={{position: 'relative'}}>
      <div className={Styles.menuPost} ref={containerRef}>
        {/* es  lint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
        >
          <Filter
            style={{
              fontSize: "20px",
              cursor: "pointer",
              margin: "0 15px 15px 0",
            }}
          />
          {/* Search by category */}
          <ul
            className={`${Styles.subMenuDeletedPosts} ${
              show ? Styles.show : ""
            }`}
          >
            <RadioButtonGroup
              options={[
                { label: "User", value: "user" },
                { label: "Organization", value: "organization" },
              ]}
              onChange={(newValue) =>
                setRadioValue(newValue)
              }
              value={radioValue}
            />
          </ul>
        </a>
      </div>
    </div>
      <CardDashboard data={submission} />
    </>
  );
};

export default SubmissionAccounts;
