import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatSelect, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readComputationStatementRoute } from "../../../routes/auth/configuration/statements/computations/computationStatements/readComputationStatement.route"
import { router } from "../../../routes/router"
import { computationStatementOptions } from "../../../services/api/auth/computationStatements/computationStatementsOptions"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Title } from "../../layouts/title"
import { FormatStatementWithFetch } from "../../statements/format/formatStatementWithFetch"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteComputationStatement } from "../delete/deleteComputationStatement"
import { operationOptions } from "../operationOptions"
import { UpdateComputationStatement } from "../update/updateComputationStatement"


export function ComputationStatementContent() {
    const { idComputation, idComputationStatement } = useParams({ from: readComputationStatementRoute.id })
    const computationStatement = useQuery(computationStatementOptions(idComputationStatement))

    if (computationStatement.isLoading) return <CircularLoader />
    if (computationStatement.isError) return <ErrorMessage message={computationStatement.error.message} />
    if (!computationStatement.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({
                            to: "/configuration/compte-de-resultat/calculs/$idComputation",
                            params: { idComputation: idComputation }
                        })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateComputationStatement computationStatement={computationStatement.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateComputationStatement>
                </div>
                <div className="ml-auto flex justify-end items-center gap-1.5">
                    <DeleteComputationStatement computationStatement={computationStatement.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteComputationStatement>
                </div>
            </Section.Item>
            <Section.Item className="flex-col">
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Poste du compte de résultat">
                            <FormatStatementWithFetch idStatement={computationStatement.data.idStatement} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Opération">
                            <FormatSelect option={computationStatement.data.operation} options={operationOptions} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Métadonnées" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Ajouté le">
                            <FormatDateTime isoDate={computationStatement.data.createdOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Ajouté par">
                            {!computationStatement.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={computationStatement.data.createdBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifié le">
                            <FormatDateTime isoDate={computationStatement.data.lastUpdatedOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifié par">
                            {!computationStatement.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={computationStatement.data.lastUpdatedBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Id">
                            <FormatText text={computationStatement.data.id} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
