import { Link } from "react-router-dom";
import { useState } from "react";
import { addData } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Data = () => {

  const [form, setForm] = useState({
    course: "",
    phone: "",
    age: "",
    location: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      const response = await addData(form, token);
      alert("Data Added Successfully");
      navigate("/profile");

    } catch (err) {
      console.log(err.response?.data);
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Complete your Profile
          </h1>
          <p className="text-gray-500 mt-2">
            Save Data in your Profile
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Course Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Course :-
            </label>

            <input
              type="text"
              name="course"
              placeholder="Enter your Course Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone No. :-
            </label>

            <input
              type="number"
              name="phone"
              placeholder="Enter your Phone No."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Age :-
            </label>

            <input
              type="number"
              name="age"
              placeholder="Enter Your Age"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location :-
            </label>

            <input
              type="text"
              name="location"
              placeholder="Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              onChange={handleChange}
            />
          </div>

          {/* Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Save Details
          </button>

          {/* Login */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/profile"
              className="text-blue-600 font-semibold hover:underline"
            >
              Pofile
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Data;