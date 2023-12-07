import { useState } from "react"
import FreelanceJobs from "../../components/FreelanceJobs";
import { useFetchAllWorks } from "../../utils/helper"

function Design() {

  const [data, setData] = useState();
  useFetchAllWorks(setData, "Graphic Design");

  if (!data) return <></>;

  return (
    <div className="container">
      <div className="hidden"><h1><i className='fas fa-magic' style={{ fontsize: "40px", marginright: "50px" }}></i>College Graphic Designers</h1></div>
      <div className="hide">Graphic design is the art and practice of visually communicating ideas and information through <br /> creative and purposeful use of typography, imagery, and layout.</div>

      <div className="boxes">
        <FreelanceJobs jobs={data} />
      </div>
    </div>
  )
}

export default Design;