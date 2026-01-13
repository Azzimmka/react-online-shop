import axios  from "axios";
import { type Product } from "../utils/types";

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'


export function apiCall(url: string, method: Method, data?: Product){
    return axios({
        baseURL: 'http://localhost:3000',
        url: url,
        method: method,
        data: data,
    })
}