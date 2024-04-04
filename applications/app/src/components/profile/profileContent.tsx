import { ButtonOutline } from "@coulba/design/buttons"
import { FormatLink, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconMailCog, IconPasswordUser, IconPencil } from "@tabler/icons-react"
import { useSession } from "../../contexts/session/useSession"
import { DataBlock } from "../layouts/dataBlock/dataBlock"
import { UpdateProfile } from "./updateProfile/updateProfile"
import { UpdateProfileEmail } from "./updateProfileEmail/updateProfileEmail"
import { UpdateProfilePassword } from "./updateProfilePassword/updateProfilePassword"


export function ProfileContent() {
    const session = useSession()

    if (session.isLoading) return <CircularLoader />
    if (!session.user) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
            <div className="w-full flex justify-between items-center p-4 border-b border-neutral/10 last:border-b-0">
                <UpdateProfile>
                    <ButtonOutline
                        icon={<IconPencil />}
                        text="Modifier"
                    />
                </UpdateProfile>
                <div className="flex justify-end items-center gap-1">
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
                </div>
            </div>
            <DataBlock.Root className="border-0">
                <DataBlock.Item label="Prénom">
                    <FormatText text={session.user.forename} />
                </DataBlock.Item>
                <DataBlock.Item label="Nom">
                    <FormatText text={session.user.surname} />
                </DataBlock.Item>
                <DataBlock.Item label="Email">
                    <FormatLink text={session.user.email} />
                </DataBlock.Item>
            </DataBlock.Root>
        </div>
    )
}
