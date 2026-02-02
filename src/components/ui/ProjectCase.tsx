import s from '../../pages/Home.module.css'

type ProjectCompProps = {
    img: string;
    name: string;
    description: string;
    githubUrl: string;
}
const ProjectComp = ({img, name, description, githubUrl}: ProjectCompProps) => {
    return (
        <a
            href={githubUrl}
            target="_blank"
            className={`relative group w-full min-h-[300px] ${s.glass} rounded-2xl p-[30px] flex flex-col gap-[20px]`}
        >
            <img className="w-full rounded-xl" src={img} alt=""/>

            <span className="text-3xl text-center font-bold">{name}</span>
            <p className="text-lg">{description}</p>


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
    )
}
export default ProjectComp;