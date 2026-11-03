
import { useState } from "react";
import { registerTeacher } from "../../services/teacherService.js";
import AdminNavbar from "../../components/AdminNavbar.jsx";
import Sidebar from "../../components/Sidebar.jsx";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    password: "",
    subject: "",
    qualification: "",
    experience: "",
};

const TeacherRegister = () => {
    const [form, setForm] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (!/^[0-9]{10}$/.test(form.phone)) {
            setError("Phone number must contain exactly 10 digits.");
            return;
        }

        if (form.password.length < 6) {
            setError("Password must contain at least 6 characters.");
            return;
        }

        // Experience validation
        const experience = Number(form.experience);

        if (
            form.experience.trim() === "" ||
            !Number.isInteger(experience) ||
            experience < 0 ||
            experience > 50
        ) {
            setError("Experience must be a whole number between 0 and 50.");
            return;
        }

        setLoading(true);

        try {
            const result = await registerTeacher({
                ...form,
                name: form.name.trim(),
                email: form.email.trim().toLowerCase(),
                subject: form.subject.trim(),
                qualification: form.qualification.trim(),
            });

            setMessage(
                result.message || "Teacher registered successfully."
            );

            setForm(initialForm);
            setShowPassword(false);
        } catch (error) {
            setError(error.message || "Registration failed.");
        } finally {
            setLoading(false);
        }
    };

    const fields = [
        { name: "name", label: "Full Name:", type: "text" },
        { name: "email", label: "Email Address:", type: "email" },
        { name: "phone", label: "Phone Number:", type: "tel" },
        {
            name: "subject",
            label: "Specialist:",
            type: "text",
            options: [
                "Python Full Stack",
                "C Full Stack",
                "C++ Full Stack",
                "Java Full Stack",
                "C# and DotNet",
                "Kotlin and Android",
                "MERN Full Stack",
                "MEAN Full Stack",
                "WordPress",
                "PHP & Laravel",
                "Gen AI",
                "Git And GitHub",
                "Digital Marketing",
                "Flutter",
            ]
        },
        {
            name: "qualification",
            label: "Qualification:",
            type: "text",
            options: [
                "B.Tech",
                "M.Tech",
                "B.Sc",
                "M.Sc",
                "BCA",
                "MCA",
                "BBA",
                "MBA",
                "B.Com",
                "M.Com",
                "Ph.D.",
                "B.A",
                "M.A",
                "B.Ed",
                "Other",
            ]
        },
        {
            name: "experience",
            label: "Experience (In years):",
            type: "number",
        },
    ];

    return (
        <>
            <AdminNavbar />
            <div className="flex h-[calc(100vh-126px)] bg-gray-100 overflow-hidden">
                <Sidebar />
                <main className="min-w-0 flex-1 p-4 md:p-8 overflow-x-hidden overflow-y-auto">
                    <div className="mx-auto rounded-xl bg-white p-6 shadow-lg md:p-8">
                        <h1 className="mb-2 text-2xl font-bold text-gray-800">
                            Register Teacher
                        </h1>

                        <p className="mb-6 text-sm text-gray-500">
                            Enter the details to register a new teacher.
                        </p>

                        {message && (
                            <p className="mb-4 rounded-lg bg-green-100 p-3 text-green-700">
                                {message}
                            </p>
                        )}

                        {error && (
                            <p className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">
                                {error}
                            </p>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 gap-5 md:grid-cols-2"
                        >
                            {fields.map((field) => (
                                <div key={field.name}>
                                    <label
                                        htmlFor={field.name}
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        {field.label}
                                    </label>
                                    {field.name === "subject" || field.name === "qualification" ? (
                                        <select
                                            id={field.name}
                                            name={field.name}
                                            value={form[field.name]}
                                            onChange={handleChange}
                                            required
                                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        >
                                            <option value="">
                                                Select {field.label.replace(":", "")}
                                            </option>

                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            id={field.name}
                                            name={field.name}
                                            type={field.type}
                                            value={form[field.name]}
                                            onChange={handleChange}
                                            required
                                            maxLength={
                                                field.name === "phone" ? 10 : undefined
                                            }
                                            pattern={
                                                field.name === "phone"
                                                    ? "[0-9]{10}"
                                                    : undefined
                                            }
                                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                        />
                                    )}
                                </div>
                            ))}

                            <div className="md:col-span-2">
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Password:
                                </label>

                                <div className="flex gap-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        value={form.password}
                                        onChange={handleChange}
                                        minLength={6}
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                        className="rounded-lg border px-3 text-sm"
                                    >
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading
                                        ? "Registering..."
                                        : "Register Teacher"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setForm(initialForm);
                                        setMessage("");
                                        setError("");
                                        setShowPassword(false);
                                    }}
                                    className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50"
                                >
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default TeacherRegister;
