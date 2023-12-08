import { useEffect, useState, useCallback } from "react";
import { useFetchAllWorks } from "../../utils/helper"
import { Link, useSearchParams, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosFetch } from "../../utils/axios";
import "../../styles/subpage_styles/profile.css";

function ProfileEmployer() {
  const [employer, setEmployer] = useState({});
  const [work, setWork] = useState([]);
  let [searchParams] = useSearchParams();
  const employer_id = searchParams.get("emp_id");


  const getEmployerById = useCallback(
    async function (id) {
      try {
        const data = await axiosFetch.get(`/employer?emp_id=${id}`);
        if (data.status !== 200) throw new Error(data.statusText);
        setEmployer(data.data);
      } catch (error) {
        toast.error(error.message)
      }
    }, []
  )

  const getWorkedWith = useCallback(async function getWorkedWith() {
    console.log(employer);

    if (!employer) {
      setWork([]);
      return;
    }

    try {
      let data = (await axiosFetch("/freelancer/works")).data["Freelancer works"];
      const filteredData = data.filter((work) => {
        return work.emp_id === employer.emp_id;
      });
      setWork(filteredData);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);


  useEffect(() => {
    setEmployer(JSON.parse(localStorage.getItem("userDetails")));

    if (employer_id) {
      getEmployerById(employer_id);
    }
  }, [])

  useEffect(() => {
    if (employer) getWorkedWith();
  }, [employer, getWorkedWith])


  let pattern = new RegExp(".*www.google.com/maps/.*");

  if (!employer || !employer.emp_id) {
    return <></>;
  }

  return (
    <main>

      <div className="profile-container">
        <div className="profile">
          <div className="left-side" id="emp">
            <div className="personal-info">
              {/* <img src="/College_Gigs/Blank.jpg" alt="Profile " /> */}
              <img src={`http://localhost:6969/${employer.emp_pfp}`} alt="Profile" />
              <h2>Hey there! My name is </h2><h1>{employer.emp_name}</h1>
              <p>Contact Me: <b>{employer.emp_email}</b></p>
              <p>I work for: <b>{employer.emp_comp}</b></p>
            </div>
            <div className="services">
              <h3>Find Us At</h3>
              <div className="service">
                {
                  pattern.test(employer.emp_address) ?
                    <iframe src={employer.emp_address} allowfullscreen="" width={600} height={300} loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> :
                    <p>No map location available.</p>
                }
              </div>
            </div>
          </div>
        </div >
        <div className="right-side">
          <h2>Recently Worked With</h2>
          {
            work.map((work) => {
              return (
                <p key={work.f_id}>I have worked with: <b><Link to={`/user/profile/employer?f_id=${work.f_id}`}>{work.f_name}</Link></b> on a/an <b>{work.f_work}</b> job</p>
              )
            })
          }
          <div className="port">
            <p><b>Portfolio Link</b></p>
            <a rel="noopener noreferrer" target="_blank" href={process.env.NODE_ENV === "development" ? "https://kekma.net/zzart.mp4" : employer.f_portfolio} className="portfolio-link">
              {employer.emp_name}'s Portfolio
            </a>
          </div>
          <div className="social-links">
            <h3>Connect with me</h3>
            <ul>
              <li>
                <a rel="noopener noreferrer" target="_blank" href={employer.f_fb}>
                  <i
                    className="fa fa-facebook-f"
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
                <a rel="noopener noreferrer" target="_blank" href={employer.f_twitter}>
                  <i
                    className="fa fa-twitter"
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
                <a rel="noopener noreferrer" target="_blank" href={employer.f_linkedin}>
                  <i
                    className="fa fa-linkedin-square"
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
                <a rel="noopener noreferrer" target="_blank" href={employer.f_insta}>
                  <i
                    className="fa fa-instagram"
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

            {
              (!employer_id || employer.f_id === employer_id) && (
                <center>
                  <Link to="/user/update/employer">
                    <button>
                      Edit Profile Information
                    </button>
                  </Link>
                </center>
              )
            }
          </div>
        </div>
      </div>

    </main>
  );
}

export default ProfileEmployer;
