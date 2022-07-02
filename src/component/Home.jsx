import { RotateCircleLoading } from "react-loadingg";
import img from "../assets/bg.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

function Home() {
  const [Show, setShow] = useState(false);
  const [Light, setLight] = useState(false);
  // const hide = () => setShow(false);
  // const handleClick = () => setShow(!Show);
  const handleClick = function () {
    setShow(!Show);
  };
  const hleClick = function () {
    setShow(false);
  };
  const light = function () {
    setLight(!Light);
    console.log(Light);
  };
  const dark = function () {
    setLight(!Light);
    console.log(Light);
  };

  return (
    <motion.section
      // className="bg-[#fbdede] h-[100vh] w-[100vw] all text-black"
      className={
        !Light
          ? "bg-[#fbdede] h-[100vh] w-[100vw] all text-black"
          : "bg-[#0a192f] h-[100vh] w-[100vw] all text-white"
      }
      initial={{ y: -1500 }}
      animate={{ y: 0 }}
      exit={{ y: -1500, transition: { duration: 4 } }}
    >
      <div className="max-w-[95vw] mx-auto max-h-[95vh] py-4 ">
        <div className="flex flex-row justify-between items-center">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="flex flex-col md:flex-row md:space-x-2 "
          >
            <span className="new  text-xl sm:text-2xl md:3xl self-center font-bold ">
              Khalil
            </span>
            <img
              className="h-[40px] lg:h-[70px] md:h-[60px]  "
              src={img}
              alt="owner"
            />
          </motion.div>
          <motion.span
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <a href="./">
              {/* <img
                className="h-[20px] lg:h-[40px] md:h-[30px]  "
                src={hom}
                alt="home"
              /> */}
              <svg
                className="h-[20px] lg:h-[40px] md:h-[30px]  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="40px"
                height="40px"
              >
                <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z" />
                <path
                  fill="#C5CAE9"
                  d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"
                />
                <path
                  fill="#B71C1C"
                  d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"
                />
                <path fill="#D84315" d="M18 28H30V44H18z" />
                <path fill="#01579B" d="M21 17H27V23H21z" />
                <path
                  fill="#FF8A65"
                  d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                />
              </svg>
            </a>
          </motion.span>
          <motion.span
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="flex flex-row space-x-2 cursor-pointer"
          >
            {Light ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="#000000"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={light}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={dark}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </motion.span>
          <motion.a
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 2, delay: 2.5 }}
            href="mailto:salamikhalil02@gmail.com"
            target="_blank"
            className="font-medium"
          >
            Say Hi to me
          </motion.a>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="flex flex-col space-y-8 cursor-pointer     ">
            <RotateCircleLoading className="bg-orange-700" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className="pt-16 z-30 text-center font-medium text-xl"
              onClick={handleClick}
            >
              Quick Intro ? Click Here
            </motion.span>
          </p>
        </div>
        {Show && (
          <div
            className={
              !Light
                ? "absolute rounded-lg w-80 h-60 p-10 bg-orange-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                : "absolute rounded-lg text-white w-80 h-60 p-10 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            }
          >
            <span className="absolute top-2 right-2 cursor-pointer">
              <FaTimes size={20} onClick={hleClick} />
            </span>
            <p>
              Hi👋, I'm Khalil, a freelance Front End Developer from Nigeria, I
              specialize in building the user interface of the web and creating
              accesible and exceptional User experiences.
            </p>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute lg:space-x-96 md:space-x-64 space-x-32 bottom-4 font-medium text-xl flex left-1/2 transform -translate-x-1/2"
        >
          <span>
            <a href="/about">About</a>
          </span>
          <span>
            <a href="/stack">Stacks</a>
          </span>
        </motion.div>
        <motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute right-1 top-[45%] transform -translate-y-1/2 -rotate-90"
        >
          <a href="/project" className=" font-medium text-xl">
            Projects
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 2, delay: 2 }}
          className="flex fixed flex-col top-[35%] left-0"
        >
          <ul>
            <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/khalil-adedamola-b99a09237/"
              >
                Linkedin <FaLinkedin size={20} />
              </a>
            </li>
            <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/Skhalil772"
              >
                Github <FaGithub size={20} />
              </a>
            </li>
            <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-[#EA4335]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email <SiGmail size={20} />
              </a>
            </li>
            <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-[#1DA1F2]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://twitter.com/Harhdeyhdarhmo1"
              >
                Twitter <BsTwitter size={20} />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
export default Home;
