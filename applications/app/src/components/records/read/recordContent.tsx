import { ButtonGhost, ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatText, formatPrice } from "@coulba/design/formats"
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
                <div className="flex justify-end items-center gap-1.5">
                    {record.data.isValidated ? null : (
                        <Fragment>
                            <DeleteRecord record={record.data}>
                                <ButtonGhost
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
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Informations" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
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
                </DataBlock.Root>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
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
                </DataBlock.Root>
            </Section.Item>
            <Section.Item className="bg-neutral/5">
                <Section.Title title="Lignes" />
            </Section.Item>
            <Section.Item className="p-0 grid grid-cols-2">
                <div className="w-full px-3 py-1.5 border-r border-neutral/10 flex justify-start items-end gap-3">
                    <span className="text-lg uppercase text-neutral/50">Total débit</span>
                    <span className="text-2xl">{formatPrice(totalDebit)}</span>
                </div>
                <div className="w-full px-3 py-1.5 flex justify-start items-end gap-3">
                    <span className="text-lg uppercase text-neutral/50">Total crédit</span>
                    <span className="text-2xl">{formatPrice(totalCredit)}</span>
                </div>
            </Section.Item>
            <Section.Item className="p-0 border-b-0">
                <RowsTable
                    record={record.data}
                    isLoading={record.isLoading}
                />
            </Section.Item>
        </Section.Root>
    )
}
