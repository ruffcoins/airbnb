import Filter from "./components/Filters";
import Navbar from "./components/Navbar";
import AllHomes from "../src/assets/images/all-homes.png";
import AmazingViews from "../src/assets/images/amazing-views.png";
import TinyHomes from "../src/assets/images/tiny-homes.png";
import ChefsKitchen from "../src/assets/images/chefs kitchen.png";
import Surfing from "../src/assets/images/surfing.png";
import Mansions from "../src/assets/images/mansions.png";
import Luxe from "../src/assets/images/luxe.png";
import Treehouses from "../src/assets/images/treehouses.png";
import Camping from "../src/assets/images/camping.png";
import BeachFront from "../src/assets/images/beachfront.png";
import Farms from "../src/assets/images/farms.png";
import Castles from "../src/assets/images/castle.png";
import Islands from "../src/assets/images/islands.png";
import Vineyards from "../src/assets/images/vineyards.png";
import AmazingPools from "../src/assets/images/amazing-pools.png";
import Skiing from "../src/assets/images/skiing.png";
import Desert from "../src/assets/images/desert.png";
import { useEffect, useState } from "react";
import FilterSheet from "./components/FilterSheet";

const App = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [openSidebar, setOpenSidebar] = useState(false);

	const toggleFilter = () => {
		setShowFilter(!showFilter);
	};

	const toggleBodyOverflow = () => {
		const filterSheet = document.getElementById("filter-sheet");

		if (showFilter) {
			document.body.classList.add("overflow-hidden");
			filterSheet?.classList.add("overflow-auto");
		} else {
			document.body.classList.remove("overflow-hidden");
			filterSheet?.classList.remove("overflow-auto");
		}
	};

	useEffect(() => {
		toggleBodyOverflow();
	}, [showFilter]);

	return (
		<div className="h-full">
			<Navbar />
			<Filter toggleFilter={toggleFilter} />
			<div className="flex relative h-full">
				<div className={`${openSidebar ? "w-56" : "w-[88px]"} border-r transition-width duration-500 ease-in-out`} onMouseEnter={() => (setOpenSidebar(true))} onMouseLeave={() => setOpenSidebar(false)}>
					<div className="flex flex-nowrap items-center justify-start pl-8 h-12 my-3 space-x-4 border-r-[3px] border-r-red-500" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={AllHomes} alt="" />
						{openSidebar && <p className="text-sm text-black font-medium">All Homes</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-5" src={AmazingViews} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Amazing Views</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={TinyHomes} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Tiny Homes</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={ChefsKitchen} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Chef&apos;s Kitchen</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Surfing} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Surfing</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Mansions} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Mansions</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Luxe} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Luxe</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Treehouses} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Treehouses</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Camping} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Camping</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={BeachFront} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">BeachFront</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Farms} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Farms</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={BeachFront} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">BeachFront</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Castles} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Castles</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Islands} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Islands</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Vineyards} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Vineyards</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={AmazingPools} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Amazing Pools</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Skiing} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Skiing</p>}
					</div>

					<div className="flex flex-nowrap items-center justify-start pl-8 my-3 space-x-4 h-12" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
						<img className="w-6" src={Desert} alt="" />
						{openSidebar && <p className="text-sm text-gray-500 font-normal">Desert</p>}
					</div>
				</div>
				<div className="flex-1 grid grid-cols-4">
					<p>hjkhkj</p>
					<p>jhjkh</p>
					<p>kjkjlk</p>
					<p>jlkjkljk</p>
				</div>

				{showFilter && <FilterSheet showFilter={showFilter} setShowFilter={setShowFilter} />
				}
			</div>
		</div>
	);
};
export default App;