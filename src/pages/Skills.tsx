import SkillsPageComponent from "../components/ui/SKillsPageComponent.tsx";
import {cvData} from "../data/CVdata.ts";
import {useEffect, useRef} from "react";
import gsap from "gsap";
const Skills = () => {
    const Skills = useRef<HTMLDivElement[]>([])
    const SkillRef = (el: HTMLDivElement) => {
        if (!el) return;
        if (!Skills.current.includes(el)){
            Skills.current.push(el)
        }
    };
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
                Skills.current,
                { x: -600, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.3"
            );
    },[])
    return (
        <section className='max-w-[1200px] flex flex-col justify-center items-center w-full gap-[50px]'>
            <h1 className='text-3xl font-medium' ref={headref}>Skills</h1>
            <div className='flex flex-col gap-[20px]'>
                {cvData.skillsPreview.map((skill) => (
                    <SkillsPageComponent key={skill.id} description={skill.text} icon={skill.img}
                                         title={skill.title} level={skill.level} ref={SkillRef}/>
                ))}
            </div>
        </section>
    );
}
export default Skills;