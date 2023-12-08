import React from "react";
import { Link } from "react-router-dom"
import '../styles/freelancejob.css'

function FreelanceJobs({ jobs }) {

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  function handleApplyJob() {

  }

  return (
    <>
      {
        jobs.map((job, index) => {
          return (
            <div key={job.f_id} className="work-box">
              <div className="work-thumbnail work-component">
                {/* <img src="' . $pfpDirectory . '" alt="Work 1"> */}
                <img src="https://static.vecteezy.com/system/resources/previews/009/749/751/original/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg" alt="Profile" />
              </div>
              <div className="work-details work-component">
                <h3>{job.f_name}</h3>
              </div>
              <div className="work-details work-component">
                <h2><a href="/College_Gigs/College.php?ids=' . urlencode($fid . ',' . $eid) . '"><i className="fas fa-id-badge" style={{ fontSize: "30px" }}></i>View Profile</a></h2>
              </div>
              <div className="work-details work-component">
                <h3>{job.f_price}</h3>
              </div>
              <div className="work-details work-component">
                <div className="work-details-button">
                  <Link href={isAuthenticated ? "/payment" : "/login/employer"}><button><i className="fa fa-handshake-o" style={{ fontSize: "20px", marginRight: "10px", textAlign: "center" }}></i>Hire</button></Link>
                </div>

              </div>
            </div>
          )
        })
      }
    </>
  )
}




export default FreelanceJobs;