import axios, { Axios } from "axios"
import instance from "../apis/app";
const sideBarApi = () => {
    return axios.get("https://fakestoreapi.com/products");
}

const fetchProduct = () => {
    return axios.get("https://fakestoreapi.com/products");
}

const loginApi = (email, password) => {
    return axios.post("https://reqres.in/api/login", {email, password});
}

export {sideBarApi, fetchProduct, loginApi}