import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconLockCheck, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { readRecordRoute } from "../../../routes/auth/records/readRecord.route"
import { router } from "../../../routes/router"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { FormatAttachmentWithFetch } from "../../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../../journals/format/formatJournalWithFetch"
import { Banner } from "../../layouts/banner"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Title } from "../../layouts/title"
import { RowsTable } from "../../rows/rowsTable"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteRecord } from "../delete/deleteRecord"
import { UpdateRecord } from "../update/updateRecord"
import { ValidateRecord } from "../validate/validateRecord"


export function RecordContent() {
    const { idRecord } = useParams({ from: readRecordRoute.id })
    const record = useQuery(recordOptions(idRecord))

    let totalDebit = 0
    let totalCredit = 0

    record.data?.rows.forEach((row) => {
        totalDebit += Number(row.debit)
        totalCredit += Number(row.credit)
    })

    if (record.isLoading) return <CircularLoader className="m-3" />
    if (record.isError) return <ErrorMessage message={record.error.message} />
    if (!record.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/ecritures" })}
                        icon={<IconChevronLeft />}
                    />
                    {record.data.isValidated ? null : (
                        <Fragment>
                            <UpdateRecord record={record.data}>
                                <ButtonPlain
                                    icon={<IconPencil />}
                                    text="Modifier"
                                />
                            </UpdateRecord>
                            <ValidateRecord record={record.data}>
                                <ButtonOutline
                                    text="Valider"
                                    icon={<IconLockCheck />}
                                    color="success"
                                    disabled={totalDebit !== totalCredit}
                                />
                            </ValidateRecord>
                        </Fragment>
                    )}
                </div>
                <div className="ml-auto flex justify-end items-center gap-1.5">
                    {record.data.isValidated ? null : (
                        <Fragment>
                            <DeleteRecord record={record.data}>
                                <ButtonOutline
                                    icon={<IconTrash />}
                                    color="error"
                                />
                            </DeleteRecord>
                        </Fragment>
                    )}
                </div>
            </Section.Item>
            {
                record.data.idAttachment ? null : (
                    <Section.Item className="p-0">
                        <Banner variant="error">
                            Il manque une pièce justificative.
                        </Banner>
                    </Section.Item>
                )
            }
            {
                record.data.isValidated ? null : (
                    <Section.Item className="p-0">
                        {
                            totalDebit === totalCredit ? (
                                <Banner variant="success">
                                    Les montants au débit et au crédit sont identiques.
                                </Banner>
                            ) : (
                                <Banner variant="error">
                                    Les montants au débit et au crédit sont différents, veuillez corriger pour pouvoir valider.
                                </Banner>
                            )
                        }
                    </Section.Item>
                )
            }
            <Section.Item className="flex-col">
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Libellé">
                            <FormatText text={record.data.label} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Journal">
                            {!record.data.idJournal ? <FormatNull /> : <FormatJournalWithFetch idJournal={record.data.idJournal} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Date">
                            <FormatDate isoDate={record.data.date} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Pièce justificative">
                            {!record.data.idAttachment ? <FormatNull /> : <FormatAttachmentWithFetch idAttachment={record.data.idAttachment} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Écriture validée ?">
                            <FormatBoolean boolean={record.data.isValidated} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Écriture validée le">
                            <FormatDate isoDate={record.data.validatedOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Total débit">
                            <FormatPrice price={totalDebit} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Total crédit">
                            <FormatPrice price={totalCredit} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Métadonnées" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Ajoutée le">
                            <FormatDateTime isoDate={record.data.createdOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Ajoutée par">
                            {!record.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={record.data.createdBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifiée le">
                            <FormatDateTime isoDate={record.data.lastUpdatedOn} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Modifiée par">
                            {!record.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={record.data.lastUpdatedBy} />}
                        </DataBlock.Item>
                        <DataBlock.Item label="Id">
                            <FormatText text={record.data.id} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <RowsTable
                    record={record.data}
                    isLoading={record.isLoading}
                />
            </Section.Item>
        </Section.Root>
    )
}
