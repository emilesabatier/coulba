import { ButtonGhost, ButtonOutline } from "@coulba/design/buttons"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { IconCopy, IconReload } from "@tabler/icons-react"
import { useState } from "react"
import { useCompany } from "../../contexts/company/useCompany"
import { generateApiKey } from "../../services/api/auth/companies/generateApiKey"


export function ApiContent() {
    const company = useCompany()
    const [apiKey, setApiKey] = useState<string | undefined>(undefined)

    async function generateKey() {
        const newKey = window.crypto.randomUUID().replaceAll("-", "")

        const response = await generateApiKey({ body: { apiKey: newKey } })
        if (!response) return

        toast({ title: "Nouvelle clé générée", variant: "success" })
        setApiKey(newKey)
    }

    function copyKey() {
        if (!apiKey) return
        toast({ title: "Clé copiée dans le presse-papier.", variant: "information" })
        return navigator.clipboard.writeText(apiKey)
    }

    if (company.isLoading) return <CircularLoader />
    if (!company.data) return null
    return (
        <div className="w-fit h-full flex flex-col justify-start items-stretch border border-neutral/25 rounded-md">
            <div className="border-b border-neutral/10 p-4 flex justify-start items-center gap-4">
                <ButtonOutline
                    icon={<IconReload />}
                    text="Générer une nouvelle clé"
                    onClick={generateKey}
                    className="border-dashed"
                />
                {!apiKey ? null : (
                    <div className="flex justify-start items-center gap-2">
                        <span className="text-neutral/50">Nouvelle clé</span>
                        <span className="font-bold">{apiKey}</span>
                        <ButtonGhost
                            icon={<IconCopy />}
                            onClick={copyKey}
                        />
                    </div>
                )}
            </div>
            <div className="max-w-[768px] flex flex-col justify-start items-start gap-2 p-4">
                <p>
                    La clé API n'est visible qu'au moment de la génération. Si vous l'avez perdue, générez une nouvelle clé, qui supprimera les accès de l'ancienne.
                </p>
                <p>
                    La clé doit être ajoutée dans l'url à chaque requête, sous la forme <code className="rounded-sm bg-neutral/5 p-1">.../transactions?key=abcdef12345</code>
                </p>
                <p>
                    Pour plus de détails sur la manière de communiquer avec l'API, rendez-vous sur le site de la <a href="https://documentation.coulba.fr/api" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">documentation</a>.
                </p>
            </div>
        </div>
    )
}
