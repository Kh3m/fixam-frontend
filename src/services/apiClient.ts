import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://fixamalb-676692095.eu-north-1.elb.amazonaws.com"
})

export default apiClient;