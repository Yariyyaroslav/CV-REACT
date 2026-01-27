import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

function ScrollHash() {
    const {hash, pathname} = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!hash) return;
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
            setTimeout(()=>{
                element.scrollIntoView({behavior: "smooth"});
                navigate(pathname, { replace: true });
            }, 100)
        }
    }, [hash]);
    return null;
}
export default ScrollHash;