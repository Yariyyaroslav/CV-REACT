import { useEffect, useRef } from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { cvData } from '../../data/CVdata';
import s from './Footer.module.css'
gsap.registerPlugin(ScrollTrigger)
import type { RootState } from '../../app/store/store.ts';
import {useSelector} from "react-redux";
const Footer = () => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    const linksRef = useRef<HTMLAnchorElement[]>([]);
    const addlinks =  (el: HTMLAnchorElement)=> {
        if(el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    }
    useEffect(() => {
        gsap.fromTo(
            linksRef.current,
            {
                y: 40,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "footer",
                    start: "top 90%",
                    once: true,
                },
            }
        );
    }, []);

    return (
        <footer className={`flex flex-col items-center p-[40px] gap-[25px] ${darkMode ? s.glass : s.whiteGlass}`}>
            <h3 className=" font-extrabold text-[35px] w-full text-left">CV {cvData.name}</h3>
            <div>
                <div className='flex flex-row gap-[20px] text-[20px] items-center'>
                    <Link to='/' ref={addlinks}>Home</Link>
                    <Link to='/skills' ref={addlinks}>Skills</Link>
                    <Link to='/projects' ref={addlinks}>Projects</Link>
                    <Link to='/Expirience' ref={addlinks}>Experience</Link>
                </div>
            </div>
        </footer>
    )

}
export default Footer;