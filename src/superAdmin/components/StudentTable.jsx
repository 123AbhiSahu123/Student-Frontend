
const StudentTable = ({ students, 
    // deleteStudent 
}) => {

    return (

        <div className="bg-white rounded-lg shadow p-5 mt-8 overflow-x-auto">

            <h2 className="text-2xl font-bold mb-5">

                All Students

            </h2>

            <table className="w-full border">

                <thead className="bg-blue-600 text-white">

                    <tr>

                        <th className="p-3">Name</th>

                        <th>Email</th>

                        <th>Course</th>

                        <th>Phone</th>

                        <th>Age</th>

                        <th>Location</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr
                            key={student.id}
                            className="text-center border-b"
                        >

                            <td className="p-3">
                                {student.name}
                            </td>

                            <td>
                                {student.email}
                            </td>

                            <td>
                                {student.studentData?.course}
                            </td>

                            <td>
                                {student.studentData?.phone}
                            </td>

                            <td>
                                {student.studentData?.age}
                            </td>

                            <td>
                                {student.studentData?.location}
                            </td>

                            <td>

                                <button
                                    onClick={() => deleteStudent(student.id)}
                                    className="bg-red-500 text-white px-4 py-1 rounded"
                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

};

export default StudentTable;