import { ButtonGhost, ButtonOutline } from "@coulba/design/buttons"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { IconCopy, IconReload } from "@tabler/icons-react"
import { useState } from "react"
import { useOrganization } from "../../contexts/organization/useOrganization"
import { generateApiKey } from "../../services/api/auth/organizations/generateApiKey"
import { Section } from "../layouts/section/section"


export function ApiContent() {
    const organization = useOrganization()
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

    if (organization.isLoading) return <CircularLoader className="m-3" />
    if (!organization.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <ButtonOutline
                    icon={<IconReload />}
                    text="Générer une nouvelle clé"
                    onClick={generateKey}
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
            </Section.Item>
            <Section.Item>
                <div className="max-w-[768px] flex flex-col justify-start items-start gap-2">
                    <p>
                        La clé API n'est visible qu'au moment de la génération. Si vous l'avez perdue, générez une nouvelle clé, qui supprimera les accès de l'ancienne.
                    </p>
                    <p>
                        La clé doit être ajoutée dans l'url à chaque requête, sous la forme <code className="rounded-sm bg-neutral/5 p-1">.../records?key=abcdef12345</code>
                    </p>
                </div>
            </Section.Item>
            <Section.Item>
                <p className="italic text-neutral/50">
                    Documentation à venir.
                </p>
            </Section.Item>
        </Section.Root>
    )
}
