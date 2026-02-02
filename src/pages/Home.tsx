import {useEffect, useRef} from 'react';
import gsap from "gsap";
import {cvData} from '../data/CVdata';
import ProfileCard from "../components/ui/ProfileBlock/ProfileBlock.tsx";
import SkillFile from "../components/ui/SkillMain.tsx";
import ButtonLink from "../components/ui/buttonLink.tsx";
import ReviewSection from "../components/ui/ReviewSection.tsx";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TextComponent from "../components/ui/TextComponent";
import ContactComponent from "../components/ui/ContactComponent";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
    const profileRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const skills = useRef<HTMLElement[]>([]);
    const text = useRef<HTMLDivElement>(null)
    const aboutRef = useRef<HTMLDivElement>(null)
    const skillsRef = <T extends HTMLElement>(el: T | null) => {
        if (!el) {
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
                .fromTo(contactRef.current, {x: -100, opacity: 0},
                    {x: 0, opacity: 1, duration: 0.8})
                .fromTo(text.current, {x: 300, opacity: 0}, {x: 0, opacity: 1, duration: 0.6})
                .fromTo(skills.current, {x: 300, opacity: 0}, {x: 0, opacity: 1, stagger: 0.2, duration: 0.6})
                .fromTo(aboutRef.current, {x: 300, opacity: 0}, {x: 0, opacity: 1, duration: 0.6})
        }
    }, []);


    return (
        <section className="z-10 flex justify-center items-center max-w-[1500px] w-full">
            <div className="flex flex-col gap-[40px] laptop:gap-0 laptop:flex-row justify-center laptop:items-start items-center text-center wide:gap-[80px] laptop:gap-[40px]">
                <div className=' laptop:sticky flex laptop:top-[110px] desktop:max-w-[400px] laptop:max-w-[400px] mobile:max-w-[500px] max-w-[380px] w-full flex flex-col gap-[40px]'>
                    <ProfileCard
                        ref={profileRef}
                        img={cvData.img}
                        name={cvData.name}
                        role="Junior Front-End Developer"
                    />
                    <ContactComponent telegramId={cvData.socials.telegram} githubId={cvData.socials.github} ref={contactRef}/>
                </div>
                <div className='flex flex-col gap-[40px] self-start w-full desktop:max-w-[920px] laptop:max-w-[700px] tablet:max-w-[700px] mobile:max-w-[500px] max-w-[380px]'>
                    <TextComponent name={'How I am?'} ref={text}>
                        <p>
                            I am a student currently studying front-end development and improving my skills in
                            modern
                            web
                            technologies. I work with HTML, CSS, JavaScript, TypeScript, and Angular, and I
                            focus on
                            building responsive, user-friendly interfaces. I enjoy turning ideas into clean and
                            functional web applications and constantly aim to write better and more structured
                            code.
                        </p>
                        <br/>
                        <p>
                            In my free time, I practice coding, create personal projects, and explore UI/UX
                            design
                            and
                            animations. I like experimenting with visual effects, improving layouts, and
                            learning
                            new
                            tools that help make websites more dynamic and engaging. Programming is not only my
                            field of
                            study but also my main hobby and long-term goal.
                        </p>
                    </TextComponent>

                    <div className='flex flex-col gap-[20px]'>
                        <h3 className='laptop:text-left text-3xl text-center'>Skills</h3>
                        <div>
                            <div className='flex laptop:flex-row flex-col items-center justify-center gap-[20px]'>
                                {cvData.skillsPreview.map((skill, index) => (
                                    index < 3 ? (
                                        <SkillFile
                                            key={skill.id}
                                            id={skill.id}
                                            text={skill.text}
                                            img={skill.img}
                                            title={skill.title}
                                            ref={skillsRef}
                                        />
                                    ) : null
                                ))}
                            </div>
                        </div>
                        <ButtonLink innerText={"See Skills"} url={'/skills'} ref={skillsRef}/>

                    </div>
                    <TextComponent name={'About my lifestyle'} ref={aboutRef}>
                        <p>
                            I am from Zaporizhzhia, Ukraine. I am 17 years old and was born on January 30, 2009. I study
                            at Gymnasium No. 11, where I continue my general education. I am very interested in
                            computers, modern technologies, and how digital products are created.
                        </p>
                        <br/>
                        <p>
                            In my free time, I
                            like learning programming, exploring web development, and improving my technical skills.
                            Technology is not only my interest but also something I plan to connect with my future
                            career.
                        </p>
                    </TextComponent>
                    <div id='review'>
                        <ReviewSection/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home