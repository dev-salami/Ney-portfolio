import image from "../assets/icons8-github-30.png";

function pitem(props) {
  return (
    <div>
      <div className="flex flex-col space-y-6 justify-around h-[300px] sm:h-[400px] w-[200px] sm:w-[300px] bg-gray-600 rounded-2xl p-4 ">
        <img className="w-fit sm:block hidden" src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.details}</p>
        <p>{props.stack}</p>
        <div className="flex justify-between">
          <button className="bg-black px-2 py-1 rounded-md">
            <a href={props.link}>Demo</a>
          </button>
          <a href="https://github.com/Skhalil772">
            <img src={image} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default pitem;
