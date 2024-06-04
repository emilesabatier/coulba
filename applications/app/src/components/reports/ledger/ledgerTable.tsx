import { FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { Fragment } from "react"
import { Table } from "../../layouts/table/table"
import { Ledger } from "./ledgerContent"


type LedgerTable = {
    ledger: Ledger[]
}

export function LedgerTable(props: LedgerTable) {
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch">
            <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto">
                <Table.Root>
                    <Table.Header.Root>
                        <Table.Header.Row>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Compte</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Date</span>
                            </Table.Header.Cell>
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
                            props.ledger.length > 0 ?
                                props.ledger.map((entry) => {
                                    return (
                                        <Table.Body.Root key={entry.key} className="border-y border-neutral/10 last:border-b-0">
                                            <Table.Body.Row className="border-neutral/10 bg-neutral/5">
                                                <Table.Body.Cell colSpan={3}>
                                                    <FormatText text={entry.label} />
                                                </Table.Body.Cell>
                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                    <FormatPrice price={entry.debit} />
                                                </Table.Body.Cell>
                                                <Table.Body.Cell className="w-[1%]" align="right">
                                                    <FormatPrice price={entry.credit} />
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
                                    <Table.Body.Root className="border-y border-neutral/10 last:border-b-0">
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
            </div>
        </div>
    )
}
