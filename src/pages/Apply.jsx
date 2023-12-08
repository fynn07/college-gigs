import React from "react";
import { axiosFetch } from "../utils/axios";
import 'font-awesome/css/font-awesome.min.css'
import { toast } from "react-toastify";

function Apply() {

  async function handleApplyWork(e) {
    e.preventDefault();

    let inputs = {
      f_name: e.target.name.value,
      f_email: e.target.email.value,
      f_work: e.target.work.value,
      f_price: e.target.price.value,
      f_description: e.target.description.value,
      f_time: e.target.work_t.value,
      f_sdate: e.target.work_start.value,
      f_edate: e.target.work_end.value,
      f_cname: e.target.cname.value,
      f_card: e.target.card.value,
      f_expmonth: e.target.expmonth.value,
      f_expyear: e.target.expyear.value,
      f_cvv: e.target.cvv.value,
    };

    const formData = new FormData();

    Object.entries(inputs).forEach(([key, value]) => {
      formData.append(key, value)
    });


    const data = await axiosFetch.post("/freelancer/applyWork", formData,);

    if (data.status !== 200) {
      throw new Error(data.statusText);
    }

    toast.success("Freelancer registered successfully!");

  }

  return (
    <form onSubmit={handleApplyWork}>
      <label htmlFor="fname">
        <i className="fa fa-user"></i> Full Name
      </label>
      <input
        type="text"
        id="fname"
        name="name"
        placeholder="Please enter your full name..."
        required
      ></input>

      <label htmlFor="email">
        <i className="fa fa-envelope"></i> Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="john@example.com"
        required
      ></input>

      <label htmlFor="work">
        <i className="fa fa-address-card-o"></i> Work Type
      </label>
      <select name="work" className="work">
        <option value="Graphic Design">Graphic Design</option>
        <option value="Proofreading and Writing">
          Proofreading and Writing
        </option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Programming">Programming</option>
        <option value="Others">Others</option>
      </select>

      <label htmlFor="price">
        <i className="fa fa-address-card-o"></i> Starting Price
      </label>
      <select name="price" className="price">
        <option value=" $5.00 - $20.00 "> $5.00 - $20.00 </option>
        <option value=" $21.00 - $40.00 "> $21.00 - $40.00 </option>
        <option value=" $41.00 - $80.00 "> $41.00 - $80.00 </option>
        <option value=" $81.00 - $100.00 "> $81.00 - $100.00 </option>
        <option value=" To Be Discussed "> To Be Discussed </option>
      </select>

      <label htmlFor="desc">
        <i className="fa fa-commenting-o"></i> Description
      </label>
      <textarea
        id="desc"
        name="description"
        className="desc"
        placeholder="Describe your work here..."
      ></textarea>

      <label htmlFor="time">
        <i className="far fa-clock"></i> Average Working Hours
      </label>
      <select name="work_t" className="work_t">
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
      <label htmlFor="days">
        <i className="fas fa-calendar-alt"></i> Working Days
      </label>

      <div className="row">
        <div className="col-50">
          <label htmlFor="day1">From</label>
          <select name="work_start" className="work_d1">
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div className="col-50">
          <label htmlFor="day2">To</label>
          <select name="work_end" className="work_d2">
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

      <div className="col-50">
        <h2>Mode of Payment</h2>



        <label htmlFor="fname">Accepted Cards</label>
        <select name="card">
          <option value="visa">
            <i className="fa fa-cc-visa"></i>
          </option>
          <option value="amex">
            <i className="fa fa-cc-amex"></i>
          </option>
          <option value="mastercard">
            <i className="fa fa-cc-mastercard"></i>
          </option>
          <option value="discover">
            <i className="fa fa-cc-discover"></i>
          </option>
        </select>

        <label htmlFor="cname">Name on Card</label>
        <input
          type="text"
          id="cname"
          name="cname"
          placeholder="Please enter your card name..."
          required
        ></input>

        <label htmlFor="ccnum">Credit card number</label>
        <input
          type="text"
          id="ccnum"
          name="cardnumber"
          placeholder="1111-2222-3333-4444"
          required
        ></input>

        <div className="row">
          <div className="col-50">
            <label htmlFor="expmonth">Exp Month</label>
            <input
              type="text"
              id="expmonth"
              name="expmonth"
              placeholder="Please card expiry month..."
              required
            ></input>

            <label htmlFor="expyear">Exp Year</label>
            <input
              type="text"
              id="expyear"
              name="expyear"
              placeholder="Expiry year here"
              required
            ></input>
          </div>

          <div className="col-50">
            <label htmlFor="cvv">CVV</label>
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
          className="btn"
        ></input>
      </center>
    </form>
  );
}

export default Apply;