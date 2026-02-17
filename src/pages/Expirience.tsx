import {useEffect, useRef} from "react";
import gsap from "gsap";
import s from "./Home.module.css";
import type { RootState } from '../app/store/store.ts';
import {useSelector} from "react-redux";
const Expirience = () => {
    const expirience = useRef<HTMLDivElement>(null)
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const headref = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            headref.current,
            { opacity: 0, y: -100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            }
        )
            .fromTo(
                expirience.current,
                { y: 600, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.3"
            );
    },[])
    return (
        <section className='max-w-[1500px] flex flex-col justify-center items-center w-full gap-[50px]'>
            <h1 className='text-3xl font-medium' ref={headref}>Expirience</h1>
                <div
                    className={`relative group w-full min-h-[300px] ${darkMode ? s.glass : s.whiteGlass} rounded-2xl p-[30px] flex flex-col justify-center items-center gap-[20px] max-w-[380px]
    tablet:max-w-[400px] desktop:max-w-[600px] max-h-[450px]`}
                    ref={expirience}>
                    <span className="text-2xl text-center font-bold">No experience yet</span>
                </div>
        </section>
    )
}
export default Expirience;