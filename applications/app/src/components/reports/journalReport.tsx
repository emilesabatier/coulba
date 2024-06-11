import { FormatDate, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react/jsx-runtime"
import { recordsOptions } from "../../services/api/auth/records/recordsOptions"
import { FormatAccountWithFetch } from "../accounts/format/formatAccountWithFetch"
import { Section } from "../layouts/section/section"
import { Table } from "../layouts/table/table"


export function JournalReport() {
    const records = useQuery(recordsOptions)

    const recordsData = (records.data ?? [])
        .filter((record) => record.isValidated)
        .sort((a, b) => b.date.localeCompare(a.date))

    const totalDebit = recordsData.reduce<number>((sum, record) => {
        return sum + record.rows.reduce((_sum, row) => {
            return _sum + Number(row.debit)
        }, 0)
    }, 0)

    const totalCredit = recordsData.reduce<number>((sum, record) => {
        return sum + record.rows.reduce((_sum, row) => {
            return _sum + Number(row.credit)
        }, 0)
    }, 0)

    return (
        <Section.Root>
            <Section.Item className="p-0">
                <Table.Root>
                    <Table.Header.Root>
                        <Table.Header.Row>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Date</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Libellé</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Compte</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Débit</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell className="w-[1%]" align="right">
                                <span className="text-neutral/75 text-sm whitespace-nowrap">Crédit</span>
                            </Table.Header.Cell>
                        </Table.Header.Row>
                    </Table.Header.Root>
                    <Table.Body.Root className="border-y border-neutral/10 last:border-b-0">
                        <Table.Body.Row>
                            <Table.Body.Cell colSpan={2} />
                            <Table.Body.Cell align="right">
                                <span className="text-neutral/50">Total</span>
                            </Table.Body.Cell>
                            <Table.Body.Cell className="w-[1%]" align="right">
                                <FormatPrice price={totalDebit} className="font-bold" />
                            </Table.Body.Cell>
                            <Table.Body.Cell className="w-[1%]" align="right">
                                <FormatPrice price={totalCredit} className="font-bold" />
                            </Table.Body.Cell>
                        </Table.Body.Row>
                    </Table.Body.Root>
                    <Fragment>
                        {
                            recordsData.length > 0 ?
                                recordsData.map((record) => {
                                    return (
                                        <Table.Body.Root key={record.id} className="border-y border-neutral/10 last:border-b-0">
                                            <Table.Body.Row className="border-neutral/10 bg-neutral/5">
                                                <Table.Body.Cell>
                                                    <FormatDate isoDate={record.date} />
                                                </Table.Body.Cell>
                                                <Table.Body.Cell>
                                                    <FormatText text={record.label} />
                                                </Table.Body.Cell>
                                                <Table.Body.Cell colSpan={3} />
                                            </Table.Body.Row>
                                            <Fragment>
                                                {
                                                    record.rows.map((row) => {
                                                        return (
                                                            <Table.Body.Row key={row.id}>
                                                                <Table.Body.Cell />
                                                                <Table.Body.Cell>
                                                                    <FormatText text={row.label} />
                                                                </Table.Body.Cell>
                                                                <Table.Body.Cell>
                                                                    <FormatAccountWithFetch idAccount={row.idAccount} />
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
