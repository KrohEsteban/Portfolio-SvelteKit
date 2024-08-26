export interface PalabraClave {
    titulo: string;
    id: string;
}

export interface RichTextNormal {
    children: Array<{
        text: string;
        type?: 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'link';
        linkType?: 'internal' | 'custom';
        doc?: {
            value: {
                id: string;
                Title: string;
                Description: string;
                Slug: string;
                PalabrasClaves: PalabraClave[];
                createdAt: string;
                updatedAt: string;
                Contenido: Array<{
                    RichTextNormal: RichTextNormal[];
                }>;
                ImageOpenGraph: ImageOpenGraph;
            };
        };
        url?: string;
    }>;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote' | 'link';
}

export interface ImageOpenGraph {
    id: string;
    Alt: string;
    webp: {
        filename: string;
        filesize: number;
        width: number;
        mimeType: string;
        height: number;
        url: string;
        sizes: {
            thumbnail: {
                filename: string;
                filesize: number;
                width: number;
                mimeType: string;
                height: number;
                url: string;
            };
        };
    };
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    sizes: {
        thumbnail: {
            url: string;
            width: number;
            height: number;
            mimeType: string;
            filesize: number;
            filename: string;
        };
    };
    createdAt: string;
    updatedAt: string;
    url: string;
}

export interface ContenidoItem {
    RichTextNormal?: RichTextNormal[];
    Modal?: Array<{
        children: Array<{
            text: string;
            type?: 'link';
            linkType?: 'internal' | 'custom';
            doc?: {
                value: {
                    id: string;
                    Title: string;
                    Description: string;
                    Slug: string;
                    PalabrasClaves: PalabraClave[];
                    createdAt: string;
                    updatedAt: string;
                    Contenido: Array<{
                        RichTextNormal: RichTextNormal[];
                    }>;
                    ImageOpenGraph: ImageOpenGraph;
                };
            };
            url?: string;
        }>;
    }>;
    ImageOpenGraph?: ImageOpenGraph;
    id: string;
    blockType: 'RichTextNormal' | 'Modal';
}

export interface Pages {
    id: string;
    Title: string;
    Description: string;
    Slug: string;
    PalabrasClaves: PalabraClave[];
    createdAt: string;
    updatedAt: string;
    Contenido: ContenidoItem[];
    ImageOpenGraph: ImageOpenGraph;
}
