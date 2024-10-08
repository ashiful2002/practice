import { PROJECTS } from "../constants"

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='section-heading gradient-heading'>Programs</h1>
            <div>
                {PROJECTS.map((project, index) => {
                    return <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4 flex  justify-center">
                            <img src={project.image}
                                height={250}
                                width={250}
                                className="mb-6 rounded"
                                alt={project.title}
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold ">{project.title}</h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {/* {
                                project.technologies.map((tech,index)=>{
                                    return <span key={index} className="mr-2 bg-neutral-900 
                                    py-2 px-1 text-sm font-medium text-purple-900
                                    rounded 
                                    ">
                                        {tech}
                                    </span>
                                })
                            } */}
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects
