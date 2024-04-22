import { FormatPrice, FormatText } from "@coulba/design/formats"
import { cn } from "@coulba/design/services"
import { Fragment } from "react"
import { toRoman } from "../../../services/toRoman"
import { Table } from "../../layouts/table/table"
import { SheetLiability } from "./sheetContent"


type SheetLiabilitiesTable = {
    sheet: SheetLiability[]
}

export function SheetLiabilitiesTable(props: SheetLiabilitiesTable) {
    return (
        <div className="w-full flex flex-col justify-start items-stretch border border-neutral/20 rounded-md">
            <div className="w-full flex flex-col justify-start items-stretch overflow-auto">
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
                        <SheetLiabilityBody sheet={props.sheet} displayNumber={true} increment={0} />
                    </Table.Body.Root>
                </Table.Root>
            </div>
        </div>
    )
}


type SheetLiabilityBody = {
    sheet: SheetLiability[]
    increment: number
    displayNumber?: boolean
}

function SheetLiabilityBody(props: SheetLiabilityBody) {
    return (
        <Fragment>
            {
                props.sheet.map((entry) => {
                    const label = !props.displayNumber ? entry.label : `${toRoman(entry.number)} ${entry.label}`
                    return (
                        <Fragment>
                            <Table.Body.Row
                                key={entry.key}
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
                                    <FormatPrice price={entry.net} />
                                </Table.Body.Cell>
                            </Table.Body.Row>
                            <SheetLiabilityBody sheet={entry.sheets} increment={props.increment + 1} />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}
