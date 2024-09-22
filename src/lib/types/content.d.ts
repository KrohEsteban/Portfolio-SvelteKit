// export interface PalabraClave {
//     titulo: string;
//     id: string;
// }

// export interface TextFormat {
//     text: string;
//     bold?: boolean;
//     italic?: boolean;
//     underline?: boolean;
//     strikethrough?: boolean;
//     code?: boolean;
// }

// export interface RichText {
//     children: Array<{
//         text: TextFormat;
//         type?: 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'link';
//         linkType?: 'internal' | 'custom';
//         doc?: {
//             value: {
//                 id: string;
//                 Title: string;
//                 Description: string;
//                 Slug: string;
//                 PalabrasClaves: PalabraClave[];
//                 createdAt: string;
//                 updatedAt: string;
//                 Contenido: Array<{
//                     RichText: RichText[];
//                 }>;
//                 ImageOpenGraph: ImageOpenGraph;
//             };
//         };
//         url?: string;
//     }>;
//     type?: 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'link';
// }

// export interface ImageOpenGraph {
//     id: string;
//     Alt: string;
//     webp: {
//         filename: string;
//         filesize: number;
//         width: number;
//         mimeType: string;
//         height: number;
//         url: string;
//         sizes: {
//             thumbnail: {
//                 filename: string;
//                 filesize: number;
//                 width: number;
//                 mimeType: string;
//                 height: number;
//                 url: string;
//             };
//         };
//     };
//     filename: string;
//     mimeType: string;
//     filesize: number;
//     width: number;
//     height: number;
//     sizes: {
//         thumbnail: {
//             url: string;
//             width: number;
//             height: number;
//             mimeType: string;
//             filesize: number;
//             filename: string;
//         };
//     };
//     createdAt: string;
//     updatedAt: string;
//     url: string;
// }

// export interface ContenidoItem {
//     RichTextNormal?: RichText[];
//     Modal?: RichText[];
//     ImageOpenGraph?: ImageOpenGraph;
//     id: string;
//     blockType: 'RichTextNormal' | 'Modal';
// }

// export interface Content {
//     id: string;
//     Title: string;
//     Description: string;
//     Slug: string;
//     PalabrasClaves: PalabraClave[];
//     createdAt: string;
//     updatedAt: string;
//     Contenido: ContenidoItem[];
//     ImageOpenGraph: ImageOpenGraph;
// }

// Tipos básicos
export type TextFormat = {
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	code?: boolean;
};

export type PalabraClave = {
	titulo: string;
	id: string;
};

// Tipos para los bloques de contenido
export type RichText = {
	children: RichTextContent[];
	id: string;
	blockType: 'RichTextNormal' | 'Modal';
};

// Tipo para el contenido de RichText
export type RichTextContent = {
	children: Array<{
		text?: TextFormat;
		type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'link';
		linkType?: 'internal' | 'custom';
		doc?: {
			value: Content;
			relationTo: string;
		};
		url?: string;
	}>;
	id?: string;
	type?: 'RichTextNormal' | 'Modal' | 'ImageOpenGraph' | 'blockquote' | 'link';
};

// Tipo para imágenes
export type ImageData = {
	filename: string;
	filesize: number;
	width: number;
	height: number;
	mimeType: string;
	url: string;
};

export type ImageSizes = {
	thumbnail: ImageData;
};

export type ImageOpenGraph = {
	id: string;
	Alt: string;
	webp: ImageData & { sizes: ImageSizes };
} & ImageData & {
		sizes: ImageSizes;
		createdAt: string;
		updatedAt: string;
	};

export type ImageOpenGraphBlock = {
	ImageOpenGraph: ImageOpenGraph;
	id: string;
	blockType: 'ImageOpenGraph';
};

// Tipo principal
export type Content = {
	id: string;
	Title: string;
	Description: string;
	Slug: string;
	PalabrasClaves: PalabraClave[];
	createdAt: string;
	updatedAt: string;
	Contenido: RichText[];
	ImageOpenGraph: ImageOpenGraph;
};
