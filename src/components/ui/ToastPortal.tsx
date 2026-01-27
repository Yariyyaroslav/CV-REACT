import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import gsap from "gsap";
import {Link} from "react-router-dom";

const Toast = () => {
    const toastRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!toastRef.current) return;

            gsap.fromTo(
                toastRef.current,
                {
                    y: 40,
                    opacity: 0,
                    pointerEvents: "none",
                },
                {
                    y: 0,
                    opacity: 1,
                    pointerEvents: "auto",
                    duration: 0.6,
                    ease: "power3.out",
                }
            );
        }, 12000);
        return () => clearTimeout(timer);
    }, []);

    const closeToast = () => {
        if (!toastRef.current) return;

        gsap.to(toastRef.current, {
            y: 40,
            opacity: 0,
            duration: 0.4,
            ease: "power3.in",
            onComplete: () => {
                toastRef.current?.remove();
            },
        });
    };

    return createPortal(
        <div
            ref={toastRef}
            className="
        fixed bottom-[30px] right-[30px]
        z-[9999]
        flex items-center gap-[12px]
        bg-indigo-950 text-white
        px-[18px] py-[14px]
        rounded-xl
        opacity-0
        pointer-events-none
      "
        >
            <Link to={'/#review'} className="text-lg">
                Write your review!
                Click Here!
            </Link>

            <button
                onClick={closeToast}
                className="text-white/60 hover:text-white text-lg leading-none"
            >
                ✕
            </button>
        </div>,
        document.getElementById("modalRoot")!
    );
};

export default Toast;
