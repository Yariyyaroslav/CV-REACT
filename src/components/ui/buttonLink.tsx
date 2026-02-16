import s from "../../pages/Home.module.css";
import arrow from "../../assets/arrow-right.svg";
import {Link} from "react-router-dom";
type ButtonLinkProps = {
    innerText: string,
    url: string,
    ref: React.Ref<HTMLAnchorElement>
}
import type { RootState } from '../../app/store/store.ts';
import {useSelector} from "react-redux";
const ButtonLink = ({innerText, url, ref}: ButtonLinkProps) => {
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);
    return (
        <Link
            to={url}
            className={`${darkMode ? s.glassButton : s.whiteGlassButton} max-w-fit px-[25px] py-[20px] rounded-2xl 
        flex items-center justify-center gap-[10px] text-[18px]`}
        ref={ref} >
            {innerText}
            <img src={arrow} alt="" />
        </Link>
    )
}
export default ButtonLink;