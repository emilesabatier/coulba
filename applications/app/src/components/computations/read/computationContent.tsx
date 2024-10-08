import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readComputationRoute } from "../../../routes/auth/configuration/statements/computations/readComputation.route"
import { router } from "../../../routes/router"
import { computationOptions } from "../../../services/api/auth/computations/computationsOptions"
import { ComputationStatementsTable } from "../../computationStatements/computationStatementsTable"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Title } from "../../layouts/title"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteComputation } from "../delete/deleteComputation"
import { UpdateComputation } from "../update/updateComputation"


export function ComputationContent() {
    const { idComputation } = useParams({ from: readComputationRoute.id })
    const computation = useQuery(computationOptions(idComputation))

    if (computation.isLoading) return <CircularLoader className="m-3" />
    if (computation.isError) return <ErrorMessage message={computation.error.message} />
    if (!computation.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/configuration/compte-de-resultat/calculs" })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateComputation computation={computation.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateComputation>
                </div>
                <div className="ml-auto flex justify-end items-center gap-1.5">
                    <DeleteComputation computation={computation.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteComputation>
                </div>
            </Section.Item>
            <Section.Item className="flex-col">
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Numéro">
                            <FormatText text={computation.data.number.toString()} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Libellé">
                            <FormatText text={computation.data.label} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Métadonnées" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Ajouté le">
                            <FormatDateTime isoDate={computation.data.createdOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Ajouté par">
                            {!computation.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={computation.data.createdBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifié le">
                            <FormatDateTime isoDate={computation.data.lastUpdatedOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifié par">
                            {!computation.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={computation.data.lastUpdatedBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Id">
                            <FormatText text={computation.data.id} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <ComputationStatementsTable
                    computation={computation.data}
                    isLoading={computation.isLoading}
                />
            </Section.Item>
        </Section.Root>
    )
}
