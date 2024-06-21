import { IconArrowRight } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"


export function SupportBanner() {
    return (
        <div className="border border-neutral/10 rounded-md p-3 flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col justify-start items-start">
                <h2 className="text-2xl">Support</h2>
                <p className="text-neutral/50">Reporter un bug ou suggérer une amélioration</p>
            </div>
            <Link
                to="/support"
                className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-sm p-2 border border-neutral/10 hover:bg-neutral/5"
            >
                <span className="p-0">Contacter le support</span>
                <IconArrowRight size={16} />
            </Link>
        </div>
    )
}
