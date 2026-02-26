import axios from "axios";
import {baseUrl} from "../constants/urls.ts";

export const key = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + key
    },
})