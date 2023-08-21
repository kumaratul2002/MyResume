import React from "react";
import p4 from "../assets/auto.png";
import p2 from "../assets/covid.png";
import p3 from "../assets/chat.png";
import p1 from "../assets/todo.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: p4,
      code: "https://github.com/kumaratul2002/Real-Time-Taxi-pooling-system-based-on-Locality-scaling",
      demo: "https://real-time-taxi-pooling-system-based-on-locality-scaling.vercel.app/",
      des:"Created a web app for hackathon(Hackshetra) held in college that facilities residents of NIT Kurukshetra with Auto pooling service based on requirements.Integrated with Google Maps API for users to locate their destination and choose accordingly.Created features for user to add and select a suitable pool matching their visit purpose.",

    },
    {
      id: 2,
      src: p3,
      code: "https://github.com/kumaratul2002/Realtime-chat-app",
      demo: "",
      des:"A dynamic web application using Socket.IO, HTML, CSS, and JavaScript for instant communication and enables real-time communication between users. Its sleek interface facilitates seamless messaging, while Socket.io ensures instant message delivery.",
    },
    {
      id: 3,
      src: p2,
      code: "https://github.com/kumaratul2002/Covid-app",
      demo: "https://covid-app-chi-ten.vercel.app/",
      des:"An informative website built with HTML and CSS to raise awareness about COVID-19, providing essential information,prevention measures, and resources to help users stay safe during the pandemic.",
    },
    {
      id: 4,
      src: p1,
      code: "https://github.com/kumaratul2002/ToDoList",
      demo: "https://my-project-brown-delta.vercel.app/",
      des:"  The Todo List is a simple and intuitive web application built using React Js, along with HTML and CSS.It allows users to create, manage, and track their tasks in an organized manner.The user interface is designed to be user-friendly, with features such as adding new tasks and deleting tasks.",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,code,demo,des }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-slate-300 text-center text-sm">{des}</div>
              <div className="flex items-center justify-center">
                <a href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
