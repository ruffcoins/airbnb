import { menuItems } from "@/constants/data";
import Logo from "../assets/images/airbnb-logo.svg";

const Navbar = () => {
	return (
		<div className="border-b flex justify-between px-8 py-4">
			<img src={Logo} className="w-[102px]" />

			<ul className="flex items-center space-x-8 text-sm">
				{menuItems.map((item) => (
					<li key={item.name} className={`${item.active ? "pb-6 -mb-[26px] border-b-[3px] border-b-red-500 font-medium" : "text-gray-500 hover:text-gray-900 font-light"} flex cursor-pointer`}>{item.name}</li>
				))}
			</ul>

			<img src="https://framerusercontent.com/images/RkV86hKSZ17yNsuZKWylbt86ZiI.png" className="rounded-full w-10" />
		</div>
	);
};
export default Navbar;