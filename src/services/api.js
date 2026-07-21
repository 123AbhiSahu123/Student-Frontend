import axios from "axios";

const api = axios.create({
    baseURL:"https://student-dashboard-u1rj.onrender.com/api",
    headers: {
        "Content-Type": "application/json"
    },
});

export default api;