import s from '../../pages/Home.module.css'

type ProjectCompProps = {
    img: string;
    name: string;
    description: string;
    githubUrl: string;
    ref: React.Ref<HTMLAnchorElement>;
}
const ProjectComp = ({img, name, description, githubUrl, ref}: ProjectCompProps) => {
    return (
        <a
            href={githubUrl}
            target="_blank"
            className={`relative group w-full tablet:max-w-[400px] desktop:max-w-full min-h-[300px] max-h-[450px] max-w-[380px] ${s.glass} rounded-2xl p-[30px] flex flex-col gap-[20px]`}
            ref={ref}
        >
            <img className="w-full rounded-xl tablet:min-h-[230px] min-h-[200px] object-fit" src={img} alt=""/>

            <span className="tablet:text-3xl text-xl text-center font-bold">{name}</span>
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