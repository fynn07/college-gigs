import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/subpage_styles/profile.css";

function ProfileFreelancer() {
  const [freelancer, setFreelancer] = useState(JSON.parse(localStorage.getItem("userDetails")));

  if (!freelancer) {
    return <></>;
  }

  return (
    <div className="profile">
      <div className="left-side">
        <div className="personal-info">
          {/* <img src="../../utils/Black.jpg" alt="Profile" /> */}
          <img src= {`http://localhost:6969/${freelancer.f_pfp}`} alt="Profile Picture" />

          <h2>Hey there! My name is </h2>
          <h1>{freelancer.f_name}</h1>
          <p>
            Age: <b>{freelancer.f_age}</b>
          </p>
          <p>
            Studies: <b>{freelancer.f_school}</b>
          </p>
          <p>
            Current Year Level: <b>{freelancer.f_level}</b>
          </p>
          <p>
            Course: <b>{freelancer.f_course}</b>
          </p>
        </div>
      </div>

      <div className="right-side">
        {freelancer.works ? freelancer.works.map((work, index) => {
          return (
            <>
              <h2
                style={{
                  textAlign: "center",
                  margin: "30px auto",
                  fontSize: "20px",
                }}
              >
                {" "}
                Work {index}
              </h2>
              <p>
                Work Name: <b>{work.f_name}</b>
              </p>
              <p>
                Work Email: <b>{work.f_email}</b>
              </p>
              <p>
                Work Type: <b>{work.f_work}</b>
              </p>
              <p>
                Price Range: <b>{work.f_price}</b>
              </p>
              <p>
                Working Time: <b>{work.f_time}</b>
              </p>
              <p>
                Working days:{" "}
                <b>
                  {work.sdate} to {work.edate}
                </b>
              </p>
              <p>
                Work Description: <b>{work.description}</b>
              </p>
            </>
          );
        }) : <></>}

        <div className="port">
          <br />
          <p>
            <b>Portfolio Link: </b>
            <span>
              <a rel="noopener noreferrer" target="_blank" href="https://kekma.net/zzart.mp4" className="portfolio-link">
                {freelancer.f_name}'s Portfolio
              </a>
            </span>
          </p>
        </div>

        <div className="social-links">
          <h3>Connect with me</h3>
          <ul>
            <li>
              <a rel="noopener noreferrer" target="_blank" href={freelancer.f_fb}>
                <i
                  className="fLink>fa-facebook-f"
                  style={{
                    marginRight: "30px",
                    borderRadius: "10px",
                    padding: "7px",
                    paddingLeft: "15px",
                    backgroundColor: "blue",
                    fontSize: "20px",
                    color: "white",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href={freelancer.f_twitter}>
                <i
                  className="fLink>fa-twitter"
                  style={{
                    marginRight: "30px",
                    borderRadius: "10px",
                    padding: "7px",
                    backgroundColor: "skyblue",
                    fontSize: "20px",
                    color: "white",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href={freelancer.f_linkedin}>
                <i
                  className="fLink>fa-linkedin-square"
                  style={{
                    marginRight: "30px",
                    borderRadius: "10px",
                    padding: "7px",
                    backgroundColor: "black",
                    fontSize: "20px",
                    color: "white",
                  }}
                ></i>
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href={freelancer.f_insta}>

                <i
                  className="fLink>fa-instagram"
                  style={{
                    marginRight: "30px",
                    borderRadius: "10px",
                    padding: "7px",
                    backgroundColor: "black",
                    fontSize: "20px",
                    color: "white",
                  }}
                ></i>
              </a>
            </li>
          </ul>
          <center>
            <Link to="/user/update/freelancer" >
              <button>
                Edit Profile Information
              </button>
            </Link>
          </center>
        </div>
      </div>
    </div >
  );
}

export default ProfileFreelancer;
