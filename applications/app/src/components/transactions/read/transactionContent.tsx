import { ButtonGhost, ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconLockCheck, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { readTransactionRoute } from "../../../routes/auth/app/transactions/readTransaction.route"
import { router } from "../../../routes/router"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { RecordsTable } from "../../records/recordsTable"
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
                        onClick={() => router.navigate({ to: "/operations" })}
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
                    <DataBlock.Item label="Date">
                        <FormatDate isoDate={transaction.data.date} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Opération validée ?">
                        <FormatBoolean boolean={transaction.data.isConfirmed} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajoutée le">
                        <FormatDateTime isoDate={transaction.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajoutée par">
                        {!transaction.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={transaction.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifiée le">
                        <FormatDateTime isoDate={transaction.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifiée par">
                        {!transaction.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={transaction.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={transaction.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Enregistrements" />
            </Section.Item>
            <Section.Item className="p-0">
                <RecordsTable
                    transaction={transaction.data}
                    isLoading={transaction.isLoading}
                />
            </Section.Item>
        </Section.Root>
    )
}
