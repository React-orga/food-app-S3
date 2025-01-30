export interface IProductApi {
    id: number;
    title: string;
    price: number;
    description?: string;
    category?: string;
    image?: string;
}

export interface IProductApiResponse {
    title: string;
    id: number;
    price: number;
    description?: string;
    category?: string;
    image?: string;
    data: IProductApi[];
}

export type IProductDetailResponse = IProductApi;