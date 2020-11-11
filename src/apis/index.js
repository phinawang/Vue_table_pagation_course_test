import axios from "axios";

const instance = axios.create({
  baseURL: "https://cat-fact.herokuapp.com"
});

export const getFactList = () => instance.get("/facts/random?amount=100");
