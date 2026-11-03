import api from '../../services/api';

// ============================
// Register Teacher
// ============================
export const registerTeacher = async (teacherData) => {
    const token = localStorage.getItem("adminToken");

    const response = await api.post(
        "/superadmin/teacher/register",
        teacherData,
        {
            headers: {
                Authorization:`Bearer ${token}`,
            },
        }
    );
    return response.data;
};

// ============================
// Get All Teachers
// ============================
export const getAllTeachers = async () => {
    const token = localStorage.getItem("adminToken");

    const response = await api.get(
        "/superadmin/teacher",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
}