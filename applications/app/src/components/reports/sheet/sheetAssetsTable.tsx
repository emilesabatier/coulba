import { FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { cn } from "@coulba/design/services"
import { Fragment } from "react"
import { toRoman } from "../../../services/toRoman"
import { Table } from "../../layouts/table/table"
import { SheetAsset } from "./groupSheets"


type SheetAssetsTable = {
    sheet: SheetAsset[]
}

export function SheetAssetsTable(props: SheetAssetsTable) {
    return (
        <Table.Root className="border-r border-neutral/10">
            <Table.Header.Root>
                <Table.Header.Row>
                    <Table.Header.Cell />
                    <Table.Header.Cell className="w-[1%]" align="right">
                        <span className="text-neutral/75 text-sm">Brut</span>
                    </Table.Header.Cell>
                    <Table.Header.Cell className="w-[1%]" align="right">
                        <span className="text-neutral/75 text-sm whitespace-nowrap">Amort. & Dépre.</span>
                    </Table.Header.Cell>
                    <Table.Header.Cell className="w-[1%]" align="right">
                        <span className="text-neutral/75 text-sm">Net</span>
                    </Table.Header.Cell>
                </Table.Header.Row>
            </Table.Header.Root>
            <Table.Body.Root>
                {
                    props.sheet.length > 0 ? (
                        <SheetAssetBody
                            sheet={props.sheet}
                            displayNumber={true}
                            increment={0}
                        />
                    )
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


type SheetAssetBody = {
    sheet: SheetAsset[]
    increment: number
    displayNumber?: boolean
}

function SheetAssetBody(props: SheetAssetBody) {
    return (
        <Fragment>
            {
                props.sheet.map((entry) => {
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
                                    entry.sheets.length > 0 ? (
                                        <Table.Body.Cell colSpan={3} />
                                    ) : (
                                        <Fragment>
                                            <Table.Body.Cell className="w-[1%]" align="right">
                                                <FormatPrice price={entry.gross} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell className="w-[1%]" align="right">
                                                <FormatPrice price={entry.allowance} />
                                            </Table.Body.Cell>
                                            <Table.Body.Cell className="w-[1%]" align="right">
                                                <FormatPrice price={entry.net} />
                                            </Table.Body.Cell>
                                        </Fragment>
                                    )
                                }
                            </Table.Body.Row>
                            <SheetAssetBody sheet={entry.sheets} increment={props.increment + 1} />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}
