import Filter from "./components/Filters";
import Navbar from "./components/Navbar";
import Calendar from "../src/assets/images/calendar.svg";
import { sideMenu } from "./constants/data";
import { useEffect, useState } from "react";
import FilterSheet from "./components/FilterSheet";

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
			<div className="flex relative h-screen">
				<div className="border hover:w-40 w-10 transition-width duration-300 ease-in-out">
					{sideMenu.map((item) => (
						<li key={item.name} className="list-none flex">
							<span><img src={Calendar} alt="" /></span>
							{item.name}
						</li>
					))}
				</div>
				<div className="border flex-1 grid grid-cols-4">
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