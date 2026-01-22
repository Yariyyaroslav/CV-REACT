import s from "../../pages/Home.module.css";


type SkillFileProps = {
    id: number;
    title: string;
    img: string;
    text: string;
    ref: React.Ref<HTMLDivElement>
}

const SkillFile = ({id, title, img, text, ref}: SkillFileProps) => {
 return(
     <div
         key={id}
         className={`max-w-[300px] text-left flex flex-row gap-[10px] rounded-2xl p-[15px] ${s.glass}`} ref={ref}
     >
         <img
             src={img}
             className="max-w-[95px] h-[70px]"
             alt={title}
         />

         <div>
             <h4 className="font-bold">{title}</h4>
             <p className="line-clamp-2 text-[14px]">
                 {text}
             </p>
         </div>
     </div>
 )
}
export default SkillFile