import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../services/superAdminService";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await adminLogin(formData);
            localStorage.setItem(
                "adminToken",
                response.token
            );
            alert("Login Sucessful");
            navigate("/admin/dashboard");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        } finally {
            setLoading(false);
        }
    };


    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 w-[380px]"
            >

                <h1 className="text-3xl font-bold text-center mb-6">

                    Super Admin Login

                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border p-3 rounded mb-6"
                />

                <button
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                >

                    {loading ? "Please Wait..." : "Login"}

                </button>

            </form>

        </div>

    );
}

export default AdminLogin;