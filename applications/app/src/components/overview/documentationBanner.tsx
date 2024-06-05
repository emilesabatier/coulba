import { IconExternalLink } from "@tabler/icons-react"
import { Section } from "../layouts/section/section"


export function DocumentationBanner() {
    return (
        <Section.Item>
            <div className="flex flex-col justify-start items-start">
                <h2 className="text-2xl">Documentation</h2>
                <p className="text-neutral/50">Collaborative et open source</p>
            </div>
            <a
                href="https://documentation.coulba.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-sm p-2 border border-neutral/10 hover:bg-neutral/5"
            >
                <span className="p-0">Consulter la documentation</span>
                <IconExternalLink size={16} />
            </a>
        </Section.Item>
    )
}
