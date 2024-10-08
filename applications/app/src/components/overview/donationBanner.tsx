import { ButtonPlainContent } from "@coulba/design/buttons"
import { IconExternalLink } from "@tabler/icons-react"


export function DonationBanner() {
    return (
        <div className="border border-neutral/10 rounded-md p-3 flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col justify-start items-start">
                <h2 className="text-2xl">Soutenir le projet</h2>
                <p className="text-neutral/50">Soutenir financièrement le projet et devenir un sponsor.</p>
            </div>
            <div className="ml-auto flex justify-end items-center gap-1.5">
                <a
                    href={`${import.meta.env.VITE_PUBLIC_WEBSITE_BASE}/tarif`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-sm p-2 border border-neutral/10 hover:bg-neutral/5"
                    aria-label="Consulter le tarif"
                >
                    <span className="p-0">En savoir plus</span>
                    <IconExternalLink size={16} />
                </a>
                <a
                    href="https://buy.stripe.com/6oE8xg5PV5EocWAfYY"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Soutenir"
                >
                    <ButtonPlainContent
                        text="Soutenir"
                    />
                </a>
            </div>
        </div>
    )
}
