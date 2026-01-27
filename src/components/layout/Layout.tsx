import Navbar from "../ui/Navbar.tsx";
import {type ReactNode} from "react";
import {useRef , useEffect} from "react";
import gsap from "gsap";
import { cvData } from '../../data/CVdata';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../ui/Footer";
gsap.registerPlugin(ScrollTrigger)
const Layout = ({children}: {children: ReactNode}) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        gsap.to(videoRef.current, {
            scale: 3,
            ease: "none",
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom top",
                scrub: true,}
            })
    }, []);
    return (
        <div className="relative min-h-screen text-white overflow-hidden flex flex-col gap-[60px]">
            <div className="absolute opacity-50 bg-black top-0 left-0 w-full h-full -z-9"></div>
            <video ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="fixed top-0 left-0 w-full h-full object-cover -z-10 "
            ><source src={cvData.video} type="video/mp4" />
            </video>
            <Navbar />
            <main className="w-full flex flex-col items-center justify-center h-full">
                {children}

            </main>
            <Footer />
        </div>
    )
}
export default Layout