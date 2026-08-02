import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
            <h2 className="text-xl font-bold mb-8">
                Menu
            </h2>
            <ul className="space-y-5">
                <li>
                    <Link
                    to="/admin/dashboard"
                    className="hover:text-yellow-300">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/admin/dashboard"
                    className="hover:text-yellow-300">
                        Students
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Sidebar; 