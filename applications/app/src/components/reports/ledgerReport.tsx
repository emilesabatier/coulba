import { FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react/jsx-runtime"
import { accountsOptions } from "../../services/api/auth/accounts/accountsOptions"
import { rowsOptions } from "../../services/api/auth/rows/rowsOptions"
import { formatAccount } from "../accounts/format/formatAccount"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { Table } from "../layouts/table/table"


export type Ledger = {
    key: string
    label: string
    debit: number
    credit: number
    rows: {
        key: string
        label: string
        debit: number | string
        credit: number | string
    }[]
}

export function LedgerReport() {
    const rows = useQuery(rowsOptions)
    const accounts = useQuery(accountsOptions)

    const ledger = (rows.data ?? [])
        .filter((row) => row.isValidated && row.isComputed)
        .reduce<Ledger[]>((_ledger, _row) => {

            const row = {
                key: _row.id,
                label: _row.label,
                debit: _row.debit,
                credit: _row.credit
            }

            const currentLedgerEntry = _ledger.find((entry) => entry.key === _row.idAccount)
            if (currentLedgerEntry === undefined) {
                const account = accounts.data?.find((_account) => _account.id === _row.idAccount)
                if (!account) return _ledger
                _ledger.push({
                    key: _row.idAccount,
                    label: formatAccount(account),
                    debit: Number(row.debit),
                    credit: Number(row.credit),
                    rows: [row]
                })
                return _ledger
            }

            currentLedgerEntry.debit += Number(row.debit)
            currentLedgerEntry.credit += Number(row.credit)
            currentLedgerEntry.rows.push(row)

            return _ledger
        }, [])
        .sort((a, b) => a.label.localeCompare(b.label))

    if (rows.isLoading || accounts.isLoading) return <CircularLoader className="m-3" />
    if (rows.isError) return <ErrorMessage message={rows.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!rows.data || !accounts.data) return null
    return (
        <Section.Root>
            <Section.Item className="p-0">
                <Table.Root>
                    <Table.Header.Root>
                        <Table.Header.Row>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Compte</span>
                            </Table.Header.Cell>
                            {/* <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Date</span>
                            </Table.Header.Cell> */}
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Libellé</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Débit</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Crédit</span>
                            </Table.Header.Cell>
                        </Table.Header.Row>
                    </Table.Header.Root>
                    <Fragment>
                        {
                            ledger.length > 0 ?
                                ledger.map((entry) => {
                                    return (
                                        <Table.Body.Root key={entry.key} className="border-y border-neutral/10 last:border-b-0">
                                            <Table.Body.Row className="border-neutral/10 bg-neutral/5">
                                                <Table.Body.Cell colSpan={2}>
                                                    <FormatText text={entry.label} />
                                                </Table.Body.Cell>
                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                    <FormatPrice price={entry.debit} className="font-bold" />
                                                </Table.Body.Cell>
                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                    <FormatPrice price={entry.credit} className="font-bold" />
                                                </Table.Body.Cell>
                                            </Table.Body.Row>
                                            <Fragment>
                                                {
                                                    entry.rows.map((row) => {
                                                        return (
                                                            <Table.Body.Row key={row.key}>
                                                                <Table.Body.Cell />
                                                                <Table.Body.Cell>
                                                                    <FormatText text={row.label} />
                                                                </Table.Body.Cell>
                                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                                    <FormatPrice price={row.debit} />
                                                                </Table.Body.Cell>
                                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                                    <FormatPrice price={row.credit} />
                                                                </Table.Body.Cell>
                                                            </Table.Body.Row>
                                                        )
                                                    })
                                                }
                                            </Fragment>
                                        </Table.Body.Root>
                                    )
                                })
                                : (
                                    <Table.Body.Root className="border-b border-neutral/10 last:border-b-0">
                                        <Table.Body.Row>
                                            <Table.Body.Cell>
                                                <FormatNull className="" />
                                            </Table.Body.Cell>
                                        </Table.Body.Row>
                                    </Table.Body.Root>
                                )
                        }
                    </Fragment>
                </Table.Root>
            </Section.Item>
        </Section.Root>
    )
}
