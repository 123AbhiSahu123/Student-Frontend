import { useNavigate } from "react-router-dom";
import { superAdminLogout } from "../services/superAdminService";

const AdminNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await superAdminLogout();
            localStorage.removeItem("adminToken");
            navigate("/superadmin/login");
            
        } catch (err) {
            console.error(err);

            // Still remove local token
            localStorage.removeItem("adminToken");
            navigate("/superadmin/login");
        }
    }

    return (
        <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
                Super Admin Dashboard
            </h1>
            <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                Logout
            </button>
        </nav>
    )
};
export default AdminNavbar;
