

function UpdateProfileFreelancer() {

  function handleUpdateProfileFreelancer(e) {
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="preview-container">
        <h2>Profile Preview</h2>
        <section className="preview">
          <img id="preview-profile-picture" src="/College_Gigs/Blank.jpg" alt="Profile Picture" />
          <div className="personal-info preview-container">
            <h2>Name: <span id="preview-name"></span></h2>
            <p>Age: <span id="preview-age"></span></p>
            <p>University: <span id="preview-university"></span></p>
            <p>Year Level: <span id="preview-year-level"></span></p>
            <p>Course: <span id="preview-course"></span></p>
            <p>Portfolio: <span id="preview-portfolio"></span></p>
            <p>Facebook: <span id="preview-facebook"></span></p>
            <p>Instagram: <span id="preview-instagram"></span></p>
            <p>LinkedIn: <span id="preview-linkedin"></span></p>
            <p>Twitter: <span id="preview-twitter"></span></p>
          </div>
        </section>
      </div>
      <section className="edit-form">
        <h2>Edit Profile Information</h2>
        <form onSubmit={handleUpdateProfileFreelancer} method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value="" />

          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" value="" />

          <label htmlFor="school">School</label>
          <select type="text" id="school" name="school" >
            <option value="">----------</option>
            <option value="University of San Carlos: Talamban Campus">University of San Carlos: Talamban Campus</option>
            <option value="University of San Carlos: Downtown Campus">University of San Carlos: Downtown Campus</option>
            <option value="University of San Carlos: North Campus">University of San Carlos: North Campus</option>
            <option value="University of Cebu: Banilad">University of Cebu: Banilad</option>
            <option value="University of Cebu: Lapu-Lapu">University of Cebu: Lapu-Lapu</option>
            <option value="Others">Others</option>
          </select>

          <label htmlFor="level">Current Year Level</label>
          <select type="text" id="level" name="level">
            <option value="">----------</option>
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Fourth Year">Fourth Year</option>
            <option value="Nth Year">Nth-Year/ Greater than 4 Years</option>
          </select>

          <label htmlFor="course">Course</label>
          <input type="text" id="course" name="course" value="" />

          <label htmlFor="port">Portfolio Link</label>
          <input type="text" id="port" name="port" />

          <label htmlFor="fb">FaceBook Link</label>
          <input type="text" id="fb" name="fb" />

          <label htmlFor="insta">Instagram Link</label>
          <input type="text" id="insta" name="insta" />

          <label htmlFor="linked">LinkedIn Link</label>
          <input type="text" id="linked" name="linked" />

          <label htmlFor="tweet">Twitter Link</label>
          <input type="text" id="tweet" name="tweet" />

          <div className="button-container">
            <button type="submit" name="show">Show Preview</button>
            <button type="submit" name="save">Save Profile Information</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UpdateProfileFreelancer;