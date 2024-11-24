import axios from "axios";

const api = axios.create({
    baseURL:"http://ec2-34-224-23-65.compute-1.amazonaws.com:5000/estoque/",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000,
});

export default api