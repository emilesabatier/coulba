import { FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import * as v from "valibot"
import { toRoman } from "../../../services/toRoman"
import { Table } from "../../layouts/table/table"
import { Statement } from "./groupStatements"


type StatementTable = {
    statements: Statement[]
    computations: Array<v.Output<typeof auth.computations.get.return>>
}

export function StatementTable(props: StatementTable) {
    return (
        <Table.Root>
            <Table.Header.Root>
                <Table.Header.Row>
                    <Table.Header.Cell />
                    <Table.Header.Cell className="w-[1%]" align="right">
                        <span className="text-neutral/75 text-sm">Net</span>
                    </Table.Header.Cell>
                </Table.Header.Row>
            </Table.Header.Root>
            <Table.Body.Root>
                <StatementBody
                    statements={props.statements}
                    displayNumber={true}
                    increment={0}
                />
            </Table.Body.Root>
            <Table.Body.Root>
                {
                    props.computations.length > 0 ?
                        props.computations.map((computation, index) => {
                            const computationStatements = (computation.computationStatements)
                                .map((computationStatement) => ({
                                    ...computationStatement,
                                    statement: props.statements.find((_statement) => _statement.id === computationStatement.idStatement)
                                }))
                                .sort((a, b) => {
                                    if (!a.statement || !b.statement) return 0
                                    return (a.statement.number - b.statement.number)
                                })

                            const sum = computationStatements.reduce((sum, computationStatement) => {
                                if (!computationStatement.statement) return sum
                                if (computationStatement.operation === "plus") sum += computationStatement.statement.net
                                if (computationStatement.operation === "minus") sum += -computationStatement.statement.net
                                return sum
                            }, 0)
                            const statementsLabel = computationStatements.map((computationStatement, computationStatementIndex) => {
                                if (!computationStatement.statement) return ""
                                const romanNumber = toRoman(computationStatement.statement.number)
                                if (computationStatement.operation === "plus") {
                                    if (computationStatementIndex === 0) return `${romanNumber}`
                                    return `+${romanNumber}`
                                }
                                if (computationStatement.operation === "minus") return `-${romanNumber}`
                                return 0
                            }).join("")

                            return (
                                <Table.Body.Row
                                    key={computation.id}
                                    className={cn(
                                        "",
                                        index === 0 ? "border-t border-neutral/25 border-b-neutral/5" : ""
                                    )}
                                >
                                    <Table.Body.Cell align="right" className="w-full flex justify-end gap-2">
                                        <FormatText
                                            text={computation.label}
                                            className={"whitespace-normal text-right"}
                                        />
                                        <FormatText
                                            text={`(${statementsLabel})`}
                                            className={"whitespace-normal text-right text-neutral/50"}
                                        />
                                    </Table.Body.Cell>
                                    <Table.Body.Cell className="w-[1%]" align="right">
                                        <FormatPrice price={sum} />
                                    </Table.Body.Cell>
                                </Table.Body.Row>
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
            </Table.Body.Root>
        </Table.Root>
    )
}


type StatementBody = {
    statements: Statement[]
    increment: number
    displayNumber?: boolean
}

function StatementBody(props: StatementBody) {
    return (
        <Fragment>
            {
                props.statements.map((entry) => {
                    const label = !props.displayNumber ? entry.label : `${toRoman(entry.number)} ${entry.label}`
                    return (
                        <Fragment key={entry.id}>
                            <Table.Body.Row
                                className={cn(
                                    "",
                                    props.displayNumber ? "bg-neutral/5" : ""
                                )}
                            >
                                <Table.Body.Cell style={{ paddingLeft: `${props.increment * 16 + 8}px` }} >
                                    <FormatText
                                        text={label}
                                        className={cn(
                                            "whitespace-normal",
                                            props.displayNumber ? "font-bold" : ""
                                        )}
                                    />
                                </Table.Body.Cell>
                                {
                                    entry.statements.length > 0 ? (
                                        <Table.Body.Cell />
                                    ) : (
                                        <Table.Body.Cell className="w-[1%]" align="right">
                                            <FormatPrice price={entry.net} />
                                        </Table.Body.Cell>
                                    )
                                }
                            </Table.Body.Row>
                            <StatementBody statements={entry.statements} increment={props.increment + 1} />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}
