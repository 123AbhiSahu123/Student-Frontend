import { useEffect, useState } from "react";
import { getProfile, logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await getProfile(token);
            setProfile(response);
        } catch (err) {
            console.log(err.response?.data);
        }
    };

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-2xl font-bold text-blue-600 animate-pulse">
                    Loading Profile...
                </h1>
            </div>
        );
    }

    //Logout function

    const handleLogout = async () => {
        try {
            await logout();
            localStorage.removeItem("token");
            navigate("/login");
        } catch (error) {
            console.error("Logout Error:", error);
            //Again token remove
            localStorage.removeItem("token");
            navigate("/login");
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 py-10 px-5">

            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-10">
                    <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold mx-auto shadow-xl">
                        {profile.name?.charAt(0).toUpperCase()}
                    </div>

                    <h1 className="text-4xl font-bold mt-5 text-gray-800">
                        Student Profile
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Welcome back, {profile.name}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* User Information */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-2xl font-bold text-blue-600 mb-6">
                            Personal Information
                        </h2>

                        <div className="space-y-5">

                            <div className="flex justify-between border-b pb-3">
                                <span className="font-semibold text-gray-600">
                                    User ID
                                </span>

                                <span>{profile.id}</span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span className="font-semibold text-gray-600">
                                    Full Name
                                </span>

                                <span>{profile.name}</span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span className="font-semibold text-gray-600">
                                    Email
                                </span>

                                <span>{profile.email}</span>
                            </div>

                        </div>

                    </div>

                    {/* Student Information */}
                    <div className="bg-white rounded-3xl shadow-xl p-8">

                        <h2 className="text-2xl font-bold text-green-600 mb-6">
                            Student Details
                        </h2>

                        <div className="space-y-5">

                            <div className="flex justify-between border-b pb-3">
                                <span className="font-semibold text-gray-600">
                                    Course
                                </span>

                                <span>
                                    {profile.studentData?.course || "Not Available"}
                                </span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span className="font-semibold text-gray-600">
                                    Phone
                                </span>

                                <span>
                                    {profile.studentData?.phone || "Not Available"}
                                </span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span className="font-semibold text-gray-600">
                                    Age
                                </span>

                                <span>
                                    {profile.studentData?.age || "Not Available"}
                                </span>
                            </div>

                            <div className="flex justify-between border-b pb-3">
                                <span className="font-semibold text-gray-600">
                                    Location
                                </span>

                                <span>
                                    {profile.studentData?.location || "Not Available"}
                                </span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom Card */}

                <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">

                    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
                        Dashboard Summary
                    </h2>

                    <div className="grid md:grid-cols-4 gap-5">

                        <div className="bg-blue-50 rounded-2xl p-5 text-center">
                            <h3 className="text-3xl font-bold text-blue-600">
                                {profile.id}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                User ID
                            </p>
                        </div>

                        <div className="bg-green-50 rounded-2xl p-5 text-center">
                            <h3 className="text-xl font-bold text-green-600">
                                {profile.studentData?.course}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Course
                            </p>
                        </div>

                        <div className="bg-yellow-50 rounded-2xl p-5 text-center">
                            <h3 className="text-3xl font-bold text-yellow-600">
                                {profile.studentData?.age}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Age
                            </p>
                        </div>

                        <div className="bg-purple-50 rounded-2xl p-5 text-center">
                            <h3 className="text-xl font-bold text-purple-600">
                                {profile.studentData?.location}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                City
                            </p>
                        </div>

                    </div>

                </div>
                <div className="text-white flex items-center justify-center mt-3">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;