import { motion } from "framer-motion";
import Shared from "./shared";
import DataContext from "../context/DataContext";
import { useContext } from "react";

// function about() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 4 } }}
//     >
//       <Shared />
//       <div className="bg-red-200 h-[100vh] w-[100vw]">about</div>
//     </motion.div>
//   );
// }
// export default about;
import React from "react";

const About = () => {
  const { Light } = useContext(DataContext);

  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 2 } }}
      name="about"
      className={
        !Light
          ? "bg-[#fbdede] w-full h-screen text-black"
          : "bg-[#0a192f] w-full h-screen text-white"
      }
    >
      <Shared />
      <div className="flex flex-col justify-center items-center w-full h-full container mx-auto lg:px-0 px-8">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-white">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Khalil, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating Frontend
              software for clients ranging from individuals and small-businesses
              all the way to large enterprise corporations.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
