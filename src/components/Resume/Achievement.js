import React from "react";
import { motion } from "framer-motion";
import ResumeCard1 from "./ResumeCaed1";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="max-w-screen-lg  mx-auto  justify-center w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 bg-black mb-44"
    >
      {/* part one */}
      <div className="bg-black">
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-white border-opacity-30 flex flex-col gap-10 text-white">
          <div className="w-full h-1/3 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
              <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-80">
                <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
              <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                    Secured 14th Rank in Coding Contest by AlgoUniversity.
                  </h3>
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7091141499400167424/"
                    class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1 */}
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-white border-opacity-30 flex flex-col gap-10 text-white">
          <div className="w-full h-1/3 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
              <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-80">
                <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
              <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                  Third Runner-up of BlackBox a event in Techspardha ’23.
                  </h3>
                  <a
                    href="#"
                    class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                  >
                    {/* Link */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-white border-opacity-30 flex flex-col gap-10 text-white">
          <div className="w-full h-1/3 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
              <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-80">
                <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
              <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                  Solved 500+ Questions on various Platforms like GFG, Leetcode, etc.
                  </h3>
                  <a
                    href="#"
                    class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                  >
                    {/* Link */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-white border-opacity-30 flex flex-col gap-10 text-white">
          <div className="w-full h-1/3 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
              <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-80">
                <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
              <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                  Member of the technical society of NIT Kurukshetra known as Technobyte
                  </h3>
                  <a
                    href="#"
                    class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                  >
                    {/* Link */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-white border-opacity-30 flex flex-col gap-10 text-white">
          <div className="w-full h-1/3 group flex">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
              <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white bg-opacity-80">
                <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
              <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                  Member of cultural club of NIT Kurukshetra MAD(Managing and Directing club).
                  </h3>
                  <a
                    href="#"
                    class="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                  >
                    {/* Link */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievements;
