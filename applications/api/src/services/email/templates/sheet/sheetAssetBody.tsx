import { Style, css, cx } from "hono/css"
import { Fragment } from "hono/jsx/jsx-runtime"
import { toRoman } from "../../../toRoman"
import { FormatPrice } from "../components/price/formatPrice"
import { Table } from "../components/table/table"
import { SheetAsset } from "./groupSheets"


type SheetAssetBody = {
    sheets: Array<SheetAsset>
    increment: number
    displayNumber?: boolean
}

export function SheetAssetBody(props: SheetAssetBody) {
    return (
        <Fragment>
            <Style />
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
                                        <Fragment>
                                            <Table.Body.Cell align="right">
                                                <FormatPrice price={entry.gross} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell align="right">
                                                <FormatPrice price={entry.allowance} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell align="right">
                                                <FormatPrice price={entry.net} />
                                            </Table.Body.Cell>
                                        </Fragment>
                                    )
                                }
                            </Table.Body.Row>
                            <SheetAssetBody
                                sheets={entry.sheets}
                                increment={props.increment + 1}
                            />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}