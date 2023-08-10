import ButtonDefault from "./buttons";
import { MainImg } from "./images";

export default function Hero() {
    return(
        <>
        <article className="bg-primary text-white grid gap-2 justify-center place-items-center md:grid-cols-2 p-8 md:p-12">
            <div className="md:order-last">
                <MainImg classes="h-48 w-48 md:h-96 md:w-96" />
            </div>
            <div className="md:self-start">
                <h1 className="text-6xl py-2 md:py-4 md:text-7xl">New Horizon of Content</h1>
                <h2 className="text-2xl py-2 md:py-4 md:text-4xl">Get the best content first, and get bonus content like behind the scenes!</h2>
                <div className="py-4 text-xl font-bold"><ButtonDefault text="Get Started" link="/browse"/></div>
            </div>
        </article>
        <svg viewBox="0 0 1728 200" fill="none" className="w-full h-auto">
        <path d="M0 200L72 188.97C144 178 288 155.939 432 147.758C576 139.576 720 145.273 864 158.364C1008 171.515 1152 192.121 1296 197.455C1440 202.848 1584 192.909 1656 188L1728 183.03V0H1656C1584 0 1440 0 1296 0C1152 0 1008 0 864 0C720 0 576 0 432 0C288 0 144 0 72 0H0V200Z" fill="#0085FF"/>
        </svg>
        </>
    )
}