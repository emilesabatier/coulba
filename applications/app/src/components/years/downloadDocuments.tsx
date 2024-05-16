

export function DownloadDocuments() {
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4 overflow-auto border border-neutral/20 rounded-md p-4">
            <div className="flex flex-col justify-start items-start gap-1">
                <h2 className="text-xl">Télécharger les documents comptables</h2>
                <p className="text-neutral/75">Cela permet de générer les documents nécessaires à l'administration fiscale.</p>
            </div>
            <div className="flex justify-start items-center gap-1">
                <p>
                    Vous pouvez télécharger le Fichier des Écritures Comptables (FEC) en cliquant sur le bouton ci-contre. Le fichier est dans le format
                </p>
            </div>
        </div>
    )
}
