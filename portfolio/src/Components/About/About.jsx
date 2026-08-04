import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">

      <div className="aboutLeft">

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43b?w=700"
          alt=""
        />

      </div>

      <div className="aboutRight">

        <h4>ABOUT ME</h4>

        <h1>
          A bit about
          <br />
          who I am
        </h1>

        <p>
          I'm Eliott, a freelance designer and frontend developer based in
          Paris with 5 years of experience shipping digital products for
          startups, agencies and scale-ups across Europe. I thrive at the
          intersection of great design and clean code.
        </p>

        <p>
          I believe great interfaces are invisible—they get out of the user's
          way. My work is fast, accessible and built to last. When I'm not
          coding, you'll find me hiking or hunting for a good espresso.
        </p>

        <h5>STACK & TOOLS</h5>

        <div className="tools">

          <span>Tailwind CSS</span>

          <span>Alpine.js</span>

          <span>Figma</span>

          <span>HTML / CSS</span>

          <span>JavaScript</span>

          <span>Symfony</span>

          <span>Framer</span>

          <span>Webflow</span>

        </div>

      </div>

    </section>
  );
};

export default About;