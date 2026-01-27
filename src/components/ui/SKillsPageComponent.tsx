import {type Ref, useEffect, useRef} from "react";
import gsap from "gsap";
import s from "../../pages/Home.module.css";

type SkillsPageComponentProps = {
    title: string;
    description: string;
    icon: string;
    level?: number;
    ref: Ref<HTMLDivElement>;
};

const SkillsPageComponent = ({title, description, icon, level = 0, ref}: SkillsPageComponentProps) => {

    const barRef = useRef<HTMLDivElement>(null);
    const color =
        level <= 30
            ? "#FF00007F"
            : level < 60
                ? "#FFD7367F"
                : "#51FF367F";
    useEffect(() => {
        gsap.fromTo(
            barRef.current,
            {scaleX: 0},
            {
                scaleX: level / 100,
                duration: 1.4,
                ease: "power4.out",
            }
        );
    }, [level]);

    return (
       <div className={`flex items-center justify-center  ${s.glass} p-[25px] rounded-2xl gap-[20px] max-h-[160px]`} ref={ref}>
               <img src={icon} className='w-[70px] max-h-[70px]' alt={title}/>
           <div className='flex flex-col w-full gap-[10px]'>
               <div className='flex flex-row items-center gap-[15px] justify-between'>
                   <h2 className="text-2xl text-left">{title}</h2>

                   <div className={`${s.progress}`}>
                       <div
                           ref={barRef}
                           className={`${s.progressFill}`}
                           style={{backgroundColor: color}}
                       />
                   </div>
               </div>
               <p>{description}</p>
           </div>
       </div>
    );
};

export default SkillsPageComponent;