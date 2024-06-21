import { ButtonOutline } from "@coulba/design/buttons"
import { FormatLink, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconMailCog, IconPasswordUser, IconPencil } from "@tabler/icons-react"
import { useSession } from "../../contexts/session/useSession"
import { DataBlock } from "../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { Title } from "../layouts/title"
import { UpdateProfile } from "./updateProfile/updateProfile"
import { UpdateProfileEmail } from "./updateProfileEmail/updateProfileEmail"
import { UpdateProfilePassword } from "./updateProfilePassword/updateProfilePassword"


export function ProfileContent() {
    const session = useSession()

    if (session.isLoading) return <CircularLoader className="m-3" />
    if (!session.profile) return <ErrorMessage message="Les données du profil ne peuvent pas être récupérées" />
    return (
        <Section.Root>
            <Section.Item className="p-3 gap-1.5">
                <UpdateProfile>
                    <ButtonOutline
                        icon={<IconPencil />}
                        text="Modifier"
                    />
                </UpdateProfile>
                <UpdateProfileEmail>
                    <ButtonOutline
                        text="Modifier l'email"
                        icon={<IconMailCog />}
                        color="error"
                    />
                </UpdateProfileEmail>
                <UpdateProfilePassword>
                    <ButtonOutline
                        text="Modifier le mot de passe"
                        icon={<IconPasswordUser />}
                        color="error"
                    />
                </UpdateProfilePassword>
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Pseudonyme">
                            <FormatText text={session.profile.alias} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Email">
                            <FormatLink text={session.profile.email} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
