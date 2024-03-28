import { FormatPrice, FormatText } from "@coulba/design/formats"
import { Table } from "../../layouts/table/table"
import { SheetAsset } from "./sheetContent"


type SheetAssetsTable = {
    sheet: SheetAsset[]
}

export function SheetAssetsTable(props: SheetAssetsTable) {
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch border border-neutral/20 rounded-md">
            <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto">
                <Table.Root>
                    <Table.Header.Root>
                        <Table.Header.Row>
                            <Table.Header.Cell />
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Brut</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Amort. & Dépre.</span>
                            </Table.Header.Cell>
                            <Table.Header.Cell>
                                <span className="text-neutral/75 text-sm">Net</span>
                            </Table.Header.Cell>
                        </Table.Header.Row>
                    </Table.Header.Root>
                    <Table.Body.Root>
                        {
                            props.sheet.map((entry) => {
                                return (
                                    <Table.Body.Row key={entry.key} className="border-neutral/5">
                                        <Table.Body.Cell>
                                            <FormatText text={entry.label} />
                                        </Table.Body.Cell>
                                        <Table.Body.Cell>
                                            <FormatPrice price={entry.gross} />
                                        </Table.Body.Cell>
                                        <Table.Body.Cell>
                                            <FormatPrice price={entry.allowance} />
                                        </Table.Body.Cell>
                                        <Table.Body.Cell>
                                            <FormatPrice price={entry.net} />
                                        </Table.Body.Cell>
                                    </Table.Body.Row>
                                )
                            })
                        }
                    </Table.Body.Root>
                </Table.Root>
            </div>
        </div>
    )
}
