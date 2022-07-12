import { motion } from "framer-motion";
import Pitem from "./pitem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Shared from "./shared";
function Project(props) {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 4 } }}
    >
      <Shared />
      <div className="bg-[#fbdede] text-white h-[100vh] w-[100vw]">
        <div className="flex items-center mx-8 sm:mx-6 sm:px-20 space-x-2">
          <MdChevronLeft
            onClick={slideLeft}
            size={120}
            className="hover:scale-120 hover:cursor-pointer text-black p-4"
          />
          <div
            id="slider"
            className="flex flex-row space-x-6 overflow-x-scroll scroll scrollbar-hide scroll-smooth  pt-32"
          >
            <Pitem
              image={require("../assets/planet.png")}
              title="Planet Facts"
              details=" Fact site for all planets in our solar system."
              stack="React js || Tailwind || Framer Motion"
              link="https://planet-facts-ney.vercel.app"
            />
            <Pitem
              image={require("../assets/graphics-resume.png")}
              title="Portfolio"
              details=" A portfolio for a graphics designer."
              stack="Html || Sass || javascript"
              link="https://froshgraphics.netlify.app"
            />
            <Pitem
              image={require("../assets/news.png")}
              title="News App"
              details="News App using a news api"
              stack="React || Tailwind || Axios"
              link="https://ney-news.vercel.app"
            />
            <Pitem
              image={require("../assets/furniture.png")}
              title="Furniture Store"
              details=" A Website for a furniture store"
              stack="React || Tailwind"
              link="https://ney-furniture.vercel.app"
            />
            {/* nfm */}
            <Pitem
              image={require("../assets/audiophile.png")}
              title="Audiophile"
              details=" An Ecommerce Website"
              stack="React js || Tailwind || React Reveal"
              link="https://audiophile-ney.vercel.app"
            />
            <Pitem
              image={require("../assets/movie-app.png")}
              title="Ney-Movies"
              details=" A movie website using the movie database api"
              stack="React js || Tailwind "
              link="https://ney-movies.vercel.app"
            />
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={120}
            className="hover:scale-120 text-black hover:cursor-pointer p-4"
          />
        </div>
      </div>
    </motion.div>
  );
}
export default Project;
