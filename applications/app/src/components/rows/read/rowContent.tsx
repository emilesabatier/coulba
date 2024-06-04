import { ButtonGhost, ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { readRowRoute } from "../../../routes/auth/app/records/rows/readRow.route"
import { router } from "../../../routes/router"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { rowOptions } from "../../../services/api/auth/rows/rowsOptions"
import { FormatAccountWithFetch } from "../../accounts/format/formatAccountWithFetch"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteRow } from "../delete/deleteRow"
import { UpdateRow } from "../update/updateRow"


export function RowContent() {
    const { idRecord, idRow } = useParams({ from: readRowRoute.id })
    const record = useQuery(recordOptions(idRecord))
    const row = useQuery(rowOptions(idRow))

    if (record.isLoading || row.isLoading) return <CircularLoader />
    if (record.isError) return <ErrorMessage message={record.error.message} />
    if (row.isError) return <ErrorMessage message={row.error.message} />
    if (!record.data || !row.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({
                            to: "/ecritures/$idRecord",
                            params: { idRecord: idRecord }
                        })}
                        icon={<IconChevronLeft />}
                    />
                    {row.data.isConfirmed ? null : (
                        <Fragment>
                            <UpdateRow row={row.data} record={record.data}>
                                <ButtonPlain
                                    icon={<IconPencil />}
                                    text="Modifier"
                                />
                            </UpdateRow>
                        </Fragment>
                    )}
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    {row.data.isConfirmed ? null : (
                        <Fragment>
                            <DeleteRow row={row.data} record={record.data}>
                                <ButtonGhost
                                    icon={<IconTrash />}
                                    color="error"
                                />
                            </DeleteRow>
                        </Fragment>
                    )}
                </div>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Informations" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Libellé">
                        <FormatText text={row.data.label} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Compte">
                        {!row.data.idAccount ? <FormatNull /> : <FormatAccountWithFetch idAccount={row.data.idAccount} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Débit">
                        <FormatPrice price={row.data.debit} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Crédit">
                        <FormatPrice price={row.data.credit} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajouté le">
                        <FormatDateTime isoDate={row.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajouté par">
                        {!row.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={row.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié le">
                        <FormatDateTime isoDate={row.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié par">
                        {!row.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={row.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={row.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
