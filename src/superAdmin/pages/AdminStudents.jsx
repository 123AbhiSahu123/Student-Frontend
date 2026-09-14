import { useEffect, useState } from "react";

import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import StudentTable from "../components/StudentTable";

import {
    getAllStudents,
    deleteStudent,
} from "../services/superAdminService";


const AdminStudents = () => {

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);

    // Pagination
    // =========================
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    // Search
    // =========================
    const [search, setSearch] = useState("");

    // Date Filter
    // =========================
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    // Backend Pagination Data
    // =========================
    const [pagination, setPagination] = useState({
        totalStudents: 0,
        totalFilteredStudents: 0,
        current: 1,
        limit: 5,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false,
    });


    // =========================
    // Get All Students
    // =========================

    const fetchStudents = async () => {

        try {

            setLoading(true);

            const response = await getAllStudents({ page, limit, search, fromDate, toDate, });

            setStudents(response.students || []);

            //Pagination
            setPagination({
                totalStudents: response.totalStudents,
                totalFilteredStudents: response.totalFilteredStudents,
                current: response.current,
                limit: response.limit,
                totalPages: response.totalPages,
                hasNextPage: response.hasNextPage,
                hasPreviousPage: response.hasPreviousPage,
            });

        } catch (error) {

            console.error("Students Error:", error.response?.data || error.message);

        } finally {

            setLoading(false);

        }

    };


    useEffect(() => {

        fetchStudents();

    }, [ page, limit, search, fromDate, toDate ]);


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

                    {/* =========================
                        COUNTERS
                    ========================= */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                        {/* Total Students */}

                        <div className="bg-white rounded-lg shadow p-5">
                            <p className="text-gray-500">
                                Total Students
                            </p>
                            <h2 className="text-3xl font-bold mt-2">
                                {pagination.totalStudents}
                            </h2>
                        </div>


                        {/* Filtered Students */}

                        <div className="bg-white rounded-lg shadow p-5">
                            <p className="text-gray-500">
                                Filtered Students
                            </p>
                            <h2 className="text-3xl font-bold mt-2">
                                {pagination.totalFilteredStudents}
                            </h2>
                        </div>


                        {/* Current Page */}

                        <div className="bg-white rounded-lg shadow p-5">
                            <p className="text-gray-500">
                                Current Page
                            </p>

                            <h2 className="text-3xl font-bold mt-2">
                                {pagination.current}
                                {" / "}
                                {pagination.totalPages}
                            </h2>
                        </div>
                    </div>


                    {/* =========================
                        FILTER SECTION
                    ========================= */}

                    <div className="bg-white rounded-lg shadow p-5 mb-6">
                        {/* Search */}

                        <div className="mb-5">
                            <label className="block font-medium mb-2">
                                Search Student
                            </label>

                            <input
                                type="text"
                                placeholder="Search name, email, phone, course, location..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    // Search start from page 1
                                    setPage(1);
                                }}
                                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>


                        {/* Date Filter */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* From Date */}
                            <div>
                                <label className="block font-medium mb-2">
                                    From Date
                                </label>

                                <input
                                    type="date"
                                    value={fromDate}
                                    onChange={(e) => {
                                        setFromDate(e.target.value);
                                        setPage(1);
                                    }}
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                            </div>


                            {/* To Date */}

                            <div>
                                <label className="block font-medium mb-2">
                                    To Date
                                </label>

                                <input
                                    type="date"
                                    value={toDate}
                                    onChange={(e) => {
                                        setToDate(e.target.value);
                                        setPage(1);
                                    }}
                                    className="w-full border rounded-lg px-4 py-2"
                                />
                            </div>


                            {/* Clear */}

                            <div className="flex items-end">
                                <button
                                    onClick={() => {
                                        setSearch("");
                                        setFromDate("");
                                        setToDate("");
                                        setPage(1);
                                    }}
                                    className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {loading ? (

                        <div className="bg-white rounded-lg shadow p-10 text-center">

                            <p className="text-lg">
                                Loading students...
                            </p>

                        </div>
                        
                    ) : (


                        <>
                            <StudentTable
                                students={students}
                                deleteStudent={handleDelete}
                            />
                            {/* =========================
                                PAGINATION
                            ========================= */}
                            <div className="flex items-center justify-between mt-6">
                                {/* Previous */}
                                <button
                                    disabled={!pagination.hasPreviousPage}
                                    onClick={() =>
                                        setPage((prev) => prev - 1)
                                    }
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    Previous
                                </button>
                                {/* Page */}
                                <div className="font-medium">

                                    Page {pagination.current}
                                    {" "}
                                    of
                                    {" "}
                                    {pagination.totalPages}

                                </div>
                                {/* Next */}
                                <button
                                    disabled={!pagination.hasNextPage}
                                    onClick={() =>
                                        setPage((prev) => prev + 1)
                                    }
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>


                            {/* =========================
                                STUDENTS PER PAGE
                            ========================= */}

                            <div className="flex justify-end mt-4">
                                <select
                                    value={limit}
                                    onChange={(e) => {
                                        setLimit(
                                            Number(e.target.value)
                                        );
                                        setPage(1);
                                    }}
                                    className="border rounded-lg px-3 py-2"
                                >
                                    <option value={5}>
                                        5 per page
                                    </option>
                                    <option value={10}>
                                        10 per page
                                    </option>
                                    <option value={20}>
                                        20 per page
                                    </option>
                                    <option value={50}>
                                        50 per page
                                    </option>
                                </select>
                            </div>


                        </>

                    )}

                </main>

            </div>

        </div>

    );

};

export default AdminStudents;
