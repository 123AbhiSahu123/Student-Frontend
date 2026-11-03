
import { useCallback, useEffect, useState } from "react";
import { getAllTeachers } from "../../services/teacherService.js";
import AdminNavbar from "../../components/AdminNavbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";
import TeacherTable from "../../components/TeacherTable.jsx";
import { Users, RefreshCw } from "lucide-react";

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchTeachers = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const result = await getAllTeachers();

            setTeachers(result.teachers || []);
        } catch (err) {
            setError(err.message || "Unable to fetch teachers.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTeachers();
    }, [fetchTeachers]);

    return (
        <>
            <div className="h-screen overflow-hidden flex flex-col bg-gray-100">
                <AdminNavbar />
                <div className="flex flex-1 min-h-0 overflow-hidden bg-gray-100">
                    <Sidebar />
                    {/* Header */}
                    <main className="flex-1 p-8 min-w-0 min-h-0 overflow-x-hidden overflow-y-auto bg-gray-100">
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold">
                                    Teacher List
                                </h1>

                                <p className="text-gray-500 mt-1">
                                    Manage all registered teachers.
                                </p>
                            </div>

                            <button
                                onClick={fetchTeachers}
                                disabled={loading}
                                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
                            >
                                <RefreshCw size={17} />
                                Refresh
                            </button>
                        </div>

                        {/* Total Teachers */}
                        <div className="mb-6 rounded-xl bg-white p-5 shadow">
                            <div className="flex items-center gap-4">
                                <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                                    <Users size={25} />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Total Teachers
                                    </p>

                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {teachers.length}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Loading */}
                        {loading && (
                            <div className="rounded-xl bg-white p-8 text-center shadow">
                                <p className="text-gray-600">
                                    Loading teachers...
                                </p>
                            </div>
                        )}

                        {/* Error */}
                        {!loading && error && (
                            <div className="rounded-xl bg-red-50 p-5 text-red-700">
                                <p className="font-medium">{error}</p>

                                <button
                                    onClick={fetchTeachers}
                                    className="mt-3 rounded-lg bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
                                >
                                    Try Again
                                </button>
                            </div>
                        )}

                        {/* Table */}
                        {!loading && !error && (
                            <TeacherTable teachers={teachers} />
                        )}
                    </main>
                </div>
            </div>
        </>
    );
};

export default TeacherList;
