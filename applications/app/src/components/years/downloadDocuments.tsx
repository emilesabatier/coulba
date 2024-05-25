import { Section } from "../layouts/section/section";


export function DownloadDocuments() {
    return (
        <Section.Root>
            <Section.Item className="flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-1">
                    <Section.Title title="Télécharger les documents comptables" />
                    <p className="text-neutral/75">Cela permet de générer les documents nécessaires à l'administration fiscale.</p>
                </div>
                <div className="flex justify-start items-center gap-1">
                    <p>
                        Vous pouvez télécharger le Fichier des Écritures Comptables (FEC) en cliquant sur le bouton ci-contre. Le fichier est dans le format
                    </p>
                </div>
            </Section.Item>
        </Section.Root>
    )
}
