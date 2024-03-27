import Filter from "./components/Filters";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import FilterSheet from "./components/FilterSheet";
import Sidebar from "./components/Sidebar";
import { Card } from "./components/ui/card";
import Star from "./assets/images/star.svg";
import Heart from "./assets/images/heart.svg";
import HeartWhite from "./assets/images/heart-white.svg";
import { properties } from "./constants/data";

const App = () => {
	const [showFilter, setShowFilter] = useState(false);

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
				<Sidebar />
				<div className="flex-1 grid grid-cols-4 p-8 gap-x-6 gap-y-5">
					{properties.map((property) => (
						<Card key={property.name} className="h-[380px] cursor-pointer relative">
							<img src={property.coverImage} className="overflow-hidden rounded-t-xl h-1/2 w-full" />

							<div className="flex flex-col justify-between p-5 h-1/2">
								<div className="space-y-2">
									<p className="font-medium text-lg">{property.name}</p>
									<p className="font-light text-sm text-[#717171]">{property.location}</p>
								</div>

								<div className="flex justify-between">
									<p className="text-[#717171] text-sm font-light"><span className="text-black font-medium">{property.amount}</span> / night</p>
									<div className="flex space-x-2">
										<img src={Star} alt="star" className="w-4" />
										<span className="font-light text-sm">{property.stars}</span>
									</div>
								</div>
							</div>

							<div className="absolute top-4 right-4 bg-white p-2 rounded-full hover:opacity-0">
								<img src={Heart} alt="star" className="w-4" />
							</div>
							<div className="absolute top-4 right-4 bg-black p-2 rounded-full opacity-0 hover:opacity-100">
								<img src={HeartWhite} alt="heart" className="w-4" />
							</div>

						</Card>
					))}
				</div>

				{showFilter && <FilterSheet showFilter={showFilter} setShowFilter={setShowFilter} />
				}
			</div>
		</div>
	);
};
export default App;