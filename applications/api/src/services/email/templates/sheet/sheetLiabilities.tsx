import { css } from "hono/css"
import { Table } from "../components/table/table.js"
import { FormatPrice } from "../components/price/formatPrice.js"
import { SheetLiability } from "./groupSheets.js"
import { SheetLiabilityBody } from "./sheetLiabilityBody.js"


type SheetLiabilities = {
    sheets: Array<SheetLiability>
}

export function SheetLiabilities(props: SheetLiabilities) {
    const totalNetSheetLiabilities = props.sheets.reduce<number>((previous, entry) => previous + Number(entry.net), 0)
    return (
        <Table.Root class={css`margin-top: 32px;`}>
            <Table.Header.Root>
                <Table.Header.Row>
                    <Table.Header.Cell>
                        <span class={css`color: #333333;`}>
                            PASSIF
                        </span>
                    </Table.Header.Cell>
                    <Table.Header.Cell align="right">
                        <span class={css`color: #333333;`}>
                            Net
                        </span>
                    </Table.Header.Cell>
                </Table.Header.Row>
            </Table.Header.Root>
            <Table.Body.Root>
                {
                    props.sheets.length > 0 ? (
                        <SheetLiabilityBody
                            sheets={props.sheets}
                            displayNumber={true}
                            increment={0}
                        />
                    )
                        : (
                            <Table.Body.Row>
                                <Table.Body.Cell>
                                    <span class={css`color: #333333;`}>
                                        /
                                    </span>
                                </Table.Body.Cell>
                            </Table.Body.Row>
                        )
                }
                <Table.Body.Row>
                    <Table.Body.Cell align="right" class={css`border-top: 1px solid #111111; border-bottom: 0px;`}>
                        <span class={css`white-space: normal; font-weight: bold;`}>
                            Total
                        </span>
                    </Table.Body.Cell>
                    <Table.Body.Cell align="right" class={css`border-top: 1px solid #111111; border-bottom: 0px;`}>
                        <FormatPrice price={totalNetSheetLiabilities} />
                    </Table.Body.Cell>
                </Table.Body.Row>
            </Table.Body.Root>
        </Table.Root>
    )
}
