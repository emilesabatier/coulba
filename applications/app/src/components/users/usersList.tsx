import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { Chip, CircularLoader } from "@coulba/design/layouts"
import { IconPencil, IconPlus, IconSend, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { usersOptions } from "../../services/api/auth/users/usersOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateUser } from "./create/createUser"
import { DeleteUser } from "./delete/deleteUser"
import { formatUser } from "./format/formatUser"
import { SendInvitation } from "./sendInvitation/sendInvitation"
import { UpdateUser } from "./update/updateUser"


export function UsersList() {
    const users = useQuery(usersOptions)

    if (users.isLoading) return <CircularLoader />
    if (users.isError) return <ErrorMessage message={users.error.message} />
    if (!users.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <CreateUser>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un accès utilisateur"
                    />
                </CreateUser>
            </Section.Item>
            <Section.Item className="p-0 flex flex-col justify-start items-stretch">
                {
                    (!users.data || users.data?.length === 0) ? (<FormatNull />) : users.data.map((user) => {
                        return (
                            <div className="w-full flex justify-between items-center p-3">
                                <div className="flex justify-start items-center gap-3">
                                    <h2>{formatUser(user)}</h2>
                                    <span className="text-neutral/50">{user.email}</span>
                                    {!user.isAdmin ? null : <Chip color="neutral" text="Administrateur" />}
                                </div>
                                <div className="flex justify-end items-center gap-1">
                                    <SendInvitation user={user}>
                                        <ButtonGhost
                                            icon={<IconSend />}
                                            color="success"
                                        />
                                    </SendInvitation>
                                    <UpdateUser user={user}>
                                        <ButtonGhost
                                            icon={<IconPencil />}
                                        />
                                    </UpdateUser>
                                    <DeleteUser user={user}>
                                        <ButtonGhost
                                            icon={<IconTrash />}
                                            color="error"
                                        />
                                    </DeleteUser>
                                </div>
                            </div>
                        )
                    })
                }
            </Section.Item>
        </Section.Root>
    )
}
