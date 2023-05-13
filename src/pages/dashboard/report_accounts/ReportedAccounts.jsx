import { useState, useEffect, useRef } from "react";
import CardDashboard from "../../../components/banned_report_submission/Card";
import RadioButtonGroup from "./../../../components/tools/RadioButtonGroup";
import { dataBannedAccount } from "../../../utils/DummyData";
import { ReactComponent as Filter } from "../../../assets/icons/Filter_alt_fill.svg";

import Styles from "../../../styles/posts/Posts.module.css";
const ReportedAccounts = () => {
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [radioValue, setRadioValue] = useState('');

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
                { label: "Spam", value: "option1" },
                { label: "Violence Content", value: "option2" },
                { label: "Bullying", value: "option3" },
                { label: "Harrasment", value: "option4" },
                { label: "False Information", value: "option5" },
                { label: "Others", value: "option6" },
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
      <CardDashboard data={dataBannedAccount} />
    </>
  );
};

export default ReportedAccounts;
