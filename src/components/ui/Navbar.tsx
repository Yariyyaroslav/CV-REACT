import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { cvData } from '../../data/CVdata';
import s from './Navbar.module.css'
import gsap from "gsap";
import MobileMenuPortal from "./MobileMenuPortal";
import arrow from '../../assets/PikPng.com_left-arrow-png_2855074.png'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLHeadingElement>(null);
    const linksRef = useRef<HTMLAnchorElement[]>([]);
    const addToRefs = (el: HTMLAnchorElement) => {
        if (el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    };
    useEffect(() => {
        if (headerRef.current && linksRef) {
            const tl = gsap.timeline();
            tl.fromTo(headerRef.current, {x: -200, opacity: 0}, {x: 0, opacity: 1, duration: 1, ease: "power3.out"})
                .fromTo(linksRef.current,
                { y: -20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        }
    },
   []);
    useEffect(() => {
        gsap.fromTo(mobileMenuRef.current, {x: 200, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, ease: "power3.out"})
    }, [menuOpen]);
    const linkClass = ({ isActive }: { isActive : boolean }) => isActive ? "text-blue-400 font-bold transition-colors" : "hover:text-sky-300 transition-colors";
    return (
        <>
            <nav className={`text-[25px] px-[35px] py-[20px] ${s.glass} z-10`} id='mainNav' >
                <div className='flex items-center justify-between'>
                    <h1 className=" font-extrabold text-[35px]" ref={headerRef}>CV {cvData.name}</h1>
                    <div className="tablet:flex hidden items-center gap-[25px]">
                        <NavLink ref={addToRefs} to="/" className={linkClass}>Home</NavLink>
                        <NavLink ref={addToRefs} to="/skills" className={linkClass}>Skills</NavLink>
                        <NavLink ref={addToRefs} to="/projects" className={linkClass}>Projects</NavLink>
                        <NavLink ref={addToRefs} to="/expirience" className={linkClass}>Experience</NavLink>
                    </div>
                    <button className='tablet:hidden'>
                        <img className='w-[30px] h-[45px]' src={arrow} alt="menu" onClick={() => setMenuOpen(true)}/>
                    </button>
                </div>
            </nav>
            <MobileMenuPortal
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                ref={mobileMenuRef}
            />
        </>
    )
}
export default Navbar;