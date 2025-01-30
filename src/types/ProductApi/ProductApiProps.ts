export interface IProductApi {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export interface IProductApiResponse {
    data: IProductApi[];
}

export type IProductDetailResponse = IProductApi;