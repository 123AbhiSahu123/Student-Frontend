import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import {
    Users,
    UserCheck,
    BookOpen,
    ClipboardCheck,
    TrendingUp,
    TrendingDown,
    GraduationCap,
    Clock3,
    Award,
} from "lucide-react";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";

// --------------------
// Dummy dashboard data
// Replace these values with API/database data
// --------------------

const performanceData = [
    { month: "Jan", marks: 62 },
    { month: "Feb", marks: 68 },
    { month: "Mar", marks: 65 },
    { month: "Apr", marks: 74 },
    { month: "May", marks: 78 },
    { month: "Jun", marks: 73 },
    { month: "Jul", marks: 82 },
    { month: "Aug", marks: 85 },
    { month: "Sep", marks: 81 },
    { month: "Oct", marks: 88 },
    { month: "Nov", marks: 91 },
    { month: "Dec", marks: 94 },
];

const courseData = [
    {
        name: "Computer Science",
        value: 35,
        color: "#10b981",
    },
    {
        name: "Mathematics",
        value: 28,
        color: "#06b6d4",
    },
    {
        name: "English",
        value: 22,
        color: "#3b82f6",
    },
    {
        name: "Other",
        value: 15,
        color: "#a855f7",
    },
];

// --------------------
// Stat Card
// --------------------

function StatCard({
    title,
    value,
    percentage,
    positive,
    icon: Icon,
    iconColor,
}) {
    return (
        <div
            className="
        relative overflow-hidden
        rounded-xl
        border border-white/10
        bg-[#151515]
        px-4 py-4
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:shadow-lg hover:shadow-black/30
      "
        >
            {/* Icon */}
            <div
                className={`absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg ${iconColor}`}
            >
                <Icon size={17} />
            </div>

            {/* Title */}
            <p className="text-[10px] font-medium text-gray-400">
                {title}
            </p>

            {/* Value */}
            <h2 className="mt-1 text-xl font-bold tracking-tight text-white">
                {value}
            </h2>

            {/* Percentage */}
            <div
                className={`mt-2 flex items-center gap-1 text-[11px] font-medium ${positive ? "text-emerald-400" : "text-red-400"
                    }`}
            >
                {positive ? (
                    <TrendingUp size={12} />
                ) : (
                    <TrendingDown size={12} />
                )}

                <span>{percentage}</span>
            </div>

            {/* Bottom glow */}
            <div
                className={`absolute -bottom-8 left-1/2 h-12 w-32 -translate-x-1/2 rounded-full blur-2xl ${positive ? "bg-emerald-500/10" : "bg-red-500/10"
                    }`}
            />
        </div>
    );
}


// --------------------
// Chart Tooltip
// --------------------

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload || !payload.length) return null;

    return (
        <div className="rounded-lg border border-white/10 bg-[#1c1c1c] px-3 py-2 shadow-xl">
            <p className="text-xs text-gray-400">{label}</p>

            <p className="mt-1 text-sm font-semibold text-white">
                {payload[0].value}%
            </p>
        </div>
    );
}

// --------------------
// Progress Component
// --------------------

function ProgressItem({
    title,
    value,
    target,
    percentage,
    icon: Icon,
    progressColor,
}) {
    return (
        <div>

            <div className="mb-2 flex items-center justify-between">

                <div className="flex items-center gap-2">

                    <Icon
                        size={13}
                        className="text-gray-400"
                    />

                    <span className="text-[10px] font-medium text-gray-300">
                        {title}
                    </span>

                </div>

                <span className="text-[9px] text-gray-500">
                    {percentage}%
                </span>

            </div>


            {/* Progress bar */}

            <div className="h-1.5 overflow-hidden rounded-full bg-[#292929]">

                <div
                    className={`h-full rounded-full ${progressColor} transition-all duration-700`}
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>


            <div className="mt-1 flex justify-between">

                <span className="text-[9px] text-gray-500">
                    {value}
                </span>

                <span className="text-[9px] text-gray-500">
                    {target}
                </span>

            </div>

        </div>
    );
}

// =====================================================
// ADMIN DASHBOARD
// =====================================================

