import { useState } from "react";
import {
    RiDashboard3Line,
    RiEarthLine,
    RiArrowDownSLine,
    RiMessage3Line,
    RiCalendar2Line,
    RiSettings3Line,
    RiArrowUpSLine,
    RiLogoutCircleRLine,
    RiMenu3Fill,
    RiCloseLine,
    RiNotification3Line,
} from "react-icons/ri";

export default function App() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="bg-[#141517]">
            {/* SIDEBAR */}
            <div
                className={`bg-[#1E1F24] fixed lg:left-0 top-0 w-72 h-full p-8 flex flex-col justify-between transition-all ${
                    showMenu ? "left-0" : "-left-full"
                } overflow-y-auto`}
            >
                {/* Menu */}
                <div className="">
                    {/* logo */}
                    <div className="mb-8">
                        <h1 className="text-white uppercase font-bold text-2xl tracking-widest">JT Logo</h1>
                    </div>
                    {/* Nav */}
                    <nav>
                        <a
                            href="#"
                            className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
                        >
                            <RiDashboard3Line /> Analytic
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
                        >
                            <RiEarthLine />
                            <span className="flex-1 flex items-center justify-between">
                                Social media <RiArrowDownSLine />
                            </span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
                        >
                            <RiMessage3Line /> Message
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-4 text-gray-400 py-2 hover:text-gray-200 transition-colors"
                        >
                            <RiCalendar2Line /> Schedule
                        </a>
                        <a href="#" className="flex  gap-4 text-gray-200 py-2 flex-col ">
                            <span className="flex items-center gap-4">
                                <RiSettings3Line className="text-orange-500" />
                                <span className="flex-1">Settings</span>
                                <RiArrowUpSLine />
                            </span>
                            <nav className="border-l border-gray-600 flex flex-col ml-2">
                                <a
                                    href=""
                                    className="pl-8 py-2 text-gray-200 relative before:absolute before:-left-1 before:top-4 before:w-2 before:h-2 before:rounded-full before:bg-orange-500"
                                >
                                    Plan
                                </a>
                                <a
                                    href=""
                                    className="pl-8 py-2 text-gray-400 relative before:absolute before:-left-1 before:top-4 before:w-2 before:h-2 before:rounded-full before:bg-gray-400"
                                >
                                    Security
                                </a>
                            </nav>
                        </a>
                    </nav>
                </div>

                {/* logout */}
                <div>
                    <a href="#" className="text-gray-400 flex items-center gap-4 hover:text-gray-200 transition-colors">
                        <RiLogoutCircleRLine /> Logout
                    </a>
                </div>
            </div>
            {/* Btn menu movil */}
            <button
                className="lg:hidden fixed right-4 bottom-4 bg-[#1E1F24] text-orange-500 text-xl p-3 rounded-full"
                onClick={() => setShowMenu(!showMenu)}
            >
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
            {/* Content */}
            <main className="pl-72">
                {/* Header */}
                <header className="p-8 flex justify-end border-b border-gray-500">
                    <ul className="flex items-center gap-8">
                        <li>
                            <a
                                href="#"
                                className="relative text-white text-lg before:absolute before:w-[6px] before:h-[6px] before:top-0 before:right-[2px] before:bg-orange-500 before:rounded-full"
                            >
                                <RiNotification3Line className="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center text-white gap-2">
                                <img
                                    src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
                                    className="w-8 h-8 object-cover rounded-full ring-2 ring-gray-300"
                                />
                                <span>Ferra Alexandra</span>
                                <RiArrowDownSLine />
                            </a>
                        </li>
                    </ul>
                </header>
                {/* Main Content */}
                <div className="p-8">hola</div>
            </main>
        </div>
    );
}
