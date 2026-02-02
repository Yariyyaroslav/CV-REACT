import { createPortal } from "react-dom";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";
type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    ref: React.Ref<HTMLElement>
};
const MobileMenuPortal = ({ isOpen, onClose, ref}: MobileMenuProps) => {
    if (!isOpen) return null;

    return createPortal(
        <>
            <div
                className="fixed inset-0 bg-black/60 z-[9998]"
                onClick={onClose}
            />

            <aside
                className={`fixed top-0 right-0
          h-screen w-[80vw] max-w-[360px]
          z-[9999]
          ${s.glass}
          p-[30px]
          flex flex-col gap-[30px]
          text-white
          text-xl
          border-t-[4px] border-solid border-sky-300 
          ${s.glass}`}
                ref={ref}
            >

                <NavLink to="/" onClick={onClose}>Home</NavLink>
                <NavLink to="/skills" onClick={onClose}>Skills</NavLink>
                <NavLink to="/projects" onClick={onClose}>Projects</NavLink>
                <NavLink to="/expirience" onClick={onClose}>Experience</NavLink>
            </aside>
        </>,
        document.body
    );
};
export default MobileMenuPortal;