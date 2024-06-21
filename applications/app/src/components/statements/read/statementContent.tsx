import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readStatementRoute } from "../../../routes/auth/configuration/statements/statements/readStatement.route"
import { router } from "../../../routes/router"
import { statementOptions } from "../../../services/api/auth/statements/statementsOptions"
import { AccountStatementsTable } from "../../accountStatements/accountStatementsTable"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Title } from "../../layouts/title"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteStatement } from "../delete/deleteStatement"
import { FormatStatementWithFetch } from "../format/formatStatementWithFetch"
import { UpdateStatement } from "../update/updateStatement"


export function StatementContent() {
    const { idStatement } = useParams({ from: readStatementRoute.id })
    const statement = useQuery(statementOptions(idStatement))

    if (statement.isLoading) return <CircularLoader />
    if (statement.isError) return <ErrorMessage message={statement.error.message} />
    if (!statement.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/configuration/compte-de-resultat/postes" })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateStatement statement={statement.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateStatement>
                </div>
                <div className="ml-auto flex justify-end items-center gap-1.5">
                    <DeleteStatement statement={statement.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteStatement>
                </div>
            </Section.Item>
            <Section.Item className="flex-col">
                <DataBlock.Root className="flex-col">
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Numéro">
                            <FormatText text={statement.data.number.toString()} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Libellé">
                            <FormatText text={statement.data.label} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Poste parent">
                            {!statement.data.idParent ? <FormatNull /> : <FormatStatementWithFetch idStatement={statement.data.idParent} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Montant net ajouté">
                            <FormatPrice price={statement.data.addedNetAmount} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Métadonnées" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Ajouté le">
                            <FormatDateTime isoDate={statement.data.createdOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Ajouté par">
                            {!statement.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={statement.data.createdBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifié le">
                            <FormatDateTime isoDate={statement.data.lastUpdatedOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifié par">
                            {!statement.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={statement.data.lastUpdatedBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Id">
                            <FormatText text={statement.data.id} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <AccountStatementsTable
                    statement={statement.data}
                    isLoading={statement.isLoading}
                />
            </Section.Item>
        </Section.Root>
    )
}
