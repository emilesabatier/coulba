import { ButtonOutline, ButtonPlainContent } from "@coulba/design/buttons"
import { IconArrowDown } from "@tabler/icons-react"
import { useNavigate } from "@tanstack/react-router"
import { ScreenshotFrame } from "./screenshotFrame"


export function HeroHeader() {
    const navigate = useNavigate()

    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-8 py-16">
            <div className="flex flex-col justify-start items-center gap-3">
                <div className="inline-flex flex-col justify-start items-center gap-2 max-w-[768px]">
                    <h1 className="leading-none text-[48px] text-center font-bold uppercase text-balance">
                        Reprendre la main sur sa comptabilité
                    </h1>
                    <p className="text-lg text-neutral/75 text-balance text-center">
                        La plupart des entrepreneurs individuels et des petites entreprises ou associations n'ont pas besoin de comptables.
                        <br />
                        Nous nous adressons à eux.
                    </p>
                </div>
                <div className="w-full flex justify-center items-start gap-2">
                    <ButtonOutline
                        text="En savoir plus"
                        icon={<IconArrowDown />}
                        onClick={() => navigate({ to: "/", hash: "fonctionnalites" })}
                        className="min-w-fit"
                    />
                    <a
                        href={`${import.meta.env.VITE_PUBLIC_APP_BASE}/inscription`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Créer un compte"
                    >
                        <ButtonPlainContent
                            text="Créer un compte"
                        />
                    </a>
                </div>
            </div>
            <div className="p-8">
                <ScreenshotFrame />
            </div>
        </div>
    )
}
