import { FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { Balance } from "../../../services/reports/getBalance"
import { formatAccount } from "../../accounts/format/formatAccount"
import { Table } from "../../layouts/table/table"


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
                    <Table.Body.Root>
                        {
                            props.balance.length > 0 ?
                                props.balance.map((entry) => {
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
            </div>
        </div>
    )
}
