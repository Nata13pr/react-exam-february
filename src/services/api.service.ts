import axios from "axios";
import {baseUrl} from "../constants/urls.ts";

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjU5ZmE1ZGVlYzAwNWI3MWE2ZjYwYzk3OTY4MmIwYSIsIm5iZiI6MTY5MDAxNDcxMy4yODE5OTk4LCJzdWIiOiI2NGJiOTNmOTlkNTkyYzAxMjQ2NWFiNDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4ctZItPFl8necv7ACLpWRVVm1TIzqMeoJbNeyRiMHpA'
    },
})