import { PROGRAMS } from "../constants"

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='section-heading gradient-heading'>Programs</h1>
            <div>
                {PROGRAMS.map((program, index) => {
                    return <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4 flex  justify-center">
                            <img src={program.image}
                                height={250}
                                width={250}
                                className="mb-6 rounded"
                                alt={program.title}
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold ">{program.title}</h6>
                            <p className="mb-4 text-neutral-400">{program.description}</p>
                            
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects
