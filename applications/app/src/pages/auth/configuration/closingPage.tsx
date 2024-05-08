import { Main } from "../../../components/layouts/main/main"


export function ClosingPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Clôture"
                description="Vous pouvez sur cette page clôturer l'exercice fiscal en cours et générer la version finale des documents comptables nécessaires pour l'administration fiscale."
            >
            </Main.Header>
            <Main.Content>
                <div>
                    <div>
                        <p>
                            Vous pouvez télécharger le Fichier des Écritures Comptables (FEC) en cliquant sur le bouton ci-contre. Le fichier est dans le format
                        </p>
                        {/* <CloseYear>
                            <ButtonOutline
                                text="Télécharger le fichier"
                            />
                        </CloseYear> */}
                    </div>
                </div>
            </Main.Content>
        </Main.Root>
    )
}
