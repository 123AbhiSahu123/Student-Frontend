import { Routes, Route } from "react-router-dom";

import AdminLogin from "../superAdmin/pages/AdminLogin";
import AdminDashboard from "../superAdmin/pages/AdminDashboard";
import AdminRoute from "../superAdmin/routes/AdminRoute";

// Existing Pages
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {

    return (

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            {/* Admin */}

            <Route
                path="/admin/login"
                element={<AdminLogin />}
            />

            <Route
                path="/admin/dashboard"
                element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                }
            />

        </Routes>

    );

};

export default AppRoutes;