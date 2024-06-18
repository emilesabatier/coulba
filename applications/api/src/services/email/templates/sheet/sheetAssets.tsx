import { Style, css } from "hono/css"
import { FormatPrice } from "../components/price/formatPrice.js"
import { Table } from "../components/table/table.js"
import { SheetAsset } from "./groupSheets.js"
import { SheetAssetBody } from "./sheetAssetBody.js"


type SheetAssets = {
    sheets: Array<SheetAsset>
}

export function SheetAssets(props: SheetAssets) {
    const totalGrossSheetAssets = props.sheets.reduce<number>((previous, entry) => previous + Number(entry.gross), 0)
    const totalAllowanceSheetAssets = props.sheets.reduce<number>((previous, entry) => previous + Number(entry.allowance), 0)
    return (
        <>
            <Style />
            <Table.Root>
                <Table.Header.Root>
                    <Table.Header.Row>
                        <Table.Header.Cell>
                            <span class={css`color: #333333;`}>
                                ACTIF
                            </span>
                        </Table.Header.Cell>
                        <Table.Header.Cell align="right">
                            <span class={css`color: #333333;`}>
                                Brut
                            </span>
                        </Table.Header.Cell>
                        <Table.Header.Cell align="right">
                            <span class={css`color: #333333; font-size: 0.75rem;`}>
                                Amortissements & dépréciations
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
                            <SheetAssetBody
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
                            <FormatPrice price={totalGrossSheetAssets} />
                        </Table.Body.Cell>
                        <Table.Body.Cell align="right" class={css`border-top: 1px solid #111111; border-bottom: 0px;`}>
                            <FormatPrice price={totalAllowanceSheetAssets} />
                        </Table.Body.Cell>
                        <Table.Body.Cell align="right" class={css`border-top: 1px solid #111111; border-bottom: 0px;`}>
                            <FormatPrice price={totalGrossSheetAssets - totalAllowanceSheetAssets} />
                        </Table.Body.Cell>
                    </Table.Body.Row>
                </Table.Body.Root>
            </Table.Root>
        </>
    )
}