const AdminDashboard = () => {

    const [students, setStudents] = useState([]);

    return (
        <>
            <div className="min-h-screen bg-[#090909] text-white">
                <AdminNavbar />
                <div className="flex">
                    <Sidebar />
                    <main className="flex-1 p-2 bg-gray-100 min-w-0">
                        <div className="px-4 py-5 sm:px-6 lg:px-8">
                            <div className="mb-5">
                                <h1 className="text-3xl text-black font-bold">
                                    Dashboard
                                </h1>
                                <p className="text-gray-500 mt-2">
                                    Welcome to Super Admin Dashboard
                                </p>
                            </div>



                            {/* =========================
                                TOP STAT CARDS
                            ========================= */}

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

                                <StatCard
                                    title="Total Students"
                                    value="1,248"
                                    percentage="+12.5%"
                                    positive={true}
                                    icon={Users}
                                    iconColor="bg-emerald-500/10 text-emerald-400"
                                />

                                <StatCard
                                    title="Active Students"
                                    value="982"
                                    percentage="+8.2%"
                                    positive={true}
                                    icon={UserCheck}
                                    iconColor="bg-cyan-500/10 text-cyan-400"
                                />

                                <StatCard
                                    title="Total Courses"
                                    value="24"
                                    percentage="-3.1%"
                                    positive={false}
                                    icon={BookOpen}
                                    iconColor="bg-blue-500/10 text-blue-400"
                                />

                                <StatCard
                                    title="Attendance"
                                    value="92.4%"
                                    percentage="+4.7%"
                                    positive={true}
                                    icon={ClipboardCheck}
                                    iconColor="bg-yellow-500/10 text-yellow-400"
                                />
                            </div>


                            {/* =========================
                                MAIN CONTENT
                            ========================= */}

                            <div className="mt-4 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,2fr)_380px]">

                                {/* =========================
                                    PERFORMANCE CHART
                                ========================= */}

                                <div className="min-h-[390px] rounded-xl border border-white/10 bg-[#1E2939] p-4" >

                                    {/* Header */}

                                    <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                                        <div>
                                            <h2 className="text-sm font-semibold text-white">
                                                Student Performance
                                            </h2>

                                            <p className="mt-1 text-[10px] text-gray-500">
                                                Monthly average academic performance
                                            </p>
                                        </div>


                                        {/* Filter buttons */}

                                        <div className="flex w-fit rounded-lg bg-[#202020] p-1">

                                            <button className="rounded-md px-3 py-1.5 text-[10px] text-gray-500 transition hover:text-white">
                                                Attendance
                                            </button>

                                            <button className="rounded-md bg-black px-3 py-1.5 text-[10px] font-medium text-white shadow">
                                                Performance
                                            </button>

                                            <button className="rounded-md px-3 py-1.5 text-[10px] text-gray-500 transition hover:text-white">
                                                Marks
                                            </button>

                                        </div>
                                    </div>


                                    {/* Chart */}

                                    <div className="mt-5 h-[300px] w-full">

                                        <ResponsiveContainer width="100%" height="100%">

                                            <AreaChart
                                                data={performanceData}
                                                margin={{
                                                    top: 10,
                                                    right: 5,
                                                    left: -20,
                                                    bottom: 0,
                                                }}
                                            >

                                                <defs>

                                                    <linearGradient
                                                        id="performanceGradient"
                                                        x1="0"
                                                        y1="0"
                                                        x2="0"
                                                        y2="1"
                                                    >

                                                        <stop
                                                            offset="0%"
                                                            stopColor="#06b6b4"
                                                            stopOpacity={0.25}
                                                        />

                                                        <stop
                                                            offset="100%"
                                                            stopColor="#06b6b4"
                                                            stopOpacity={0}
                                                        />

                                                    </linearGradient>

                                                </defs>


                                                <CartesianGrid
                                                    stroke="#242424"
                                                    strokeDasharray="2 4"
                                                    vertical={false}
                                                />

                                                <XAxis
                                                    dataKey="month"
                                                    tick={{
                                                        fill: "#777",
                                                        fontSize: 9,
                                                    }}
                                                    axisLine={false}
                                                    tickLine={false}
                                                />

                                                <YAxis
                                                    domain={[0, 100]}
                                                    tick={{
                                                        fill: "#777",
                                                        fontSize: 9,
                                                    }}
                                                    axisLine={false}
                                                    tickLine={false}
                                                    tickFormatter={(value) => `${value}%`}
                                                />

                                                <Tooltip content={<CustomTooltip />} />

                                                <Area
                                                    type="monotone"
                                                    dataKey="marks"
                                                    stroke="#06b6b4"
                                                    strokeWidth={2}
                                                    fill="url(#performanceGradient)"
                                                    dot={false}
                                                    activeDot={{
                                                        r: 4,
                                                        fill: "#06b6b4",
                                                    }}
                                                />

                                            </AreaChart>

                                        </ResponsiveContainer>

                                    </div>
                                </div>


                                {/* =========================
                                    RIGHT SIDE
                                ========================= */}

                                <div className="flex flex-col gap-3">

                                    {/* Course Distribution */}

                                    <div className="rounded-xl border border-white/10 bg-[#151515] p-4" >

                                        <div>
                                            <h2 className="text-sm font-semibold">
                                                Course Distribution
                                            </h2>

                                            <p className="mt-1 text-[10px] text-gray-500">
                                                Student enrollment by course
                                            </p>
                                        </div>


                                        <div className="mt-3 flex items-center gap-3">

                                            {/* Donut */}

                                            <div className="relative h-[125px] w-[125px]">

                                                <ResponsiveContainer width="100%" height="100%">

                                                    <PieChart>

                                                        <Pie
                                                            data={courseData}
                                                            dataKey="value"
                                                            nameKey="name"
                                                            innerRadius={37}
                                                            outerRadius={57}
                                                            paddingAngle={2}
                                                            stroke="none"
                                                        >

                                                            {courseData.map((item, index) => (
                                                                <Cell
                                                                    key={`cell-${index}`}
                                                                    fill={item.color}
                                                                />
                                                            ))}

                                                        </Pie>

                                                    </PieChart>

                                                </ResponsiveContainer>


                                                {/* Center */}

                                                <div className="absolute inset-0 flex flex-col items-center justify-center">

                                                    <span className="text-lg font-bold">
                                                        1.2K
                                                    </span>

                                                    <span className="text-[8px] text-gray-500">
                                                        Students
                                                    </span>

                                                </div>

                                            </div>


                                            {/* Legend */}

                                            <div className="flex-1 space-y-3">

                                                {courseData.map((item) => (

                                                    <div
                                                        key={item.name}
                                                        className="flex items-center justify-between"
                                                    >

                                                        <div className="flex items-center gap-2">

                                                            <span
                                                                className="h-2 w-2 rounded-full"
                                                                style={{
                                                                    backgroundColor: item.color,
                                                                }}
                                                            />

                                                            <span className="text-[10px] text-gray-400">
                                                                {item.name}
                                                            </span>

                                                        </div>

                                                        <span className="text-[10px] font-semibold text-white">
                                                            {item.value}%
                                                        </span>

                                                    </div>

                                                ))}

                                            </div>

                                        </div>
                                    </div>


                                    {/* =========================
                                        ACADEMIC GOALS
                                    ========================= */}

                                    <div className="flex-1 rounded-xl border border-white/10 bg-[#151515] p-4" >

                                        <div>
                                            <h2 className="text-sm font-semibold">
                                                Academic Goals
                                            </h2>

                                            <p className="mt-1 text-[10px] text-gray-500">
                                                Track progress toward targets
                                            </p>
                                        </div>


                                        <div className="mt-4 space-y-4">

                                            {/* Attendance */}

                                            <ProgressItem
                                                title="Attendance"
                                                value="92%"
                                                target="Target: 95%"
                                                percentage={92}
                                                icon={Clock3}
                                                progressColor="bg-emerald-500"
                                            />


                                            {/* Assignments */}

                                            <ProgressItem
                                                title="Assignments"
                                                value="87%"
                                                target="Target: 100%"
                                                percentage={87}
                                                icon={ClipboardCheck}
                                                progressColor="bg-cyan-500"
                                            />


                                            {/* Average Marks */}

                                            <ProgressItem
                                                title="Average Marks"
                                                value="84%"
                                                target="Target: 90%"
                                                percentage={84}
                                                icon={Award}
                                                progressColor="bg-blue-500"
                                            />

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* =========================
                                QUICK INFO
                            ========================= */}

                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

                                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#151515] p-4">

                                    <div className="rounded-lg bg-purple-500/10 p-2 text-purple-400">
                                        <GraduationCap size={18} />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-gray-500">
                                            Average Grade
                                        </p>

                                        <p className="text-sm font-semibold">
                                            A-
                                        </p>
                                    </div>

                                </div>


                                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#151515] p-4">

                                    <div className="rounded-lg bg-orange-500/10 p-2 text-orange-400">
                                        <Award size={18} />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-gray-500">
                                            Top Performer
                                        </p>

                                        <p className="text-sm font-semibold">
                                            94.2%
                                        </p>
                                    </div>

                                </div>


                                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#151515] p-4">

                                    <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                                        <Clock3 size={18} />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-gray-500">
                                            Today's Attendance
                                        </p>

                                        <p className="text-sm font-semibold text-emerald-400">
                                            Present
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default AdminDashboard;