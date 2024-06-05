import { IconArrowRight } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { Section } from "../layouts/section/section"


export function SupportBanner() {
    return (
        <Section.Item>
            <div className="flex flex-col justify-start items-start">
                <h2 className="text-2xl">Support</h2>
                <p className="text-neutral/50">Reporter un bug ou suggérer une idée d'amélioration</p>
            </div>
            <Link
                to="/support"
                className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-sm p-2 border border-neutral/10 hover:bg-neutral/5"
            >
                <span className="p-0">Contacter le support</span>
                <IconArrowRight size={16} />
            </Link>
        </Section.Item>
    )
}
