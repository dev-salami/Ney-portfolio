import Pitem from "./pitem";
import DataContext from "../context/DataContext";
import { useContext } from "react";

import Shared from "./shared";
function Project() {
  const { Light } = useContext(DataContext);
  // const slideLeft = () => {
  //   const slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 300;
  // };
  // const slideRight = () => {
  //   const slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 300;
  // };

  return (
    <div className="h-fit">
      <Shared />
      <div
        className={
          !Light
            ? "bg-[#fbdede]  all text-black  pt-32 px-12"
            : "bg-[#0a192f] all text-white  pt-32  px-12"
        }
      >
        <div className="container mx-auto flex justify-center pb-20">
          <div className="lg:grid-cols-2 grid-cols-1 grid gap-4 w-fit  items-center text ">
            <Pitem
              image={require("../assets/planet.png")}
              title="Planet Facts"
              details=" Fact site for all planets in our solar system."
              stack="React js || Tailwind || Framer Motion"
              link="https://planet-facts-ney.vercel.app"
            />
            <Pitem
              image={require("../assets/crappo.png")}
              title="Crappo"
              details="A Crypto Currency Website"
              stack="React js || Tailwind || AOS"
              link="https://crappo-ney.vercel.app"
            />
            <Pitem
              image={require("../assets/farm.png")}
              title="WH Farms"
              details="A Farm Ecommerce website "
              stack="React js || Tailwind "
              link="https://whfarms.vercel.app"
            />

            <Pitem
              image={require("../assets/news.png")}
              title="News App"
              details="News App using a news api"
              stack="React || Tailwind || Axios"
              link="https://ney-news.vercel.app"
            />
            <Pitem
              image={require("../assets/movie-app.png")}
              title="Ney-Movies"
              details=" A movie website using the movie database api"
              stack="React js || Tailwind "
              link="https://ney-movies.vercel.app"
            />
            <Pitem
              image={require("../assets/audiophile.png")}
              title="Audiophile"
              details=" An Ecommerce Website"
              stack="React js || Tailwind || React Reveal"
              link="https://audiophile-ney.vercel.app"
            />
            <Pitem
              image={require("../assets/furniture.png")}
              title="Furniture Store"
              details=" A Website for a furniture store"
              stack="React || Tailwind"
              link="https://ney-furniture.vercel.app"
            />
            <Pitem
              image={require("../assets/graphics-resume.png")}
              title="Portfolio"
              details=" A portfolio for a graphics designer."
              stack="Html || Sass || javascript"
              link="https://froshgraphics.netlify.app"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
