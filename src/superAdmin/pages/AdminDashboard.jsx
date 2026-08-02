import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import StudentTable from "../components/StudentTable";
import {
    getAllStudents,
    // deleteStudent,
} from "../services/superAdminService";


const AdminDashboard = () => {

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);



    const fetchStudents = async () => {

        try {

            const response = await getAllStudents();

            setStudents(response.students);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };



    useEffect(() => {

        fetchStudents();

    }, []);




    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete Student?"
        );

        if (!confirmDelete) return;

        try {

            await deleteStudent(id);

            fetchStudents();

        } catch (error) {

            alert(error.response.data.message);

        }

    };



    if (loading) {

        return (

            <h1 className="text-center mt-10">

                Loading....

            </h1>

        );

    }

    return (
        <div>
            <AdminNavbar />
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-8 bg-gray-100 min-h-screen">
                    <h1 className="text-3xl font-bold">
                        Dashboard
                    </h1>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-lg font-semibold">

                                Total Students

                            </h2>

                            <h1 className="text-4xl font-bold mt-3">

                                {students.length}

                            </h1>
                        </div>
                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-lg font-semibold">

                                Active Students

                            </h2>

                            <p className="text-4xl font-bold mt-3">

                                0

                            </p>
                        </div>
                        <div className="bg-white shadow rounded p-6">

                            <h2 className="text-lg font-semibold">

                                Registered Today

                            </h2>

                            <p className="text-4xl font-bold mt-3">

                                0

                            </p>

                        </div>
                    </div>
                    <StudentTable
                        students={students}
                        deleteStudent={handleDelete}
                    />
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard;