
import "../styles/payment.css";

function Payment() {

  return (
    <main>
      <div className="banner">
        <div className="navbar">
          <a href="/College_Gigs/C_Gigs_Home.php">
            <img src="/College_Gigs/CollegeGigsLogo.png" alternate="College Gigs Logo.png" className="logo" />
          </a>
          <ul>
            <li><a href="/College_Gigs/College_Gigs_LearnMore/Employer.php?id=<?php echo urlencode($eid); ?>">Profile</a></li>
            <li><a href="/College_Gigs/C_Gigs_Learn_Emp.php?id=<?php echo urlencode($eid); ?>">Browse</a></li>
            <li><a href="/College_Gigs/C_Gigs_Home.php">Logout</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="" method="post">
              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="Please enter your full name..." required />
                  <label for="email"><i className="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" placeholder="john@example.com" required />
                  <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
                  <input type="text" id="adr" name="address" placeholder="Please enter your address..." required />
                  <label for="city"><i className="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" placeholder="Please enter your city..." required />

                  <div className="row">
                    <div className="col-50">
                      <label for="state">Province</label>
                      <input type="text" id="state" name="state" placeholder="State name here" required />
                    </div>
                    <div className="col-50">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="City ZIP code here" required />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style="color:navy;"></i>
                    <i className="fa fa-cc-amex" style="color:blue;"></i>
                    <i className="fa fa-cc-mastercard" style="color:red;"></i>
                    <i className="fa fa-cc-discover" style="color:orange;"></i>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="Please enter your card name..." required />
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required />
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="Please card expiry month..." required />
                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="Expiry year here" required />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="CVV here" required />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing
              </label>
              <center><input type="submit" value="Pay Now!" className="btn" name="pay" /></center>
              {/* <?php 
          if($error > 0){
                              echo "<label>No Hired Free-lancer!</label>";
          }
        ?> */}
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h4>Cart <span className="price" style="color:black"><i className="fa fa-shopping-cart"></i></span></h4>
            {/* <?php
        if(mysqli_num_rows($result) > 0){
          if($wid != ''){
          while($row = mysqli_fetch_assoc($result)){
            
              if($row['w_id'] == $wid){
                            echo "<p>".$name = $row['f_name']."'s Services"."</p>";
                          echo "<hr>
                            <p>Total <span className="." price"."><b>"."<p>".$price = $row['f_price']."</p>"."</b></span></p>";
              } 
            }
          } else{
                            echo "<p style=margin:100px 0px;>Cart is Empty!</p>";
          }
        }
      ?> */}
          </div>
        </div>
      </div>

    </main>
  )

}


export default Payment;