import { css, cx } from "hono/css"
import { Fragment } from "hono/jsx"
import { toRoman } from "../../../toRoman.js"
import { FormatPrice } from "../components/price/formatPrice.js"
import { Table } from "../components/table/table.js"
import { Statement } from "./groupStatements.js"


type StatementBody = {
    statements: Array<Statement>
    increment: number
    displayNumber?: boolean
}

export function StatementBody(props: StatementBody) {
    return (
        <Fragment>
            {
                props.statements.map((entry) => {
                    const label = !props.displayNumber ? entry.label : `${toRoman(entry.number)} ${entry.label}`
                    return (
                        <Fragment key={entry.id}>
                            <Table.Body.Row>
                                <Table.Body.Cell style={{ paddingLeft: `${props.increment * 16 + 8}px` }} >
                                    <span
                                        class={cx(
                                            css`white-space: normal;`,
                                            props.displayNumber ? css`font-weight: bold;` : undefined
                                        )}
                                    >
                                        {label}
                                    </span>
                                </Table.Body.Cell>
                                {
                                    entry.statements.length > 0 ? (
                                        <Table.Body.Cell />
                                    ) : (
                                        <Table.Body.Cell align="right">
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
