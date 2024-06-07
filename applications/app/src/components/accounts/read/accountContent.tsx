import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDateTime, FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readAccountRoute } from "../../../routes/auth/configuration/accounts/readAccount.route"
import { router } from "../../../routes/router"
import { accountOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteAccount } from "../delete/deleteAccount"
import { FormatAccountWithFetch } from "../format/formatAccountWithFetch"
import { UpdateAccount } from "../update/updateAccount"


export function AccountContent() {
    const { idAccount } = useParams({ from: readAccountRoute.id })
    const account = useQuery(accountOptions(idAccount))

    if (account.isLoading) return <CircularLoader />
    if (account.isError) return <ErrorMessage message={account.error.message} />
    if (!account.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/configuration/comptes" })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateAccount account={account.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateAccount>
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    <DeleteAccount account={account.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteAccount>
                </div>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Informations" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Numéro">
                        <FormatText text={account.data.number.toString()} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Libellé">
                        <FormatText text={account.data.label} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Système">
                        <FormatBoolean boolean={account.data.isOptional} text={account.data.isOptional ? "Minimal" : "Facultatif"} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Compte parent">
                        {!account.data.idParent ? <FormatNull /> : <FormatAccountWithFetch idAccount={account.data.idParent} />}
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajouté le">
                        <FormatDateTime isoDate={account.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajouté par">
                        {!account.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={account.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié le">
                        <FormatDateTime isoDate={account.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié par">
                        {!account.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={account.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={account.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
