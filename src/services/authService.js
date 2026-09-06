import api from "./api";

//Register
export const registerUser = async (userData) => {
    const response = await api.post("/register", userData);
    return response.data;
};

//Login
export const loginUser = async (userData) => {
    const response = await api.post("/login", userData);
    return response.data;
}

//Add Student Data
export const addData = async (data, token) => {
    const response = await api.post("/data", data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

//Profile
export const getProfile = async (token) => {
    const response = await api.get("/profile", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

//Logout
export const logout = async () => {
    const token = localStorage.getItem("token");
    console.log("Logout Token:", token);

    const response = await api.post(
        "/logout",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
}