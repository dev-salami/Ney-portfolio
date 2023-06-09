import { useContext } from "react";
import DataContext from "../context/DataContext";
import { FaGithub } from "react-icons/fa";

function Pitem(props) {
	const { Light } = useContext(DataContext);

	return (
		<div>
			<div className="hidden sm:flex font-semibold">
				<div className="    w-[450px] h-[250px] card rounded-md">
					<div
						//  className="card-side front   shadow-sm border-2 border-black    rounded-md p-2 "
						className={
							Light
								? "card-side front   shadow-sm border-2 border-gray-100    rounded-md p-2 "
								: "card-side front   shadow-sm border-2 border-black    rounded-md p-2 "
						}>
						<img
							className="w-full h-full"
							src={props.image}
							alt=""
						/>
					</div>
					<div className="card-side back w-full h-fit text-xl font-thin rounded-md p-3">
						<div
							className={
								Light
									? "bg-black p-4 shadow-md shadow-gray-400  rounded-xl flex flex-col space-y-3"
									: "bg-gray-300 p-4 shadow-md shadow-black rounded-xl flex flex-col space-y-3"
							}>
							<h2>{props.title}</h2>
							<p>{props.details}</p>
							<p className="text-xs uppercase">{props.stack}</p>
							<div className="flex font-bold justify-between">
								<button
									className={
										Light
											? "text-black bg-white px-2 py-1 rounded-md hover:bg-opacity-70 duration-300"
											: "bg-white px-2 py-1 rounded-md hover:bg-opacity-70 duration-300"
									}>
									<a href={props.link}>Demo</a>
								</button>
								<a
									className={Light ? "text-white " : "text-black "}
									href="https://github.com/Skhalil772">
									<FaGithub size={30} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex shadow-md shadow-gray-100 sm:hidden flex-col space-y-6 font-semibold justify-around h-fit w-[300px] bg-gray-600 rounded-md p-4 ">
					<img
						className="w-fit "
						src={props.image}
						alt=""
					/>
					<h2>{props.title}</h2>
					<p>{props.details}</p>
					<p>{props.stack}</p>
					<div className="flex font-bold justify-between">
						<button
							className={
								Light
									? "bg-black px-2 py-1 rounded-md hover:bg-opacity-70 duration-300"
									: "bg-white px-2 py-1 rounded-md hover:bg-opacity-70 duration-300"
							}>
							<a href={props.link}>Demo</a>
						</button>
						<a
							className={Light ? "text-black " : "text-white "}
							href="https://github.com/Skhalil772">
							<FaGithub size={30} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Pitem;
