import React from "react";
import { Link } from "react-router-dom"


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
              <div className="work-thumbnail">
                {/* <img src="' . $pfpDirectory . '" alt="Work 1"> */}
                <img src="../utils/img/Blank.jpg" alt="Profile" />
              </div>
              <div className="work-details">
                <h3>{job.f_name}</h3>
              </div>
              <div className="work-details">
                <h2><a href="/College_Gigs/College.php?ids=' . urlencode($fid . ',' . $eid) . '"><i className="fas fa-id-badge" style={{ fontSize: "30px" }}></i> Profile</a></h2>
              </div>
              <div className="work-details">
                <h3>{job.f_price}</h3>
              </div>
              <div className="work-details">
                <div className="work-details">
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