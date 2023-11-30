import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import ThemeButton from "./ThemeButton";
import { useRouter } from "next/router";

const Navbar = () => {
    // useState hook to toggle the menu button
    const [isOpen, setIsOpen] = useState(false);

    // function to toggle the menu button
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const inactiveLink = "button hover:scale-105 transition hover:border hover:border-purple-400 rounded-full py-1 px-2 font-normal"
    const activeLink = inactiveLink + " border text-purple-500 border-purple-500 rounded-full py-1 px-2 font-normal hover:border-purple-500"
    const router = useRouter()
    const { pathname } = router

    return (
        <>
            <nav className="sticky bg-white top-0 w-full left-0 z-40 backdrop-blur-md bg-opacity-80 text-gray-600">
                <div className="container max-w-full px-4 md:px-8">
                    <div className="flex items-center justify-between py-1 h-14 sm:h-20">
                        <Link href="/" class="transform scale-75 ">
                            <div className="flex items-center">
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width={75}
                                    height={75}
                                    className="mr-12"
                                />
                            </div>
                        </Link>

                        {/* Menu button for mobile devices */}
                        <div className="md:hidden">
                            <button
                                className="mobile-menu-button transform hover:scale-105 focus:outline-none"
                                onClick={toggleMenu}
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Menu items */}
                        <ul className="md:flex md:items-center md:gap-8 mx-2 font-light md:ml-4 hidden">
                            <li className={pathname.includes('/events') ? activeLink : inactiveLink}>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className={pathname.includes('/mentors') ? activeLink : inactiveLink}>
                                <Link href="/sponsors">Sponsors</Link>
                            </li>
                            <li className={pathname.includes('/team') ? activeLink : inactiveLink}>
                                <Link href="/team">Meet Team</Link>
                            </li>
                            <li className={pathname.includes('/Contributors') ? activeLink : inactiveLink}>
                                <Link href="/prizes">Prizes</Link>
                            </li>
                            <li className={pathname.includes('/Contributors') ? activeLink : inactiveLink}>
                                <Link href="/schedule">Schedule</Link>
                            </li>

                        </ul>

                        {/* mobile menu items */}
                        <ul
                            className={`${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                                } absolute top-full text-left left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-white bg-opacity-90`}
                        >
                            <li className="border-y-2 pl-10 py-2">
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className="border-b-2 pl-10 py-2">
                                <Link href="/sponsors">Sponsors</Link>
                            </li>
                            <li className="border-b-2 pl-10 py-2">
                                <Link href="/team">Meet Team</Link>
                            </li>
                            <li className="border-b-2 pl-10 py-2">
                                <Link href="/prize">Prize</Link>
                            </li>
                            <li className="border-b-2 pl-10 py-2">
                                <Link href="/schedule">Schedule</Link>
                            </li>

                        </ul>
                        {/* <ThemeButton /> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
