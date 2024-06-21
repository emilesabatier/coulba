import { IconExternalLink } from "@tabler/icons-react"


export function DocumentationBanner() {
    return (
        <div className="border border-neutral/10 rounded-md p-3 flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col justify-start items-start">
                <h2 className="text-2xl">Documentation</h2>
                <p className="text-neutral/50">Collaborative et ouverte</p>
            </div>
            <a
                href="https://documentation.coulba.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-sm p-2 border border-neutral/10 hover:bg-neutral/5"
                aria-label="Adresse de la documentation"
            >
                <span className="p-0">Consulter la documentation</span>
                <IconExternalLink size={16} className="shrink-0" />
            </a>
        </div>
    )
}
