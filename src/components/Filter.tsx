import Menu from "../../src/assets/images/menu.svg";
import Map from "../../src/assets/images/map.svg";
import FilterIcon from "../../src/assets/images/filter.svg";
import CaretDown from "../../src/assets/images/caret-down.svg";
import Calendar from "../../src/assets/images/calendar.svg";
import { useState } from "react";

const Filter = () => {
	const [guests, setGuests] = useState(0);

	const addGuests = () => {
		setGuests((prev) => prev + 1);
	};

	const removeGuests = () => {
		setGuests((prev) => prev > 0 ? prev - 1 : 0);
	};

	return (
		<div className="flex justify-between items-center px-8 py-3 border-b">
			<div className="flex bg-airGrey rounded-lg">
				<div className="bg-black p-4 rounded-lg">
					<img src={Menu} alt="menu" className="w-4" />
				</div>

				<div className="p-4">
					<img src={Map} alt="map" className="w-4" />
				</div>
			</div>

			<div className="flex space-x-4">
				<div className="flex items-center justify-between rounded-lg bg-airGrey px-4 py-2 w-60">
					<p className="text-sm text-gray-700 font-light">Anywhere</p>
					<img src={CaretDown} alt="caret down" className="w-4" />
				</div>

				<div className="flex items-center justify-between rounded-lg bg-airGrey px-4 py-2 w-36">
					<img src={Calendar} alt="calender" className="w-4" />
					<p className="text-sm text-gray-700 font-light">June 14 - 21</p>
				</div>

				<div className="flex items-center justify-between rounded-lg bg-airGrey px-2 py-2 space-x-4 w-fit">
					<span className="px-3 py-1 text-[#C72F63] bg-white rounded-lg font-semibold cursor-pointer" onClick={removeGuests}>-</span>
					<p className="text-sm text-gray-700 font-light">{guests} guests</p>
					<span className="px-2 py-1 text-[#C72F63] bg-white rounded-lg font-semibold cursor-pointer" onClick={addGuests}>+</span>
				</div>
			</div>

			<div className="bg-airGrey p-4 rounded-lg cursor-pointer">
				<img src={FilterIcon} alt="filter" className="w-4" />
			</div>
		</div>
	);
};
export default Filter;