import Axios from "axios";

const axios = Axios.create({
    baseURL: process.env.BE_URL ?? "http://localhost:1337",
})

export default axios