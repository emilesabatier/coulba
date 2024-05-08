import { ButtonGhostContent } from "@coulba/design/buttons"
import { Link } from "@tanstack/react-router"


export function Footer() {
    return (
        <div className="w-full border-t border-neutral/20 p-4 flex justify-center items-center">
            <div className="w-full max-w-[1280px] flex justify-between items-center gap-4 overflow-hidden">
                <div className="inline-flex flex-wrap justify-start items-center gap-2">
                    <span className="text-neutral/50 text-sm">© {new Date().getFullYear()}</span>
                    {/* <span className="text-sm">Coulba</span> */}
                </div>
                <div className="flex flex-wrap justify-end items-center gap-x-2 gap-y-0">
                    <Link to="/legal" className="flex justify-end items-center">
                        <ButtonGhostContent
                            text="Mentions légales"
                        />
                    </Link>
                    <Link to="/cguv" className="flex justify-end items-center">
                        <ButtonGhostContent
                            text="CGUV"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}
