import { statistics } from "../../../constant/index.js";
import { bigShoe1 } from "../../../assets/image/index.js";

function Hero() {
    return (
        <>
            <section
                id="home"
                className="w-full border-2 border-red-500 flex flex-col xl:flex-row items-center justify-between min-h-screen gap-10 max-w-[1400px] mx-auto px-4 py-8"
            >
                {/* Left content */}
                <div className="xl:w-2/5 flex flex-col justify-center w-full pt-20">
                    <p className="text-[#c6a7af] text-xl font-mono">Our Summer Collections</p>
                    <h1 className="mt-10 text-8xl font-semibold max-xl:text-[72px] leading-tight">
                        <span className="xl:bg-white xl:whitespace-nowrap">The New Arrival</span> <br />
                        <span className="text-[#ea555c]">Nike</span> <span>Shoes</span>
                    </h1>
                    <p className="font-mono text-slate-600 mt-3 text-lg max-xl:whitespace-pre-line">
                        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                    </p>

                    <div className="mt-10">
                        <button className="flex justify-center items-center px-5 py-3 border font-mono text-lg leading-none text-white bg-orange-600 border-red-300 rounded-full cursor-pointer">
                            Click me
                            <img
                                className="ml-2 rounded-full w-5 h-5"
                                src="/src/assets/icons/arrow-right.svg"
                                alt="arrow-right-icon"
                            />
                        </button>
                    </div>

                    <div className="flex justify-start items-start gap-16 mt-10 w-full">
                        {statistics.map((item, index) => (
                            <div key={index} className="text-3xl font-bold font-mono">
                                <p>{item.value}</p>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right image */}
                <div className="flex justify-center items-center w-full ">
                    <img
                        src={bigShoe1}
                        alt="Shoe Collection"
                        className="object-contain w-full max-w-[500px] h-auto xl:h-[500px]"
                    />
                </div>

            </section>
        </>
    );
}

export default Hero;
