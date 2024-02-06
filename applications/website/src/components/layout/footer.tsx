import { Link } from "@tanstack/react-router"
import projectPackage from '../../../../../package.json'


export function Footer() {
    return (
        <div className="rounded-t-md bg-white shadow-outer p-4 w-full max-w-full flex justify-between items-center overflow-hidden gap-4">
            <div className="inline-flex flex-wrap justify-start items-center gap-2">
                <span className="text-neutral/50 text-sm">© 2023-{new Date().getFullYear()}</span>
                <span className="text-sm">MonAssoSportive</span>
                <span className="text-neutral/50 text-sm">{projectPackage.version}</span>
            </div>
            <div className="flex flex-wrap justify-end items-center gap-x-2 gap-y-0">
                <Link to="/conditions-utilisation-et-vente" className="flex justify-end items-center">
                    <span className="text-sm underline hover:no-underline text-right">CGUV</span>
                </Link>
                <Link to="/mentions-legales" className="flex justify-end items-center">
                    <span className="text-sm underline hover:no-underline text-right">Mentions légales</span>
                </Link>
            </div>
        </div>
    )
}
