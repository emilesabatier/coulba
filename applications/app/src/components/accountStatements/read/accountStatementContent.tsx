import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readAccountStatementRoute } from "../../../routes/auth/app/configuration/statements/statements/accountStatements/readAccountStatement.route"
import { router } from "../../../routes/router"
import { accountStatementOptions } from "../../../services/api/auth/accountStatements/accountStatementsOptions"
import { FormatAccountWithFetch } from "../../accounts/format/formatAccountWithFetch"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteAccountStatement } from "../delete/deleteAccountStatement"
import { UpdateAccountStatement } from "../update/updateAccountStatement"


export function AccountStatementContent() {
    const { idStatement, idAccountStatement } = useParams({ from: readAccountStatementRoute.id })
    const accountStatement = useQuery(accountStatementOptions(idAccountStatement))

    if (accountStatement.isLoading) return <CircularLoader />
    if (accountStatement.isError) return <ErrorMessage message={accountStatement.error.message} />
    if (!accountStatement.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({
                            to: "/configuration/compte-de-resultat/lignes",
                            params: { idStatement: idStatement }
                        })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateAccountStatement accountStatement={accountStatement.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateAccountStatement>
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    <DeleteAccountStatement accountStatement={accountStatement.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteAccountStatement>
                </div>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Informations" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Compte lié">
                        <FormatAccountWithFetch idAccount={accountStatement.data.idAccount} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajouté le">
                        <FormatDateTime isoDate={accountStatement.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajouté par">
                        {!accountStatement.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={accountStatement.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié le">
                        <FormatDateTime isoDate={accountStatement.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié par">
                        {!accountStatement.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={accountStatement.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={accountStatement.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
