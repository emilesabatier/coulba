import { css, cx } from "hono/css"
import { Fragment } from "hono/jsx/jsx-runtime"
import { Table } from "../components/table/table.js"
import { toRoman } from "../../../toRoman.js"
import { FormatPrice } from "../components/price/formatPrice.js"
import { SheetLiability } from "./groupSheets.js"


type SheetLiabilityBody = {
    sheets: Array<SheetLiability>
    increment: number
    displayNumber?: boolean
}

export function SheetLiabilityBody(props: SheetLiabilityBody) {
    return (
        <Fragment>
            {
                props.sheets.map((entry) => {
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
                                    entry.sheets.length > 0 ? (
                                        <Table.Body.Cell colSpan={3} />
                                    ) : (
                                        <Table.Body.Cell align="right">
                                            <FormatPrice price={entry.net} />
                                        </Table.Body.Cell>
                                    )
                                }
                            </Table.Body.Row>
                            <SheetLiabilityBody sheets={entry.sheets} increment={props.increment + 1} />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}
