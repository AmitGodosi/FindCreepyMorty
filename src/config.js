import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "https://rickandmortyapi.com/api",
});

export const LOCATION = "Earth (C-137)";
