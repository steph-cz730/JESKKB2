import React from "react";
import stephanieImage from '../Images/stephanie.jpg';
import kenImage from '../Images/ken.jpg';
import bryannaImage from '../Images/bryanna.jpg';

const About = () => {
  return (
    <section>
      <h2>About Us</h2>
      <div className="team-member">
        <img src={stephanieImage} alt="Stephanie Czajkowski"/>
        <div>
          <h3>Stephanie Czajkowski</h3>
          <p>Hey there! I'm Stephanie Czajkowski, a junior developer, and a proud member of the
              dynamic team behind this exciting learning platform. A retired Navy veteran, I 
              traded in my uniform for a keyboard to embark on a thrilling journey into the world 
              of software development. Hailing from the heart of South Louisiana, I'm passionate 
              about transforming ideas into functional tools using my skills in HTML, CSS, 
              JavaScript, Java, and more.
              Beyond coding, you'll find me exploring virtual realms through video games, getting
              lost in captivating sci-fi/fantasy novels, and indulging in various anime adventures. 
              Currently, my creative energy is invested in a special project - collaborating with my
              talented graphic designer boyfriend to bring a video game to life.
              Keep an eye out for my upcoming projects as I continue to challenge myself through
              continuous education and self-study. Let's code the future together</p>
        </div>
      </div>
      <div className="team-member">
        <img src={kenImage} alt="Ken Harris"/> 
        <div>
          <h3>Ken Harris</h3>
          <p>I'm a versatile professional who transitioned from the world of accounting to the 
              dynamic realm of programming. Armed with expertise in HTML, CSS, Java, and 
              JavaScript, I navigate the digital landscape with precision and creativity. Beyond the 
              screen, I find joy in the simple pleasures of life—cherishing moments with my family
              and friends. When coding takes a pause, I indulge in the immersive realms of video 
              games, finding both relaxation and inspiration in the virtual adventures they offer. 
              Through the lens of both numbers and code, I'm on a journey of continual growth 
              and exploration, always seeking the next challenge to conquer</p>
        </div>
      </div>
      <div className="team-member">
        <img src={bryannaImage} alt="Bryanna Sanchez"/>
        <div>
          <h3>Bryanna Sanchez</h3>
          <p>Bio for member 3</p>
        </div>
      </div>
      <div className="team-member">
        <img src={"professional pic4"} alt="Kristen Scheffler" />
        <div>
          <h3>Kristen Scheffler</h3>
          <p>Hello, I'm Kristen Scheffler, a passionate junior tech learner based in the beautiful
              state of Ohio. At 32 years old, I've successfully contributed to the completion of the
              Mystery Educator website for Jac Enterprises alongside three other talented tech enthusiasts.
              Guided by the invaluable support and insights provided by the wonderful community, we've
              brought to life an engaging platform that combines technology, education, and creativity.
              I find joy in collaborating with fellow enthusiasts on projects, embracing challenges, and
              continuously expanding my knowledge in the dynamic world of technology.</p>
        </div>
      </div>
    </section>
  );
};

export default About;