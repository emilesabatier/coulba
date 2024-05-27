import { ButtonGhost, ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { readRecordRoute } from "../../../routes/auth/app/transactions/records/readRecord.route"
import { router } from "../../../routes/router"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { FormatAccountWithFetch } from "../../accounts/format/formatAccountWithFetch"
import { FormatAttachmentWithFetch } from "../../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../../journals/format/formatJournalWithFetch"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteRecord } from "../delete/deleteRecord"
import { UpdateRecord } from "../update/updateRecord"


export function RecordContent() {
    const { idTransaction, idRecord } = useParams({ from: readRecordRoute.id })
    const transaction = useQuery(transactionOptions(idTransaction))
    const record = useQuery(recordOptions(idRecord))

    if (transaction.isLoading || record.isLoading) return <CircularLoader />
    if (transaction.isError) return <ErrorMessage message={transaction.error.message} />
    if (record.isError) return <ErrorMessage message={record.error.message} />
    if (!transaction.data || !record.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({
                            to: "/operations/$idTransaction",
                            params: { idTransaction: idTransaction }
                        })}
                        icon={<IconChevronLeft />}
                    />
                    {record.data.isConfirmed ? null : (
                        <Fragment>
                            <UpdateRecord record={record.data} transaction={transaction.data}>
                                <ButtonPlain
                                    icon={<IconPencil />}
                                    text="Modifier"
                                />
                            </UpdateRecord>
                        </Fragment>
                    )}
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    {record.data.isConfirmed ? null : (
                        <Fragment>
                            <DeleteRecord record={record.data} transaction={transaction.data}>
                                <ButtonGhost
                                    icon={<IconTrash />}
                                    color="error"
                                />
                            </DeleteRecord>
                        </Fragment>
                    )}
                </div>
            </Section.Item>
            <Section.Item>
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
                    <DataBlock.Item label="Débit">
                        <FormatPrice price={record.data.debit} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Crédit">
                        <FormatPrice price={record.data.credit} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Compte">
                        {!record.data.idAccount ? <FormatNull /> : <FormatAccountWithFetch idAccount={record.data.idAccount} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Pièce justificative">
                        {!record.data.idAttachment ? <FormatNull /> : <FormatAttachmentWithFetch idAttachment={record.data.idAttachment} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Enregistrement validé ?">
                        <FormatBoolean boolean={record.data.isConfirmed} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajouté le">
                        <FormatDateTime isoDate={record.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajouté par">
                        {!record.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={record.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié le">
                        <FormatDateTime isoDate={record.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié par">
                        {!record.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={record.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={record.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
