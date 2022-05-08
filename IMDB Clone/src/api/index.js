import axios from "../axios-movies";
const API_KEY = process.env.REACT_APP_API_KEY;

const params = `?api_key=${API_KEY}&language=en-US`;

export const fetchMoviesAPI = (url) => {
  return axios.get(`${url}${params}`);
};

export const fetchSearchMoviesAPI = (input) => {
  return axios.get(`/search/movie${params}&query=${input}`);
};
