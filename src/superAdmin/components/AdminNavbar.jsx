import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        Navigate("/admin/login");
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
