import { Link } from "react-router-dom";
import {
    BookOpen,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    UserPlus,
    LogIn,
    LineChart,
    Sparkles,
} from "lucide-react";

export default function Home() {
    return (
        <div className="bg-[#cbd7ef] text-[#1B1B2F]">
            {/* ---------- HERO ---------- */}
            <section className="relative overflow-hidden">
                {/* faint notebook rules in the background */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(#2E4057 0px, #2E4057 1px, transparent 1px, transparent 40px)",
                    }}
                />
                <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 relative">
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-14 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#6B7B5E] bg-[#EDEFE4] border border-[#D9DEC7] px-3 py-1.5 rounded-full">
                                <Sparkles size={14} />
                                Roll No. 2026 &mdash; New Session Open
                            </span>

                            <h1 className="mt-6 font-serif text-5xl sm:text-6xl leading-[1.05] tracking-tight">
                                Your whole
                                <br />
                                academic year,
                                <br />
                                <span className="relative inline-block">
                                    in one notebook.
                                    <svg
                                        className="absolute left-0 -bottom-2 w-full"
                                        height="14"
                                        viewBox="0 0 300 14"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M2 10 C 80 2, 220 2, 298 8"
                                            stroke="#155DFC"
                                            strokeWidth="7"
                                            fill="none"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-[#4A4A5E] max-w-md leading-relaxed">
                                Register once, log in anytime, and watch your grades,
                                attendance and progress collect themselves &mdash; no more
                                digging through spreadsheets or WhatsApp forwards.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <Link
                                    to="/register"
                                    className="group inline-flex items-center gap-2 bg-[#1B1B2F] text-white px-6 py-3.5 rounded-xl font-medium hover:bg-[#2E4057] transition-all duration-300 shadow-[0_6px_0_0_#0A0A14] hover:shadow-[0_4px_0_0_#0A0A14] hover:translate-y-[2px]"
                                >
                                    Create your account
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Link>
                                <Link
                                    to="/login"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-[#1B1B2F] border-2 border-[#1B1B2F]/15 hover:border-[#1B1B2F]/40 transition-colors"
                                >
                                    I already have one
                                </Link>
                            </div>
                        </div>

                        {/* "report card" signature element */}
                        <div className="relative mx-auto md:mx-0 w-full max-w-sm">
                            <div className="absolute -top-4 -left-4 w-full h-full bg-[#155DFC]/25 rounded-2xl rotate-3" />
                            <div className="relative bg-white rounded-2xl border border-[#1B1B2F]/10 shadow-xl p-6 -rotate-1">
                                <div className="flex items-center justify-between border-b border-dashed border-[#1B1B2F]/15 pb-3">
                                    <span className="font-mono text-xs uppercase tracking-widest text-[#8A8A9E]">
                                        Progress Report
                                    </span>
                                    <span className="font-mono text-xs text-[#6B9080]">
                                        Live
                                    </span>
                                </div>
                                <ul className="mt-4 space-y-4">
                                    {[
                                        { label: "Attendance", value: 92, color: "#6B9080" },
                                        { label: "Assignments done", value: 78, color: "#155DFC" },
                                        { label: "Overall grade", value: 88, color: "#2E4057" },
                                    ].map((row) => (
                                        <li key={row.label}>
                                            <div className="flex justify-between text-sm mb-1.5">
                                                <span className="text-[#4A4A5E]">{row.label}</span>
                                                <span className="font-mono">{row.value}%</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-[#F0EEE6] overflow-hidden">
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{
                                                        width: `${row.value}%`,
                                                        backgroundColor: row.color,
                                                    }}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- STATS STRIP ---------- */}
            <section className="border-y border-[#1B1B2F]/10 bg-[#1B1B2F] text-white">
                <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {[
                        ["4,200+", "Students onboard"],
                        ["96%", "On-time submissions"],
                        ["120+", "Courses tracked"],
                        ["24/7", "Dashboard access"],
                    ].map(([value, label]) => (
                        <div key={label}>
                            <p className="font-serif text-3xl text-[#155DFC]">{value}</p>
                            <p className="text-sm text-white/60 mt-1">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- HOW IT WORKS ---------- */}
            <section className="max-w-6xl mx-auto px-6 py-24">
                <div className="max-w-xl">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#155DFC]">
                        Three steps
                    </span>
                    <h2 className="font-serif text-4xl mt-3">
                        Get set up before your next class
                    </h2>
                </div>

                <div className="mt-14 grid md:grid-cols-3 gap-6">
                    {[
                        {
                            n: "01",
                            icon: UserPlus,
                            title: "Register",
                            body: "Create your student profile in under a minute &mdash; name, roll number, course. That's it.",
                            to: "/register",
                            cta: "Register now",
                        },
                        {
                            n: "02",
                            icon: LogIn,
                            title: "Log in",
                            body: "Come back anytime and pick up exactly where you left off, from any device.",
                            to: "/login",
                            cta: "Go to login",
                        },
                        {
                            n: "03",
                            icon: LineChart,
                            title: "Track your data",
                            body: "See attendance, grades and assignments update live, laid out like a real report card.",
                            to: "/data",
                            cta: "View dashboard",
                        },
                    ].map(({ n, icon: Icon, title, body, to, cta }) => (
                        <Link
                            to={to}
                            key={n}
                            className="group relative bg-white rounded-2xl border border-[#1B1B2F]/10 p-7 hover:border-[#1B1B2F]/25 hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="font-mono text-xs text-[#C9C9D4]">{n}</span>
                            <div className="mt-4 w-11 h-11 rounded-xl bg-[#EDEFE4] flex items-center justify-center text-[#6B7B5E]">
                                <Icon size={20} />
                            </div>
                            <h3 className="mt-5 font-serif text-xl">{title}</h3>
                            <p className="mt-2 text-sm text-[#4A4A5E] leading-relaxed">
                                {body}
                            </p>
                            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#2E4057]">
                                {cta}
                                <ArrowRight
                                    size={15}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ---------- WHY IT FEELS DIFFERENT ---------- */}
            <section className="bg-[#EDEFE4] border-y border-[#D9DEC7]">
                <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
                    {[
                        {
                            icon: BookOpen,
                            title: "Built around real coursework",
                            body: "Every field maps to something on your actual timetable, not a generic form.",
                        },
                        {
                            icon: TrendingUp,
                            title: "Progress you can see",
                            body: "Trends update as new data comes in, so you notice a slip before report day.",
                        },
                        {
                            icon: ShieldCheck,
                            title: "Your data, kept yours",
                            body: "Secure login, and only you (and your institution) can see your records.",
                        },
                    ].map(({ icon: Icon, title, body }) => (
                        <div key={title}>
                            <Icon size={22} className="text-[#6B7B5E]" />
                            <h3 className="mt-4 font-serif text-lg">{title}</h3>
                            <p className="mt-2 text-sm text-[#4A4A5E] leading-relaxed">
                                {body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- FINAL CTA ---------- */}
            <section className="max-w-6xl mx-auto px-6 py-24 text-center">
                <h2 className="font-serif text-4xl sm:text-5xl max-w-2xl mx-auto leading-tight">
                    Open your dashboard before the next bell rings.
                </h2>
                <div className="mt-8 flex justify-center gap-4 flex-wrap">
                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 bg-[#1B1B2F] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#2E4057] transition-colors"
                    >
                        Get started free
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}