import { ButtonGhost } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { Chip } from "@coulba/design/layouts"
import { IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react"
import { userOptions } from "../../services/api/auth/users/usersOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"
import { DeleteUser } from "./deleteUser/deleteUser"
import { formatUser } from "./formatUser"
import { UpdateUser } from "./updateUser/updateUser"


export function UsersList() {
    const users = useQuery(userOptions)

    if (users.isPending) return <Loading />
    if (users.isError) return <ErrorMessage message={users.error.message} />
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-2 overflow-auto border border-neutral/25 rounded-sm p-4">
            {
                (!users.data || users.data?.length === 0) ? (<FormatNull />) : users.data.map((user, index) => {
                    return (
                        <Fragment>
                            {index === 0 ? null : (<div className="h-[1px] w-full bg-neutral/10" />)}
                            <div className="w-full flex justify-between items-center gap-4">
                                <div className="flex justify-start items-center gap-4 p-2">
                                    <h2>{formatUser(user)}</h2>
                                    <span className="text-neutral/50">{user.email}</span>
                                    {!user.isAdmin ? null : <Chip color="neutral" text="Administrateur" />}
                                </div>
                                <div className="flex justify-end items-center gap-1">
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
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
