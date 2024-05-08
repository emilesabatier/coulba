import { IconArrowRight, IconExternalLink } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"


export function UsefulLinks() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
            <div className="w-full p-4 border-b border-neutral/10 last:border-b-0 flex justify-between items-center gap-4">
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-2xl">Documentation</h2>
                    <p className="text-neutral/75">Collaborative et open source</p>
                </div>
                <a
                    href="https://documentation.coulba.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-md p-2 border border-dashed border-neutral/20 hover:bg-neutral/5"
                >
                    <span className="p-0">Consulter la documentation</span>
                    <IconExternalLink size={16} />
                </a>
            </div>
            <div className="w-full p-4 border-b border-neutral/10 last:border-b-0 flex justify-between items-center gap-4">
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-2xl">Support</h2>
                    <p className="text-neutral/75">Reporter un bug, une suggestion ou autre besoin</p>
                </div>
                <Link
                    to="/support"
                    className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-md p-2 border border-dashed border-neutral/20 hover:bg-neutral/5"
                >
                    <span className="p-0">Contacter le support</span>
                    <IconArrowRight size={16} />
                </Link>
            </div>
        </div>
    )
}
