import { placeType, roomBedBaths } from "@/constants/data";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface filterSheetProps {
	showFilter: boolean;
	setShowFilter: (showFilter: boolean) => void
}

const FilterSheet: React.FC<filterSheetProps> = ({ showFilter, setShowFilter }) => {
	return (
		<>
			<div id="filter-sheet" className="fixed inset-0 bg-black bg-opacity-0 z-10 overflow-hidden"
				onClick={() => setShowFilter(false)}></div>
			<div className={`flex flex-col justify-between w-[400px] transition-width ${showFilter ? "right-0" : "-right-[5000px] h-0"} border fixed right-0 bottom-0 top-[145px] 2xl:top-[100px] bg-white shadow-2xl z-20 `} style={{
				transitionDuration: "1000ms",
				msTransitionDuration: "1000ms",
				animationDuration: "1000ms"
			}}>
				<div className="overflow-scroll space-y-5">
					<div className="flex items-center justify-between pt-5 px-6">
						<p className="font-medium text-lg">Filters</p>
						<p className="text-[#C72F63] font-light text-sm">Clear all</p>
					</div>
					<hr className="w-[90%] mx-auto flex justify-center" />

					<div className="px-6 space-y-1">
						<p className="font-medium text-lg mt-5">Price range</p>
						<p className="text-gray-500 font-light text-sm">The average nightly price is $133</p>
					</div>

					<div className="px-6 flex flex-col items-center space-y-6">
						<div className="flex space-x-3">
							<div className="space-y-2">
								<p className="text-gray-500 font-light text-xs">Min Price</p>
								<Input className="rounded-xl text-black border border-gray-300 shadow-none hover:border-black cursor-text py-6 font-light" value="$0" />
							</div>

							<div className="space-y-2">
								<p className="text-gray-500 font-light text-xs">Max Price</p>
								<Input className="rounded-xl text-black border border-gray-300 shadow-none hover:border-black cursor-text py-6 font-light" value="$500+" />
							</div>
						</div>
						<hr className="w-full mx-auto flex justify-center" />
					</div>


					<div className="px-6 flex flex-col space-y-1">
						<p className="font-medium text-lg">Type of place</p>
						{placeType.map((type) => (
							<div key={type.name} className="flex items-start space-x-4 pt-5">
								<Checkbox className="border" />
								<div className="flex items-start flex-col -mt-1">
									<p className="font-light">{type.name}</p>
									<p className="text-gray-500 font-light text-sm">{type.description}</p>
								</div>
							</div>
						))}
					</div>

					<hr className="w-[90%] mx-auto pt-5 flex justify-center" />

					<div className="px-6 flex flex-col space-y-1">
						<p className="font-medium text-lg">Rooms, beds, and baths</p>
						<div className="flex flex-col items-start pt-5 space-y-2">
							<p className="font-light text-sm">Bedrooms</p>
							<div className="flex flex-wrap space-x-2">
								{roomBedBaths.map((room, index) => (
									<p key={index} className={`${index === 0 ? "bg-black text-white" : "bg-white"} flex justify-center items-center w-[50px] h-[35px] rounded-3xl border text-sm hover:border-black transition-colors duration-300 ease-in font-light`}>{room}</p>
								))}
							</div>
						</div>

						<div className="flex flex-col items-start pt-5 space-y-2">
							<p className="font-light text-sm">Beds</p>
							<div className="flex flex-wrap space-x-2">
								{roomBedBaths.map((room, index) => (
									<p key={index} className={`${index === 0 ? "bg-black text-white" : "bg-white"} flex justify-center items-center w-[50px] h-[35px] rounded-3xl border text-sm hover:border-black transition-colors duration-300 ease-in font-light`}>{room}</p>
								))}
							</div>
						</div>

						<div className="flex flex-wrap flex-col items-start py-5 space-y-2">
							<p className="font-light text-sm">Bathrooms</p>
							<div className="flex space-x-2">
								{roomBedBaths.map((room, index) => (
									<p key={index} className={`${index === 0 ? "bg-black text-white" : "bg-white"} flex justify-center items-center w-[50px] h-[35px] rounded-3xl border text-sm hover:border-black transition-colors duration-300 ease-in font-light`}>{room}</p>
								))}
							</div>
						</div>

					</div>
				</div>

				<div className="p-6 border-t shadow-lg">
					<Button disabled className="rounded-xl sticky bottom-0 w-full bg-[#C72F63]/50 py-6 font-normal disabled:cursor-not-allowed">Show 836 Homes</Button>
				</div>
			</div>
		</>
	);
};
export default FilterSheet;