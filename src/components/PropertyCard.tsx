import { Card } from "./ui/card";
import Star from "../assets/images/star.svg";
import Heart from "../assets/images/heart.svg";
import HeartWhite from "../assets/images/heart-white.svg";

interface Property {
	coverImage: string;
	images: string[];
	name: string;
	location: string;
	amount: string;
	stars: string;
}

const PropertyCard: React.FC<Property> = (property) => {
	return (
		<Card className="h-[380px] cursor-pointer relative">
			<img src={property.coverImage} className="overflow-hidden rounded-t-xl h-1/2 w-full object-cover" />

			<div className="flex flex-col justify-between p-5 h-1/2">
				<div className="space-y-2 text-start">
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
	);
};
export default PropertyCard;