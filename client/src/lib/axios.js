import Axios from "axios";

const axios = Axios.create({
    baseURL: "http://3.8.167.185:1337",
})

export default axios