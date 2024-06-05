import { FormatPrice, FormatText } from "@coulba/design/formats"
import { cn } from "@coulba/design/services"
import { Fragment } from "react"
import { toRoman } from "../../../services/toRoman"
import { Table } from "../../layouts/table/table"
import { SheetAsset } from "./sheetReport"


type SheetAssetsTable = {
    sheet: SheetAsset[]
}

export function SheetAssetsTable(props: SheetAssetsTable) {
    return (
        <div className="w-full flex flex-col justify-start items-stretch border-r border-neutral/10">
            <div className="w-full flex flex-col justify-start items-stretch overflow-auto">
                <Table.Root>
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
                        <SheetAssetBody sheet={props.sheet} displayNumber={true} increment={0} />
                    </Table.Body.Root>
                </Table.Root>
            </div>
        </div>
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
                                <Table.Body.Cell className="w-[1%]" align="right">
                                    <FormatPrice price={entry.gross} />
                                </Table.Body.Cell>
                                <Table.Body.Cell className="w-[1%]" align="right">
                                    <FormatPrice price={entry.allowance} />
                                </Table.Body.Cell>
                                <Table.Body.Cell className="w-[1%]" align="right">
                                    <FormatPrice price={entry.net} />
                                </Table.Body.Cell>
                            </Table.Body.Row>
                            <SheetAssetBody sheet={entry.sheets} increment={props.increment + 1} />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}
