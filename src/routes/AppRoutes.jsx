
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Data from "../pages/Data";
import Profile from "../pages/Profile";

import AdminLogin from "../superAdmin/pages/AdminLogin";
import AdminDashboard from "../superAdmin/pages/AdminDashboard";
import AdminStudents from "../superAdmin/pages/AdminStudents";

import AdminRoute from "../superAdmin/routes/AdminRoute";
import TeacherRegister from "../superAdmin/pages/teacher/TeacherRegister";
import TeacherList from "../superAdmin/pages/teacher/TeacherList";

const AppRoutes = () => {

    return (

        <Routes>

            {/* ========================= */}
            {/* Normal User Routes */}
            {/* ========================= */}

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/data"
                element={<Data />}
            />

            <Route
                path="/profile"
                element={<Profile />}
            />


            {/* ========================= */}
            {/* Super Admin Routes */}
            {/* ========================= */}

            <Route
                path="/admin/login"
                element={<AdminLogin />}
            />


            {/* ========================= */}
            {/* Protected Admin Routes */}
            {/* ========================= */}

            <Route element={<AdminRoute />}>
                <Route
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/admin/students"
                    element={<AdminStudents />}
                />

                <Route
                    path="/admin/teacher/register"
                    element={<TeacherRegister />}
                />

                <Route
                    path="/admin/teacher/"
                    element={<TeacherList />}
                />
            </Route>

        </Routes>

    );

};


export default AppRoutes;

