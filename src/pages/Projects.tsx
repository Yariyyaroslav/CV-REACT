import ProjectComp from '../components/ui/ProjectCase.tsx'
import {cvData} from "../data/CVdata.ts";
const Projects = () => {
   return (
       <section className='max-w-[1500px] flex flex-col justify-center items-center w-full gap-[50px]'>
           <h1 className='text-3xl font-medium'>Projects</h1>
           <div className='grid grid-cols-3 gap-[50px]'>
               {cvData.projects && cvData.projects.map((project) => (
                   <ProjectComp name={project.title} key={project.id} img={project.img} description={project.description} githubUrl={project.githubUrl}/>
               ))}
           </div>
       </section>
   )
}
export default Projects;