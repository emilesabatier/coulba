import { FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { rowsOptions } from "../../../services/api/auth/rows/rowsOptions"
import { formatAccount } from "../../accounts/format/formatAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Table } from "../../layouts/table/table"
import { getBalance } from "./getBalance"


export function BalanceReport() {
    const accounts = useQuery(accountsOptions)
    const rows = useQuery(rowsOptions)

    const accountsData = accounts.data ?? []
    const rowsData = (rows.data ?? [])
        .filter((row) => row.isValidated && row.isComputed)

    const balance = getBalance(rowsData, accountsData)
        .sort((a, b) => a.account.number.toString().localeCompare(b.account.number.toString()))

    const totalDebit = rowsData.reduce<number>((sum, row) => {
        return sum + Number(row.debit)
    }, 0)

    const totalCredit = rowsData.reduce<number>((sum, row) => {
        return sum + Number(row.credit)
    }, 0)

    const totalBalanceDebit = balance.reduce<number>((previous, entry) => {
        return previous + Number(entry.balance.debit)
    }, 0)

    const totalBalanceCredit = balance.reduce<number>((previous, entry) => {
        return previous + Number(entry.balance.credit)
    }, 0)

    if (accounts.isLoading) return <CircularLoader className="m-3" />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!accounts.data) return null
    return (
        <Section.Root>
            <Section.Item className="p-0">
                <Table.Root>
                    <Table.Header.Root>
                        <Table.Header.Row>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Compte</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Débit</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Crédit</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Solde débiteur</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Solde créditeur</span>
                            </Table.Header.Cell>
                        </Table.Header.Row>
                    </Table.Header.Root>
                    <Table.Body.Root className="border-y border-neutral/10 last:border-b-0">
                        <Table.Body.Row>
                            <Table.Body.Cell align="right">
                                <span className="text-neutral/50">Total</span>
                            </Table.Body.Cell>
                            <Table.Body.Cell className="w-[1%]" align="right">
                                <FormatPrice price={totalDebit} className="font-bold" />
                            </Table.Body.Cell>
                            <Table.Body.Cell className="w-[1%]" align="right">
                                <FormatPrice price={totalCredit} className="font-bold" />
                            </Table.Body.Cell>
                            <Table.Body.Cell className="w-[1%]" align="right">
                                <FormatPrice price={totalBalanceDebit} className="font-bold" />
                            </Table.Body.Cell>
                            <Table.Body.Cell className="w-[1%]" align="right">
                                <FormatPrice price={totalBalanceCredit} className="font-bold" />
                            </Table.Body.Cell>
                        </Table.Body.Row>
                    </Table.Body.Root>
                    <Table.Body.Root>
                        {
                            balance.length > 0 ?
                                balance.map((entry) => {
                                    return (
                                        <Table.Body.Row key={entry.account.id} className="border-neutral/5">
                                            <Table.Body.Cell>
                                                <FormatText text={formatAccount(entry.account)} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell className="w-[1%]" align="right">
                                                <FormatPrice price={entry.sum.debit} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell className="w-[1%]" align="right">
                                                <FormatPrice price={entry.sum.credit} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell className="w-[1%]" align="right">
                                                <FormatPrice price={entry.balance.debit} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell className="w-[1%]" align="right">
                                                <FormatPrice price={entry.balance.credit} />
                                            </Table.Body.Cell>
                                        </Table.Body.Row>
                                    )
                                })
                                : (
                                    <Table.Body.Row>
                                        <Table.Body.Cell>
                                            <FormatNull className="" />
                                        </Table.Body.Cell>
                                    </Table.Body.Row>
                                )
                        }
                    </Table.Body.Root>
                </Table.Root>
            </Section.Item>
        </Section.Root>
    )
}
