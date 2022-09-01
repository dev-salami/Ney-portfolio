import image from "../assets/icons8-github-30.png";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Pitem(props) {
  const { Light } = useContext(DataContext);

  return (
    <div>
      <div className="hidden sm:flex">
        <div className="    w-[450px] h-[250px] card rounded-md">
          <div className="card-side front shadow-white shadow-sm border-2    rounded-md p-2 ">
            <img className="w-full h-full" src={props.image} alt="" />
          </div>
          <div className="card-side back w-full h-fit text-2xl font-thin rounded-md p-3">
            <div
              //  className="flex flex-col space-y-3"
              className={
                Light
                  ? "bg-black px-2 py-1 rounded-md flex flex-col space-y-3"
                  : "bg-white px-2 py-1 rounded-md flex flex-col space-y-3"
              }
            >
              <h2>{props.title}</h2>
              <p>{props.details}</p>
              <p className="uppercase">{props.stack}</p>
              <div className="flex justify-between">
                <button className="px-2 bg-[#0a192f] py-1 rounded-md text-white">
                  <a href={props.link}>Demo</a>
                </button>
                <a href="https://github.com/Skhalil772">
                  <img src={image} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex sm:hidden flex-col space-y-6 justify-around h-fit w-[300px] bg-gray-600 rounded-md p-4 ">
          <img className="w-fit " src={props.image} alt="" />
          <h2>{props.title}</h2>
          <p>{props.details}</p>
          <p>{props.stack}</p>
          <div className="flex justify-between">
            <button
              className={
                Light
                  ? "bg-black px-2 py-1 rounded-md"
                  : "bg-white px-2 py-1 rounded-md"
              }
            >
              <a href={props.link}>Demo</a>
            </button>
            <a href="https://github.com/Skhalil772">
              <img src={image} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pitem;
