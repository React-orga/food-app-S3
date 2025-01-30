import { IUserApiResponse } from "@/types/UserApi/UserApiProps";
import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchUsers = async (): Promise<IUserApiResponse> => {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
};

export const fetchUserById = async (id: number): Promise<IUserApiResponse> => {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
};
