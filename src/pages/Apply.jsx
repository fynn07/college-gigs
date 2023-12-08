import React from "react";
import { axiosFetch } from "../utils/axios";
import 'font-awesome/css/font-awesome.min.css'
import { toast } from "react-toastify";

function Apply() {

    async function handleApplyWork(e){
        e.preventDefault();
        let inputs = {
          f_name: e.target.name.value,
          f_email: e.target.email.value,
          f_work : e.target.work.value,
          f_price : e.target.price.value,
          f_description : e.target.description.value,
          f_time : e.target.work_t.value,
          f_sdate : e.target.work_start.value,
          f_edate : e.target.work_end.value,
          f_cname : e.target.cname.value,
          f_card : e.target.card.value,
          f_expmonth : e.target.expmonth.value,
          f_expyear : e.target.expyear.value,
          f_cvv : e.target.cvv.value,
        };

        const formData = new FormData();

         Object.entries(inputs).forEach(([key, value]) => {
            formData.append(key, value)
        }); 


      const data = await axiosFetch.post("/freelancer/applyWork", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization" : localStorage.getItem("token")
        },
      });        

    if (data.status !== 200) {
        throw new Error(data.statusText);
      }

      toast.success("Freelancer registered successfully!");      


    }

  return (
    <form onSubmit={handleApplyWork}>
      <label for="fname">
        <i class="fa fa-user"></i> Full Name
      </label>
      <input
        type="text"
        id="fname"
        name="name"
        placeholder="Please enter your full name..."
        required
      ></input>

      <label for="email">
        <i class="fa fa-envelope"></i> Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="john@example.com"
        required
      ></input>

      <label for="work">
        <i class="fa fa-address-card-o"></i> Work Type
      </label>
      <select name="work" class="work">
        <option value="Graphic Design">Graphic Design</option>
        <option value="Proofreading and Writing">
          Proofreading and Writing
        </option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Programming">Programming</option>
        <option value="Others">Others</option>
      </select>

      <label for="price">
        <i class="fa fa-address-card-o"></i> Starting Price
      </label>
      <select name="price" class="price">
        <option value=" $5.00 - $20.00 "> $5.00 - $20.00 </option>
        <option value=" $21.00 - $40.00 "> $21.00 - $40.00 </option>
        <option value=" $41.00 - $80.00 "> $41.00 - $80.00 </option>
        <option value=" $81.00 - $100.00 "> $81.00 - $100.00 </option>
        <option value=" To Be Discussed "> To Be Discussed </option>
      </select>

      <label for="desc">
        <i class="fa fa-commenting-o"></i> Description
      </label>
      <textarea
        id="desc"
        name="description"
        class="desc"
        placeholder="Describe your work here..."
      ></textarea>

      <label for="time">
        <i class="far fa-clock"></i> Average Working Hours
      </label>
      <select name="work_t" class="work_t">
        <option value="Morning(6:00 A.M. - 12:00 P.M. PHT)">
          Morning(6:00 A.M. - 12:00 P.M. PHT)
        </option>
        <option value="Afternoon(12:00 P.M. - 6:00 P.M. PHT)">
          Afternoon(12:00 P.M. - 6:00 P.M. PHT)
        </option>
        <option value="Evening(6:00 P.M. - 12:00 A.M. PHT)">
          Evening(6:00 P.M. - 12:00 A.M. PHT)
        </option>
        <option value="Early Morning(1:00 A.M. - 6:00 A.M. PHT)">
          Early Morning(1:00 A.M. - 6:00 A.M. PHT)
        </option>
        <option value="Others">Others</option>
      </select>
      <label for="days">
        <i class="fas fa-calendar-alt"></i> Working Days
      </label>

      <div class="row">
        <div class="col-50">
          <label for="day1">From</label>
          <select name="work_start" class="work_d1">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div class="col-50">
          <label for="day2">To</label>
          <select name="work_end" class="work_d2">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
      </div>

      <div class="col-50">
        <h2>Mode of Payment</h2>



        <label for="fname">Accepted Cards</label>
        <select name="card">
            <option value="visa">
                <i class="fa fa-cc-visa"></i>
            </option>
            <option value="amex">
                <i class="fa fa-cc-amex"></i>
            </option>
            <option value="mastercard">
                <i class="fa fa-cc-mastercard"></i>
            </option>
            <option value="discover">
                <i class="fa fa-cc-discover"></i>
            </option>
        </select>

        <label for="cname">Name on Card</label>
        <input
          type="text"
          id="cname"
          name="cname"
          placeholder="Please enter your card name..."
          required
        ></input>

        <label for="ccnum">Credit card number</label>
        <input
          type="text"
          id="ccnum"
          name="cardnumber"
          placeholder="1111-2222-3333-4444"
          required
        ></input>

        <div class="row">
          <div class="col-50">
            <label for="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="Please card expiry month..."
              required
            ></input>

            <label for="expyear">Exp Year</label>
            <input
              type="text"
              id="expyear"
              name="expyear"
              placeholder="Expiry year here"
              required
            ></input>
          </div>

          <div class="col-50">
            <label for="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV here"
              required
            ></input>
          </div>
        </div>
      </div>

      <center>
        <input
          type="submit"
          value="Post the Free-Lance Application"
          name="apply"
          class="btn"
        ></input>
      </center>
    </form>
  );
}

export default Apply;