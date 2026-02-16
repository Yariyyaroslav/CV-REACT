import { createPortal } from "react-dom";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";
type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    ref: React.Ref<HTMLElement>
};
import type { RootState } from '../../app/store/store.ts';
import {useSelector} from "react-redux";
const MobileMenuPortal = ({ isOpen, onClose, ref}: MobileMenuProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
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
          ${darkMode ? s.glass : s.whiteGlass}
          p-[30px]
          flex flex-col gap-[30px]
          text-white
          text-xl
          border-t-[4px] border-solid border-sky-300 
          ${darkMode ? s.glass : s.whiteGlass}`}
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