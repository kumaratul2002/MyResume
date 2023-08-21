import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  pt-20 pb-20 "
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          Greetings! I am an enthusiastic and dedicated undergraduate student
          currently pursuing my B.Tech degree in Computer Engineering at the
          esteemed National Institute of Technology (NIT), Kurukshetra. With a
          strong passion for engineering and a thirst for knowledge, I am
          committed to honing my skills and contributing to the field.
          <br></br>
          <br></br>
          Actively engaging in Technical and cultural socities and clubs that
          have enriched my interpersonal and leadership skills while fostering a
          sense of camaraderie among peers.
          <br></br>
          <br></br>
          Demonstrating a consistent commitment to academic excellence,
          reflected in my GPA which is 8.5545.<br></br>
          <br></br>
          Participating in hackathons and coding competitions to challenge my
          abilities and explore innovative solutions.<br></br>
          <br></br>I am open to new opportunities, collaborations, and
          experiences that will further enhance my growth as a budding engineer.
          <br></br>
          <br></br>I am enthusiastic about networking with fellow students,
          professionals, and mentors who share similar passions and aspirations.
          Feel free to connect with me here on LinkedIn or reach out via email .
          Let's embark on a journey of learning and growth together!
        </p>
      </div>
    </div>
  );
};

export default About;
