import api from "../../services/api";

// ============================
// Admin Login
// ============================

export const adminLogin = async (loginData) => {
    const response = await api.post(
        "/superadmin/login",
        loginData
    );
    return response.data;
}

// ============================
// Get All Students
// ============================

export const getAllStudents = async () => {
    const token = localStorage.getItem("adminToken");

    const response = await api.get(
        "/superadmin/students",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
}

// ============================
// Admin dashboard Logout
// ============================
export const superAdminLogout = async () => {
    const token = localStorage.getItem("adminToken");

    const response = await api.post(
        "/superadmin/logout",
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
}


// ============================
// Delete Student
// ============================