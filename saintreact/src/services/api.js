import axios from "axios";

const api = axios.create({
    baseURL:"https://www.saintblue.com.br:5000/estoque/",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 30000,
});

export default api