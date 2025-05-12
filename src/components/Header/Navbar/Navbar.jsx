import { navLinks } from "../../../constant/index.js";
import { useState } from "react";

function Navbar() {
    const [status, setStatus] = useState(false);
    const handleClick = () => {
        setStatus(!status);
    };

    return (
        <>
            <nav className="flex items-center justify-between p-4 relative">
                <a className="ml-5">
                    <img
                        src="/src/assets/image/header-logo.svg"
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>

                {/* Menu for desktop */}
                <ul className="flex-1 flex justify-center gap-12 max-lg:hidden">
                    {navLinks.map((item, index) => (
                        <li key={index} className="font-mono">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                {/* Hamburger button */}
                <div className="hidden max-lg:block mr-5 z-50 ">
                    <button onClick={handleClick} className="cursor-pointer">
                        <img
                            src="/src/assets/icons/hamburger.svg"
                            alt="hamburger"
                            height={25}
                            width={25}
                        />
                    </button>
                </div>

                {/* Dropdown menu when hamburger is clicked */}
                {status && (
                    <ul className="absolute top-full right-0 bg-white shadow-lg rounded-md p-4 flex flex-col gap-4  lg:hidden mr-5 mt-2 z-40">

                    {navLinks.map((item, index) => (
                            <li key={index} className="font-mono">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    );
}

export default Navbar;
