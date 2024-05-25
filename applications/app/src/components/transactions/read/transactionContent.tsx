import { ButtonGhost, ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconLockCheck, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { readTransactionRoute } from "../../../routes/auth/app/transactions/readTransaction.route"
import { router } from "../../../routes/router"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { FormatAccountWithFetch } from "../../accounts/format/formatAccountWithFetch"
import { FormatAttachmentWithFetch } from "../../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../../journals/format/formatJournalWithFetch"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteTransaction } from "../delete/deleteTransaction"
import { UpdateTransaction } from "../update/updateTransaction"
import { ValidateTransaction } from "../validate/validateTransaction"


export function TransactionContent() {
    const { idTransaction } = useParams({ from: readTransactionRoute.id })
    const transaction = useQuery(transactionOptions(idTransaction))

    if (transaction.isLoading) return <CircularLoader />
    if (transaction.isError) return <ErrorMessage message={transaction.error.message} />
    if (!transaction.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/enregistrements" })}
                        icon={<IconChevronLeft />}
                    />
                    {transaction.data.isConfirmed ? null : (
                        <Fragment>
                            <UpdateTransaction transaction={transaction.data}>
                                <ButtonPlain
                                    icon={<IconPencil />}
                                    text="Modifier"
                                />
                            </UpdateTransaction>
                            <ValidateTransaction transaction={transaction.data}>
                                <ButtonOutline
                                    text="Valider"
                                    icon={<IconLockCheck />}
                                    color="success"
                                />
                            </ValidateTransaction>
                        </Fragment>
                    )}
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    {transaction.data.isConfirmed ? null : (
                        <Fragment>
                            <DeleteTransaction transaction={transaction.data}>
                                <ButtonGhost
                                    icon={<IconTrash />}
                                    color="error"
                                />
                            </DeleteTransaction>
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
                        <FormatText text={transaction.data.label} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Journal">
                        {!transaction.data.idJournal ? <FormatNull /> : <FormatJournalWithFetch idJournal={transaction.data.idJournal} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Date">
                        <FormatDate isoDate={transaction.data.date} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Débit">
                        <FormatPrice price={transaction.data.debit} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Crédit">
                        <FormatPrice price={transaction.data.credit} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Compte">
                        {!transaction.data.idAccount ? <FormatNull /> : <FormatAccountWithFetch idAccount={transaction.data.idAccount} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Pièce justificative">
                        {!transaction.data.idAttachment ? <FormatNull /> : <FormatAttachmentWithFetch idAttachment={transaction.data.idAttachment} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Enregistrement validé ?">
                        <FormatBoolean boolean={transaction.data.isConfirmed} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajouté le">
                        <FormatDateTime isoDate={transaction.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajouté par">
                        {!transaction.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={transaction.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié le">
                        <FormatDateTime isoDate={transaction.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié par">
                        {!transaction.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={transaction.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={transaction.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
