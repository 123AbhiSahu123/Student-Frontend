import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";


const AdminDashboard = () => {

    const [students, setStudents] = useState([]);

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminNavbar />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-8 bg-gray-100 min-h-screen">
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Welcome to Super Admin Dashboard
                    </p>
                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-lg font-semibold">

                                Total Students

                            </h2>

                            <h1 className="text-4xl font-bold mt-3">
                                
                                {students.length}

                            </h1>
                        </div>

                        {/* Total Courses */}
                        <div className="bg-white rounded-lg shadow p-6">

                            <h2 className="text-gray-500">
                                Total Courses
                            </h2>

                            <p className="text-4xl font-bold mt-3">
                                0
                            </p>

                        </div>

                        {/* Active Students */}

                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-lg font-semibold">
                                Active Students
                            </h2>

                            <p className="text-4xl font-bold mt-3">
                                0
                            </p>
                        </div>

                         {/* Registered Today */}
                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-lg font-semibold">
                                Registered Today
                            </h2>

                            <p className="text-4xl font-bold mt-3">
                                0
                            </p>
                        </div>

                         {/* New Students */}
                        <div className="bg-white rounded-lg shadow p-6">

                            <h2 className="text-lg font-semibold">
                                New Students
                            </h2>

                            <p className="text-4xl font-bold mt-3">
                                0
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default AdminDashboard;