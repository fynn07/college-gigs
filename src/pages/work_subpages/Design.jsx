import { useState } from "react"
import { useGetAllWorks } from "../../utils/helper"

function Design() {

  const [data, setData] = useState(useGetAllWorks(""));

  console.log(data);

  // return (

  // <div class="container">
  //   <div class="hidden"><h1><i class='fas fa-magic' style='font-size:40px; margin-right:50px'></i>College Graphic Designers</h1></div>
  //   <div class="hide">Graphic design is the art and practice of visually communicating ideas and information through <br> creative and purposeful use of typography, imagery, and layout.</div>
  //   <div class="boxes">


  // if (mysqli_num_rows($res) > 0) {
  //       $i = '0';
  //     while ($row = mysqli_fetch_assoc($res)) {
  //       $pfpDirectory = $row['f_pfp'];
  //     $name = $row['f_name'];
  //     if (in_array($row['f_email'], $wmail)) {
  //       $fid = $row['f_id'];
  //     echo '<div class="work-box">';
  //       echo '<div class="work-thumbnail">';
  //         if($pfpDirectory != ''){
  //           echo '<img src="' . $pfpDirectory . '" alt="Work 1">';
  //       } else{
  //             echo "<img src="." /College_Gigs/Blank.jpg"." alt="."Profile Picture".">";
  //       }
  //           echo '</div>';
  //       echo '<div class="work-details">';
  //         echo '<h3>'.$name.'</h3>';
  //         echo '</div>';
  //       echo '<div class="work-details">';
  //         echo '<h2><a href="/College_Gigs/College.php?ids=' . urlencode($fid . ',' . $eid) . '"><i class="fas fa-id-badge" style="font-size:30px;"></i> Profile</a></h2>';
  //         echo '</div>';
  //       echo '<div class="work-details">';
  //         echo '<h3>'.$price[$i].'</h3>';
  //         echo '</div>';
  //       if($eid != ''){
  //         echo '<div class="work-details">';
  //           echo '<a href="/College_Gigs/College_Gigs_Payment/Payment.php? ids='.urlencode($wid[$i].','.$eid).'"><button><i class="fa fa-handshake-o" style="font-size:20px;margin-right:10px;text-align:center"></i>Hire</button></a>';
  //       } else{
  //           echo '<div class="work-details">';
  //             echo '<a href="/College_Gigs/College_Gigs_Login/Login_Employer.php"><button><i class="fa fa-handshake-o" style="font-size:20px;margin-right:10px;text-align:center"></i>Hire</button></a>';
  //       }
  //           echo '</div>';
  //         echo '</div>';
  //       $i++;
  //     }
  //   }
  // }
  //     </div>
  //   </div>
  // )
}

export default Design;