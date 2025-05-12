import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
// absolute
function Header() {
    return (
        <header

        >


            <div className="padding-x py-8 z-10 w-full">
                <Navbar/>
            </div>

            <div>
                <Hero/>
            </div>
        </header>
    )
}

export default Header