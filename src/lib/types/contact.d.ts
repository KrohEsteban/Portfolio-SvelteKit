export interface SocialLink {
	id: string;
	Nombre: string;
	Url: string;
	Svg: string;
	createdAt: string;
	updatedAt: string;
}

export interface Contact {
	docs: SocialLink[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: number | null;
	nextPage: number | null;
}
