'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { AccountIcon } from "../../../components/account/account.icon"
import { DeleteOneAccount } from "../../../components/account/deleteOneAccount/deleteOneAccount"
import { accountFormat } from "../../../components/account/formatAccount/account.format"
import { UpdateOneAccount } from "../../../components/account/updateOneAccount/updateOneAccount"
import { BackButton } from "../../../components/layouts/backButton"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { accountRoute } from "../../../routes/dashboard/accounts/account.route"
import { accountData } from "../../../components/account/account.data"
import { useAccount } from "../../../hooks/data/useAccount"


export function AccountPage() {
    const { idAccount } = useParams({ from: accountRoute.id })
    const account = useAccount(idAccount)

    if (!account.data) return null

    const dataGroups = accountData(account.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/comptes" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <AccountIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{accountFormat(account.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneAccount account={account.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneAccount>
                    <DeleteOneAccount account={account.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneAccount>
                </div>
            </Content.Header>
            <DataBlock.Grid id="account">
                {
                    dataGroups.map((group) => (
                        <DataBlock.Root key={group.key}>
                            <DataBlock.Header title={group.title} />
                            <DataBlock.Content>
                                {
                                    group.items.map((item) => (
                                        <DataBlock.Item
                                            key={item.key}
                                            label={item.label}
                                            description={item.description}
                                            children={item.value}
                                        />
                                    ))
                                }
                            </DataBlock.Content>
                        </DataBlock.Root>
                    ))
                }
            </DataBlock.Grid>
        </Content.Root>
    )
}
