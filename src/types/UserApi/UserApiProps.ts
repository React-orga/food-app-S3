import { ReactNode } from "react";

export interface IUserApi {
    address: {
        geolocation: {
            lat: string;
            long: string;
        };
        city: string;
        street: string;
        number: number;
        zipcode: string;
    };
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    phone: string;
    __v: number;
}

export interface IUserApiResponse {
    name: any;
    email: ReactNode;
    phone: ReactNode;
    username: ReactNode;
    address: any;
    data: IUserApi[];
}