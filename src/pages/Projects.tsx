import ProjectComp from '../components/ui/ProjectCase.tsx'
import {cvData} from "../data/CVdata.ts";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import s from "./Home.module.css";
import type { RootState } from '../app/store/store.ts';
import {useSelector} from "react-redux";
const Projects = () => {
    const Projects = useRef<HTMLAnchorElement[]>([])
    const ProjectRef = (el: HTMLAnchorElement) => {
        if (!el) return;
        if (!Projects.current.includes(el)){
            Projects.current.push(el)
        }
    };
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
                Projects.current,
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
           <h1 className='text-3xl font-medium' ref={headref}>Projects</h1>
           <div className='tablet:grid desktop:grid-cols-3 laptop:grid-cols-2 flex flex-col wide:gap-[50px] laptop:gap-[30px] tablet:gap-[10px] gap-[30px]'>
               {cvData.projects && cvData.projects.map((project) => (
                   <ProjectComp name={project.title} key={project.id} img={project.img} description={project.description} githubUrl={project.githubUrl} ref={ProjectRef}/>
               ))}
               <a
                   href={cvData.socials.github}
                   target="_blank"
                   className={`relative group w-full min-h-[300px] ${darkMode ? s.glass : s.whiteGlass} rounded-2xl p-[30px] col-span-1
    col-start-2 flex flex-col justify-center items-center gap-[20px] max-w-[380px]
    tablet:max-w-[400px] desktop:max-w-full max-h-[450px]`}
                   ref={ProjectRef}
               >
                   <span className="text-2xl text-center font-bold">More works you can see on my GitHub page</span>
                   <div
                       className="

          absolute inset-0
          flex items-center justify-center
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          rounded-2xl
        "
                   >
        <span className="px-[24px] py-[12px] bg-white rounded-xl text-black text-xl">
          Go see on Github →
        </span>
                   </div>
               </a>
           </div>
       </section>
   )
}
export default Projects;