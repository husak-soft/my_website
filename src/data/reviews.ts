// data/reviews.ts
export interface Review {
	id: number;
	name: string;
	role: string;
	content: string;
	rating: number;
}

export const reviews: Review[] = [
	{
		id: 1,
		name: "Alexander Voss",
		role: "CEO, Techflow",
		content:
			"Husak transformed our legacy system into a high-performance machine. Their attention to detail in code and design is unparalleled.",
		rating: 5,
	},
	{
		id: 2,
		name: "Sarah Jenkins",
		role: "Product Lead, Nexa",
		content:
			"The strategy and design phase was eye-opening. They don't just build; they engineer digital experiences that scale.",
		rating: 5,
	},
	{
		id: 3,
		name: "David Chen",
		role: "Founder, GreenGrid",
		content:
			"Responsive, professional, and technical experts. The green accent isn't just a color; it represents the energy they bring.",
		rating: 4,
	},
	{
		id: 4,
		name: "Elena Rodriguez",
		role: "CTO, Arca Systems",
		content:
			"Digital realities scaled indeed! Our user retention increased by 40% after the redesign and optimization.",
		rating: 5,
	},
];
