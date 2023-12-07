import { useEffect, useState } from "react";
import "../../styles/subpage_styles/profile.css";

function ProfileEmployer() {
  const [employer, setEmployer] = useState({});

  useEffect(() => {
    const emp = localStorage.getItem("userDetails");
    setEmployer(JSON.parse(emp));
  }, []);

  return (
    <div className="profile">
      <div className="left-side">
        <div className="personal-info">
          <img src="../../utils/Black.jpg" alt="Profile" />
          {/* <img src="" alt="Profile Picture" /> */}
          <h2>Hey there! My name is </h2>
          <h1>{employer.emp_name}</h1>
          <p>
            Age: <b>{employer.emp_age}</b>
          </p>
          <p>
            Studies: <b>{employer.emp_school}</b>
          </p>
          <p>
            Current Year Level: <b>{employer.emp_level}</b>
          </p>
          <p>
            Course: <b></b>"."
          </p>
          "
        </div>
      </div>

      <div className="right-side"></div>
    </div>
  );
}

export default ProfileEmployer;
