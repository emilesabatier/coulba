import { auth } from "@coulba/schemas/routes"
import { css } from "hono/css"
import { Fragment } from "hono/jsx/jsx-runtime"
import * as v from "valibot"
import { Table } from "../components/table/table.js"
import { Statement } from "./groupStatements.js"
import { toRoman } from "../../../toRoman.js"
import { FormatPrice } from "../components/price/formatPrice.js"
import { StatementBody } from "./statementBody.js"


type StatementTable = {
    statements: Array<Statement>
    computations: Array<v.Output<typeof auth.computations.get.return>>
}

export function StatementTable(props: StatementTable) {
    return (
        <Table.Root>
            <Table.Header.Root>
                <Table.Header.Row>
                    <Table.Header.Cell />
                    <Table.Header.Cell align="right">
                        <span class={css`color: #333333;`}>
                            Net
                        </span>
                    </Table.Header.Cell>
                </Table.Header.Row>
            </Table.Header.Root>
            <Table.Body.Root>
                <StatementBody
                    statements={props.statements}
                    displayNumber={true}
                    increment={0}
                />
                {
                    props.computations.length > 0 ? (
                        <Fragment>
                            {props.computations.map((computation, index) => {
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
                                    <Table.Body.Row>
                                        <Table.Body.Cell align="right" class={css`border-top: 1px solid #111111; border-bottom: 0px;`}>
                                            <span class={css`color: #333333; text-align: right;`}>
                                                {computation.label}
                                            </span>
                                            <span class={css`font-size: 0.75rem; text-align: right; margin-left: 0.5rem;`}>
                                                ({statementsLabel})
                                            </span>
                                        </Table.Body.Cell>
                                        <Table.Body.Cell align="right" class={css`border-top: 1px solid #111111; border-bottom: 0px;`}>
                                            <FormatPrice price={sum} />
                                        </Table.Body.Cell>
                                    </Table.Body.Row>
                                )
                            })}
                        </Fragment>
                    ) : (
                        <Table.Body.Row>
                            <Table.Body.Cell>
                                <span class={css`color: #333333;`}>
                                    /
                                </span>
                            </Table.Body.Cell>
                        </Table.Body.Row>
                    )
                }
            </Table.Body.Root>
        </Table.Root>
    )
}