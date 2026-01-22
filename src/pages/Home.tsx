import {useEffect, useRef} from 'react';
import gsap from "gsap";
import {cvData} from '../data/CVdata';
import s from './Home.module.css'
import ProfileCard from "../components/ui/ProfileBlock/ProfileBlock.tsx";
import SkillFile from "../components/ui/SkillMain.tsx";
import ButtonLink from "../components/ui/buttonLink.tsx";
import ReviewSection from "../components/ui/ReviewSection.tsx";
export default function Home() {
    const textRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const skills = useRef<HTMLElement[]>([]);
    const skillsRef = <T extends HTMLElement>(el: T | null) => {
        if(!el){
            return;
        }
        if (!skills.current.includes(el)) {
            skills.current.push(el);
        }
    };
    useEffect(() => {
        if (profileRef.current) {
            const tl = gsap.timeline();

            tl.fromTo(profileRef.current, {x: -100, opacity: 0},
                    {x: 0, opacity: 1, duration: 0.8})
                .fromTo(textRef.current, {x: 300, opacity: 0}, {x: 0, opacity: 1, duration: 0.6})
                .fromTo(skills.current, {x: 300, opacity: 0}, {x: 0, opacity: 1, stagger: 0.2, duration: 0.6})
        }
    }, []);

    return (
        <section className="z-10 flex flex-col justify-center items-center">
            <div className="flex flex-row items-center justify-evenly px-[100px] text-center">
                <div className='basis-[20%] max-w-[400px] shrink-0'>
                    <ProfileCard
                        ref={profileRef}
                        img={cvData.img}
                        name={cvData.name}
                        role="Junior Front-End Developer"
                    />
                </div>
                <div className='flex flex-col gap-[40px] self-start basis-[60%]'>
                    <div className='flex flex-col gap-[20px]'>
                        <h3 className='text-left text-3xl '>How I am?</h3>
                        <div
                            className={`text-white text-left text-[18px] leading-6.5 p-[20px] rounded-2xl self-start ${s.glass}`}
                            ref={textRef}>
                            <div>
                                <p>I am a student currently studying front-end development and improving my skills in modern
                                    web
                                    technologies. I work with HTML, CSS, JavaScript, TypeScript, and Angular, and I focus on
                                    building responsive, user-friendly interfaces. I enjoy turning ideas into clean and
                                    functional web applications and constantly aim to write better and more structured
                                    code.</p>
                                <br/>
                                <p>In my free time, I practice coding, create personal projects, and explore UI/UX design
                                    and
                                    animations. I like experimenting with visual effects, improving layouts, and learning
                                    new
                                    tools that help make websites more dynamic and engaging. Programming is not only my
                                    field of
                                    study but also my main hobby and long-term goal.</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[20px]'>
                        <h3 className='text-left text-3xl '>Skills</h3>
                        <div>
                            <div className='flex flex-row gap-[20px]'>
                                {cvData.skillsPreview.map((skill) => (
                                    <SkillFile key={skill.id} id={skill.id} text={skill.text} img={skill.img} title={skill.title} ref={skillsRef}/>
                                ))}
                            </div>
                        </div>
                        <ButtonLink innerText={"See Skills"} url={'/skills'} ref={skillsRef}/>

                    </div>
                    <ReviewSection />
                </div>
            </div>
        </section>
    )
}