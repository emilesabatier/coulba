import { FormatPrice, FormatText } from "@coulba/design/formats"
import { Table } from "../../layouts/table/table"
import { Balance } from "./balanceContent"


type BalanceTable = {
    balance: Balance[]
}

export function BalanceTable(props: BalanceTable) {
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch border border-neutral/20 rounded-md">
            <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto">
                <Table.Root>
                    <Table.Header.Root>
                        <Table.Header.Row>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Compte</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Débit</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Crédit</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Solde débiteur</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Solde créditeur</span>
                            </Table.Header.Cell>
                        </Table.Header.Row>
                    </Table.Header.Root>
                    <Table.Body.Root>
                        {
                            props.balance.map((entry) => {
                                return (
                                    <Table.Body.Row key={entry.key} className="border-neutral/5">
                                        <Table.Body.Cell>
                                            <FormatText text={entry.label} />
                                        </Table.Body.Cell>
                                        <Table.Body.Cell>
                                            <FormatPrice price={entry.sum.debit} />
                                        </Table.Body.Cell>
                                        <Table.Body.Cell>
                                            <FormatPrice price={entry.sum.credit} />
                                        </Table.Body.Cell>
                                        <Table.Body.Cell>
                                            <FormatPrice price={entry.balance.debit} />
                                        </Table.Body.Cell>
                                        <Table.Body.Cell>
                                            <FormatPrice price={entry.balance.credit} />
                                        </Table.Body.Cell>
                                    </Table.Body.Row>
                                )
                            })
                        }
                    </Table.Body.Root>
                </Table.Root>
            </div>
        </div>
    )
}
