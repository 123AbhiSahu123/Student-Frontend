
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
            </Route>

        </Routes>

    );

};


export default AppRoutes;

// import { Routes, Route } from "react-router-dom";

// import AdminLogin from "../superAdmin/pages/AdminLogin";
// import AdminDashboard from "../superAdmin/pages/AdminDashboard";
// import AdminRoute from "../superAdmin/routes/AdminRoute";

// // Existing Pages
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

// const AppRoutes = () => {

//     return (

//         <Routes>

//             <Route path="/" element={<Home />} />

//             <Route path="/login" element={<Login />} />

//             <Route path="/register" element={<Register />} />

//             {/* Admin */}

//             <Route
//                 path="/admin/login"
//                 element={<AdminLogin />}
//             />

//             <Route
//                 path="/admin/dashboard"
//                 element={
//                     <AdminRoute>
//                         <AdminDashboard />
//                     </AdminRoute>
//                 }
//             />

//         </Routes>

//     );

// };

// export default AppRoutes;