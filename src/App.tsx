import Filter from "./components/Filters";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import FilterSheet from "./components/FilterSheet";
import Sidebar from "./components/Sidebar";
import { properties } from "./constants/data";
import { Sheet, SheetTrigger, SheetContent } from "./components/ui/sheet";
import PropertyCard from "./components/PropertyCard";
import Superhost from "./assets/images/superhost.svg";
import Share from "./assets/images/share.svg";
import Heart from "./assets/images/heart.svg";
import Guests from "./assets/images/guests.png";
import Bedrooms from "./assets/images/bedrooms.png";
import Beds from "./assets/images/beds.png";
import Baths from "./assets/images/baths.png";
import Workspace from "./assets/images/workspace.png";
import CheckIn from "./assets/images/check-in.png";
import Cancellation from "./assets/images/cancellation.png";
import Star from "./assets/images/star.svg";
import Map from "./assets/images/map.png";
import Calender from "./assets/images/calendar.svg";
import Shield from "./assets/images/shield.svg";
import Gem from "./assets/images/gem.png";
import { Progress } from "./components/ui/progress";
import { CaretDownIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";

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

						<Sheet key={property.name}>
							<SheetTrigger>
								<PropertyCard coverImage={property.coverImage} images={[]} name={property.name} location={property.location} amount={property.amount} stars={property.stars} />
							</SheetTrigger>
							<SheetContent className="px-8 overflow-y-scroll">
								<div className="grid grid-cols-5 gap-x-4 mb-6">
									<div className="col-span-3 rounded-2xl h-[505px] relative">
										<img src={property.images[0]} alt="cover image" className="w-full h-full object-cover rounded-2xl" />
										<p className="shadow-inner absolute left-4 bottom-4 rounded-xl bg-white px-4 py-2 font-light text-sm cursor-pointer">View All Photos</p>
									</div>
									<div className="col-span-2 space-y-4">
										<img src={property.images[1]} alt="property image" className="w-full h-[245px] object-cover rounded-2xl" />
										<img src={property.images[2]} alt="property image" className="w-full h-[245px] object-cover rounded-2xl" />
									</div>
								</div>

								<div>
									<div className="border bg-white px-4 py-2 font-light text-sm w-fit flex items-center space-x-2 rounded-xl">
										<img src={Superhost} alt="superhost" className="w-4 h-4" />
										<span>Superhost</span>
									</div>
								</div>

								<div className="grid grid-cols-8 gap-x-8 mt-4">

									<div className="col-span-5 space-y-4">
										<div className="items-start justify-between grid grid-cols-12">
											<div className="space-y-2 col-span-10">
												<h1 className="text-3xl font-medium">{property.name}</h1>
												<p className="text-[#727271] font-light">{property.location}</p>
											</div>

											<div className="flex space-x-2 col-span-2">
												<div className=" bg-[#F5F5F4] p-3 rounded-full">
													<img src={Share} alt="share icon" className="w-3" />
												</div>

												<div className="bg-[#F5F5F4] p-3 rounded-full">
													<img src={Heart} alt="heart icon" className="w-4" />
												</div>
											</div>
										</div>

										<div className="flex space-x-10 items-center py-4">
											<div className="flex space-x-2 items-center">
												<img src={Guests} alt="guests icon" className="w-6 text-sm" />
												<span className="font-light text-sm">{property.guests} guests</span>
											</div>

											<div className="flex space-x-2 items-center">
												<img src={Bedrooms} alt="guests icon" className="w-6 text-sm" />
												<span className="font-light text-sm">{property.bedrooms} bedrooms</span>
											</div>

											<div className="flex space-x-2 items-center">
												<img src={Beds} alt="guests icon" className="w-6 text-sm" />
												<span className="font-light text-sm">{property.beds} beds</span>
											</div>

											<div className="flex space-x-2 items-center">
												<img src={Baths} alt="guests icon" className="w-6 text-sm" />
												<span className="font-light text-sm">{property.baths} baths</span>
											</div>
										</div>

										<hr className="w-full mx-auto flex justify-center" />

										{/* What you get */}
										<div className="grid grid-cols-3 space-x-4 py-5">
											<div className="flex flex-col space-y-2">
												<img src={Workspace} alt="share icon" className="w-14" />
												<p className="font-normal">Dedicated workspace</p>
												<p className="text-[#727271] font-light text-sm pr-8">A private room with wifi that&apos;s well-suited for working.</p>
											</div>

											<div className="flex flex-col space-y-2">
												<img src={CheckIn} alt="share icon" className="w-14" />
												<p className="font-normal">Self check-in</p>
												<p className="text-[#727271] font-light text-sm pr-8">Check yourself in with the keypad.</p>
											</div>

											<div className="flex flex-col space-y-2">
												<img src={Cancellation} alt="share icon" className="w-14" />
												<p className="font-normal">Free cancellation before Jul 25</p>
												<p className="text-[#727271] font-light text-sm pr-8">A private room with wifi that&apos;s well-suited for working.</p>
											</div>
										</div>

										<hr className="w-full mx-auto flex justify-center" />

										{/* This space */}
										<div className="flex flex-col space-y-2 py-4">
											<p className="text-lg font-medium">About this space</p>
											<p className="text-[#727271] font-light text-sm pr-8">Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you&apos;re stopping through town and need a restful place to retreat.</p>
										</div>

										<div className="flex flex-col space-y-2 py-4">
											<p className="font-normal">The space</p>
											<p className="text-[#727271] font-light text-sm pr-8">Enjoy a quiet getaway in this charming cottage renovated, designed, and owned by Chip and Joanna Gaines. Originally the carriage house for Hillcrest Estate, this home includes one bedroom, one bath, an office nook and a private back patio. This makes it the perfect getaway for a party of two, or if you&apos;re stopping through town and need a restful place to retreat.</p>
										</div>

										<p className="text-[#C72F63] font-medium text-sm pb-4">Read more</p>

										<hr className="w-full mx-auto flex justify-center" />

										{/* Amenities */}
										<div className="flex flex-col space-y-2 py-4">
											<p className="text-lg font-medium my-4">What this place offers</p>
											<div className="grid grid-cols-3 gap-6">
												<div className="flex space-x-2 items-center">
													<img src={Guests} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Kitchen</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Guests} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Private patio or balcony

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Guests} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Central air conditioning

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Bedrooms} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Dedicated workspaces

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Bedrooms} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Wifi</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Bedrooms} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Heating</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Beds} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">55” 4k TV

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Beds} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">1 parking space

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Beds} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Security cameras

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Baths} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Free dryer - in unit

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Baths} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Free washer - in unit

													</span>
												</div>
												<div className="flex space-x-2 items-center">
													<img src={Baths} alt="guests icon" className="w-6 text-sm" />
													<span className="font-light text-sm pr-8">Ceiling fans

													</span>
												</div>
											</div>
										</div>

										<p className="text-[#C72F63] font-medium text-sm pb-4">View more</p>

										<hr className="w-full mx-auto flex justify-center" />

										{/* Reviews Summary */}
										<div className="flex flex-col space-y-2 py-4">
											<div className="flex justify-between">
												<p className="text-lg font-medium">Reviews</p>
												<div className="flex space-x-2 items-center">
													<img src={Star} alt="star" className="w-4" />
													<span className="font-light text-sm">{property.stars}   —   124 reviews</span>
												</div>
											</div>
										</div>

										<div className="border rounded-2xl p-6 space-y-6">
											<div className="flex justify-between">
												<span className="text-sm">Cleanliness</span>
												<div className="flex items-center space-x-2">
													<Progress value={100} className="w-96" />
													<span className="font-light text-sm">5.0</span>
												</div>
											</div>
											<div className="flex justify-between">
												<span className="text-sm">Accuracy</span>
												<div className="flex items-center space-x-2">
													<Progress value={98} className="w-96" />
													<span className="font-light text-sm">4.9</span>
												</div>
											</div>
											<div className="flex justify-between">
												<span className="text-sm">Communication</span>
												<div className="flex items-center space-x-2">
													<Progress value={96} className="w-96" />
													<span className="font-light text-sm">4.8</span>
												</div>
											</div>
											<div className="flex justify-between">
												<span className="text-sm">Location</span>
												<div className="flex items-center space-x-2">
													<Progress value={96} className="w-96" />
													<span className="font-light text-sm">4.8</span>
												</div>
											</div>
											<div className="flex justify-between">
												<span className="text-sm">Check-in</span>
												<div className="flex items-center space-x-2">
													<Progress value={98} className="w-96" />
													<span className="font-light text-sm">4.9</span>
												</div>
											</div>
											<div className="flex justify-between">
												<span className="text-sm">Value</span>
												<div className="flex items-center space-x-2">
													<Progress value={84} className="w-96" />
													<span className="font-light text-sm">4.2</span>
												</div>
											</div>
										</div>

										{/* Customer Reviews */}
										<div className="grid grid-cols-2 gap-4">
											<div className="rounded-2xl p-6 border space-y-6">
												<div className="flex space-x-4">
													<img src="https://framerusercontent.com/images/l64WTbI604jxlY6dzS0UsF0k6TU.png" alt="reviews" className="w-12 h-12 rounded-full object-cover" />
													<div className="space-y-1">
														<p className="font-normal">Steve</p>
														<p className="text-[#727271] font-light text-xs ">March 2023</p>
													</div>
												</div>

												<p className="text-[#727271] font-light text-sm">Abbe&apos;s place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I&apos;m so grateful.</p>
											</div>

											<div className="rounded-2xl p-6 border space-y-6">
												<div className="flex space-x-4">
													<img src="https://framerusercontent.com/images/1IzljdLWd8T9eDfla0R5LrZ9s.png" alt="reviews" className="w-12 h-12 rounded-full object-cover" />
													<div className="space-y-1">
														<p className="font-normal">Emily</p>
														<p className="text-[#727271] font-light text-xs ">March 2023</p>
													</div>
												</div>

												<p className="text-[#727271] font-light text-sm">The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.</p>
											</div>

											<div className="rounded-2xl p-6 border space-y-6">
												<div className="flex space-x-4">
													<img src="https://framerusercontent.com/images/jgTKOYkhLrOCP4ZWEugNNBORbs.png" alt="reviews" className="w-12 h-12 rounded-full object-cover" />
													<div className="space-y-1">
														<p className="font-normal">Daniel</p>
														<p className="text-[#727271] font-light text-xs ">March 2023</p>
													</div>
												</div>

												<p className="text-[#727271] font-light text-sm">Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively.</p>
											</div>

											<div className="rounded-2xl p-6 border space-y-6">
												<div className="flex space-x-4">
													<img src="https://framerusercontent.com/images/Jc9D7O4ihy2vSsSvjtWRRQPffjw.png" alt="reviews" className="w-12 h-12 rounded-full object-cover" />
													<div className="space-y-1">
														<p className="font-normal">Jackson</p>
														<p className="text-[#727271] font-light text-xs ">March 2023</p>
													</div>
												</div>

												<p className="text-[#727271] font-light text-sm">Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.</p>
											</div>
										</div>

										<p className="text-[#C72F63] font-medium text-sm py-4">View more</p>

										<hr className="w-full mx-auto flex justify-center" />

										{/* Location */}
										<div className="flex flex-col space-y-6 pt-4">
											<p className="text-lg font-medium my-4">Where you&apos;ll be</p>

											<img src={Map} alt="heart icon" className="" />

											<div className="space-y-2">
												<p className="font-normal">Weston, Saint James, Barbados</p>
												<p className="text-[#727271] font-light text-sm">
													The property, given its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life.
												</p>
											</div>
										</div>

										<p className="text-[#C72F63] font-medium text-sm py-4">View more</p>

										<hr className="w-full mx-auto flex justify-center" />

										<div className="flex flex-col space-y-6 pt-4">
											<p className="text-lg font-medium">Host</p>

											<div className="flex items-center justify-between">
												<div className="flex space-x-4">
													<img src="https://framerusercontent.com/images/BJlejSA7m05FYSEDxGymG3qB2w.jpg?scale-down-to=512" alt="host" className="w-12 h-12 rounded-full object-cover" />

													<div className="space-y-1">
														<p className="font-normal">Hosted by Brenda</p>
														<p className="text-[#727271] font-light text-xs ">Joined in August 2014</p>
													</div>
												</div>

												<p className="rounded-xl bg-white px-4 py-3 font-light text-sm cursor-pointer border border-black hover:border-[#c72f63]">Contact Host</p>
											</div>


											<div className="space-y-2">
												<div className="flex space-x-10 items-center py-4">
													<div className="flex space-x-2 items-center">
														<img src={Star} alt="guests icon" className="w-4 text-sm" />
														<span className="font-light text-sm">2,635 reviews</span>
													</div>

													<div className="flex space-x-2 items-center">
														<img src={Shield} alt="guests icon" className="w-4 text-sm" />
														<span className="font-light text-sm"> Identity verified

														</span>
													</div>

													<div className="flex space-x-2 items-center">
														<img src={Superhost} alt="guests icon" className="w-3 text-sm" />
														<span className="font-light text-sm">Superhost</span>
													</div>
												</div>
												<p className="text-[#727271] font-light text-sm">
													As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beautiful area. Vacations are special and we do our very best to make them affordable, enjoy…
												</p>
											</div>
										</div>
										<p className="text-[#C72F63] font-medium text-sm py-4">View more</p>
									</div>

									<div className="col-span-3 sticky top-0 h-fit" style={{ position: "sticky", top: 0, zIndex: 4000 }}>
										<div className="bg-[#F5F5F4] p-6 rounded-2xl">
											<div className="flex justify-between">
												<p className="text-[#000] text-sm font-light"><span className="text-black font-medium text-2xl">{property.amount}</span> / night</p>
												<div className="flex space-x-2 items-center">
													<img src={Star} alt="star" className="w-4" />
													<span className="font-light text-sm">{property.stars}</span>
												</div>
											</div>

											<div className="flex flex-col items-center space-y-4 my-6 w-full">
												<div className="grid grid-cols-2 w-full space-x-4">
													<div className="space-y-2">
														<p className="text-gray-500 font-light text-xs">Check in</p>
														<div className="p-3 flex items-center space-x-2 rounded-xl bg-[#FFFFFF] w-full">
															<img src={Calender} alt="star" className="w-6" />
															<p className="text-sm">6/14/2023</p>
														</div>
													</div>

													<div className="space-y-2">
														<p className="text-gray-500 font-light text-xs">Check out</p>
														<div className="p-3 flex items-center space-x-2 rounded-xl bg-[#FFFFFF] w-full">
															<img src={Calender} alt="star" className="w-6" />
															<p className="text-sm">6/21/2023</p>
														</div>

													</div>
												</div>

												<div className="space-y-2 w-full">
													<p className="text-gray-500 font-light text-xs">Guests</p>
													<div className="p-3 flex items-center justify-between space-x-2 rounded-xl bg-[#FFFFFF] w-full">
														<p className="text-sm">1 guests</p>
														<CaretDownIcon className="w-4" />
													</div>
												</div>
											</div>

											<hr className="w-full mx-auto flex justify-center" />

											<div className="rounded-2xl my-6 space-y-4">
												<div className="flex justify-between">
													<div className="flex items-center space-x-1">
														<span className="text-sm font-medium text-black">6 nights</span>
														<InfoCircledIcon className="text-gray-500" />
													</div>
													<span className="font-light text-sm">$2,199</span>
												</div>

												<div className="flex justify-between">
													<div className="flex items-center space-x-1">
														<span className="text-sm font-medium text-black">Cleaning fee</span>
														<InfoCircledIcon />
													</div>
													<span className="font-light text-sm">$85</span>
												</div>

												<div className="flex justify-between">
													<div className="flex items-center space-x-1">
														<span className="text-sm font-medium text-black">Airbnb service fee</span>
														<InfoCircledIcon />
													</div>
													<span className="font-light text-sm">$322</span>
												</div>
											</div>

											<hr className="w-full mx-auto flex justify-center" />

											<div className="flex justify-between my-6">
												<div className="flex flex-col justify-start space-y-1">
													<span className="text-lg font-medium text-black">Total</span>
													<span className="text-xs font-light text-gray-500">Before taxes</span>
												</div>
												<span className="font-light">$2,606</span>
											</div>


											<Button className="rounded-xl w-full  bg-gradient-to-r from-[#D23A50] to-[#C72F63] py-6 font-normal disabled:cursor-not-allowed">Reserve</Button>
										</div>

										<div className="bg-[#fcc2c2] bg-opacity-10 p-4 rounded-2xl flex space-x-4 mt-4">
											<img src={Gem} alt="gem" className="text-sm w-12 h-12" />

											<div className="">
												<p className="font-medium text-lg">This is a rare find</p>
												<p className="text-gray-500 font-light text-sm pr-4">Kathryn&apos;s place on Airbnb is usually fully booked.</p>
											</div>
										</div>
									</div>

								</div>
							</SheetContent>
						</Sheet>
					))}
				</div>

				{showFilter && <FilterSheet showFilter={showFilter} setShowFilter={setShowFilter} />
				}
			</div>
		</div >
	);
};
export default App;