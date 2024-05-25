import { IconArrowRight, IconExternalLink } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import { Section } from "../layouts/section/section"


export function UsefulLinks() {
    return (
        <Fragment>
            <Section.Item>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-2xl">Documentation</h2>
                    <p className="text-neutral/50">Collaborative et open source</p>
                </div>
                <a
                    href="https://documentation.coulba.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-md p-2 border border-neutral/10 hover:bg-neutral/5"
                >
                    <span className="p-0">Consulter la documentation</span>
                    <IconExternalLink size={16} />
                </a>
            </Section.Item>
            <Section.Item>
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-2xl">Support</h2>
                    <p className="text-neutral/50">Reporter un bug ou suggérer une idée d'amélioration</p>
                </div>
                <Link
                    to="/support"
                    className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-md p-2 border border-neutral/10 hover:bg-neutral/5"
                >
                    <span className="p-0">Contacter le support</span>
                    <IconArrowRight size={16} />
                </Link>
            </Section.Item>
        </Fragment>
    )
}
