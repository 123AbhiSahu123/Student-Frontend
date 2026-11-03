
import { User, Mail, Phone, BookOpen, GraduationCap, Briefcase } from "lucide-react";

const TeacherTable = ({ teachers = [] }) => {
    if (teachers.length === 0) {
        return (
            <div className="rounded-xl bg-white p-8 text-center shadow">
                <User size={40} className="mx-auto mb-3 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-700">
                    No Teachers Found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    Registered teachers will appear here.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl bg-white shadow">
            <table className="w-full min-w-[900px] text-left">
                <thead className="bg-gray-100 text-sm text-gray-600">
                    <tr>
                        <th className="px-5 py-4">ID</th>
                        <th className="px-5 py-4">Teacher</th>
                        <th className="px-5 py-4">Email</th>
                        <th className="px-5 py-4">Contact</th>
                        <th className="px-5 py-4">Specialists</th>
                        <th className="px-5 py-4">Qualification</th>
                        <th className="px-5 py-4">Experience</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                    {teachers.map((teacher) => (
                        <tr
                            key={teacher.id}
                            className="transition hover:bg-gray-50"
                        >
                            <td className="px-5 py-4 font-medium text-gray-600">
                                {teacher.id}
                            </td>

                            <td className="px-5 py-4">
                                <div className="font-semibold text-gray-800">
                                    {teacher.name}
                                </div>
                            </td>

                            <td className="px-5 py-4">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Mail size={15} />
                                    {teacher.email}
                                </div>
                            </td>

                            <td className="px-5 py-4">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Phone size={15} />
                                    {teacher.phone}
                                </div>
                            </td>

                            <td className="px-5 py-4 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <BookOpen size={16} />
                                    {teacher.subject}
                                </div>
                            </td>

                            <td className="px-5 py-4 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <GraduationCap size={16} />
                                    {teacher.qualification}
                                </div>
                            </td>

                            <td className="px-5 py-4 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <Briefcase size={16} />
                                    {teacher.experience}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherTable;
