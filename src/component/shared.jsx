import img from "../assets/bg.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Shared() {
  const { Light } = useContext(DataContext);
  return (
    <div
      className={
        !Light ? "bg-[#fbdede]  text-black" : "bg-[#0a192f]  text-white"
      }
    >
      <div className="absolute items-center top-4 left-6 flex flex-row lg:space-x-80 md:space-x-60 space-x-28 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 2, delay: 0 }}
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
        <span>
          <Link to="/">
            <svg
              className="h-[20px] lg:h-[40px] md:h-[30px]  "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px"
            >
              <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z" />
              <path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z" />
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
          </Link>
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2, delay: 1 }}
        className="flex fixed flex-col top-[35%] left-0"
      >
        <ul>
          <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/khalil-adedamola-b99a09237/"
            >
              Linkedin <FaLinkedin size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Skhalil772"
            >
              Github <FaGithub size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-[#EA4335]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:salamikhalil02@gmail.com"
            >
              Email <SiGmail size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[40px] px-2 pl-6 flex justify-between items-center ml-[-125px] sm:hover:ml-[-10px] duration-300 bg-[#1DA1F2]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/Harhdeyhdarhmo1"
            >
              Twitter <BsTwitter size={20} />
            </a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
export default Shared;
