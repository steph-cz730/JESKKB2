import React from "react";

const About = () => {
  return (
    <section>
      <h2>About Us</h2>
      <div className="team-member">
        {/* <img src="professional pic1" alt="Team Member 1" /> */}
        <div>
          <h3>Team Member 1</h3>
          {/* <p>Info for member 1</p> */}
        </div>
      </div>
      <div className="team-member">
        {/* <img src="professional pic2" alt="Team Member 2" /> */}
        <div>
          <h3>Team Member 2</h3>
          {/* <p>Info for member 2</p> */}
        </div>
      </div>
    </section>
  );
};

export default About;