import { FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejsSmall } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className=' border-b border-neutral-800 pb-24'>
            <h1 className="my-20 text-center text-4xl">
                Technologies
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-2xl  border-4 border-neutral-400">
                    < FaReact className="text-7xl text-cyan-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400">
                    < RiTailwindCssFill className="text-7xl" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400">
                    < SiAntdesign className="text-7xl text-red-500" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400">
                    < DiNodejsSmall className="text-7xl text-sky-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-400">
                    < DiMongodb className="text-7xl text-green-500" />
                </div>

            </div>
        </div>
    )
}

export default Technologies
