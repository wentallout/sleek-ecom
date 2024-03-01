export type Product = {
	name: string;
	brand: string;
	price: number;
	thumbnailUrl: string;
	discountPercent?: number;
	isHot?: boolean;
	isNew?: boolean;
};
