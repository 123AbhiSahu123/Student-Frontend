import { Link } from "react-router-dom";

const Data = () => {
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
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Course :-
            </label>

            <input
              type="text"
              placeholder="Enter your Course Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone No. :-
            </label>

            <input
              type="number"
              placeholder="Enter your Phone No."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
                Age :-
            </label>

            <input
              type="number"
              placeholder="Enter Your Age"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Location :-
            </label>

            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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