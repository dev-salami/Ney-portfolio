import { motion } from "framer-motion";
import Shared from "./shared";
import HTML from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import Mongo from "../assets/mongo.svg";
import Node from "../assets/node.svg";
import Express from "../assets/express.svg";
import { useContext } from "react";

import DataContext from "../context/DataContext";

function Stack() {
  const { Light } = useContext(DataContext);
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 2 } }}
      className={
        !Light
          ? "bg-[#fbdede] w-full  h-fit md:h-screen text-black"
          : "bg-[#0a192f] w-full  h-fit md:h-screen text-white"
      }
    >
      <Shared />
      <div
        name="skills"
        className="pt-8 md:pt-16 lg:pt-32 flex justify-center items-center text-white "
      >
        <div className="max-w-[1000px] mx-auto py-16 md:py-4 sm:pl-40 pl-12 pr-2 flex flex-col justify-center w-full h-full">
          <div className="mb-[20px] text-center">
            <p
              className={
                !Light
                  ? "inline-block  self-center border-b-2 text-black border-black"
                  : "inline-block  self-center border-b-2 text-white border-white"
              }
            >
              These are technologies I've worked with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 text-center">
            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="Html logo" />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={css} alt="css logo" />
              <p className="my-4">CSS</p>
            </div>

            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={tailwind}
                alt="tailwind logo"
              />
              <p className="my-4">TAILWIND</p>
            </div>
            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src={javascript}
                alt="javascript logo"
              />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={react} alt="react logo" />
              <p className="my-4">REACT JS</p>
            </div>
            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Mongo} alt="mongo logo" />
              <p className="my-4">MONGO DB</p>
            </div>
            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Express} alt="express logo" />
              <p className="my-4">EXPRESS JS</p>
            </div>
            <div className="shadow-md max-w-[200px] pt-4 bg-gray-700 max-h-[200px] shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Node} alt="node logo" />
              <p className="my-4">NODE JS</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Stack;

// function Skills() {
//   return (

//   );
// }
// export default Skills;
//       <div className=" h-[100vh] w-[100vw] bg-gray-400">stack</div>
