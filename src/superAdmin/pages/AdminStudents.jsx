import { useEffect, useState } from "react";

import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import StudentTable from "../components/StudentTable";

import {
    getAllStudents,
    // deleteStudent,
} from "../services/superAdminService";


const AdminStudents = () => {

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);


    // =========================
    // Get All Students
    // =========================

    const fetchStudents = async () => {

        try {

            setLoading(true);

            const response = await getAllStudents();

            setStudents(response.students || []);

        } catch (error) {

            console.error("Students Error:", error);

        } finally {

            setLoading(false);

        }

    };


    useEffect(() => {

        fetchStudents();

    }, []);


    // =========================
    // Delete Student
    // =========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) {
            return;
        }


        try {

            await deleteStudent(id);

            alert("Student deleted successfully");

            fetchStudents();

        } catch (error) {

            console.error("Delete Error:", error);

            alert(
                error.response?.data?.message ||
                "Failed to delete student"
            );

        }

    };


    return (

        <div className="min-h-screen bg-gray-100">

            {/* Admin Navbar */}

            <AdminNavbar />


            <div className="flex">

                {/* Sidebar */}

                <Sidebar />


                {/* Main Content */}

                <main className="flex-1 p-8">

                    <div className="mb-6">

                        <h1 className="text-3xl font-bold">
                            Students
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Manage all registered students
                        </p>

                    </div>


                    {loading ? (

                        <div className="bg-white rounded-lg shadow p-10 text-center">

                            <p className="text-lg">
                                Loading students...
                            </p>

                        </div>

                    ) : (

                        <StudentTable
                            students={students}
                            deleteStudent={handleDelete}
                        />

                    )}

                </main>

            </div>

        </div>

    );

};

export default AdminStudents;
