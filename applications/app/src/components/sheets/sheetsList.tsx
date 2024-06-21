import { ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { ComponentProps, Fragment } from "react"
import * as v from "valibot"
import { sheetsOptions } from "../../services/api/auth/sheets/sheetsOptions"
import { toRoman } from "../../services/toRoman"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateSheet } from "./create/createSheet"
import { ReadSheet } from "./read/readSheet"
import { Title } from "../layouts/title"


type GroupedSheet = {
    sheet: v.Output<typeof auth.sheets.get.return>
    subSheets: GroupedSheet[]
}

function groupSheets(sheets: v.Output<typeof auth.sheets.get.return>[], idParent?: string | null) {
    if (sheets.length === 0) return []
    return sheets
        .filter((sheet) => sheet.idParent === idParent)
        .map((sheet) => {
            const subSheets = groupSheets(sheets, sheet.id) as GroupedSheet[]
            return ({
                sheet: sheet,
                subSheets: subSheets
            })
        }) as GroupedSheet[]
}

export function SheetsList() {
    const sheets = useQuery(sheetsOptions)

    const groupedSheetsAssets = groupSheets(sheets.data ?? [], null)
        .filter((group) => group.sheet.side === "asset")
        .sort((a, b) => a.sheet.number - b.sheet.number)

    const groupedSheetsLiabilities = groupSheets(sheets.data ?? [], null)
        .filter((group) => group.sheet.side === "liability")
        .sort((a, b) => a.sheet.number - b.sheet.number)

    if (sheets.isLoading) return <CircularLoader className="m-3" />
    if (sheets.isError) return <ErrorMessage message={sheets.error.message} />
    if (!sheets.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <CreateSheet>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter"
                    />
                </CreateSheet>
            </Section.Item>
            <Section.Item>
                <div className="w-full grid grid-cols-2 grid-rows-[max-content_auto] rounded-md border border-neutral/10">
                    <div className="col-start-1 col-end-1 row-start-1 row-end-1 w-full h-full p-3 border-b border-r border-neutral/10">
                        <Title title="Actif" />
                    </div>
                    <div className="col-start-1 col-end-1 row-start-2 row-end-2 w-full h-full border-r border-neutral/10 p-0 flex-col justify-start items-stretch gap-0">
                        {
                            (groupedSheetsAssets.length > 0) ? groupedSheetsAssets.map((groupedSheet) => (
                                <SheetItem
                                    key={groupedSheet.sheet.id}
                                    groupedSheet={groupedSheet}
                                    level={0}
                                />
                            ))
                                : (
                                    <FormatNull className="p-3" />
                                )
                        }
                    </div>
                    <div className="col-start-2 col-end-2 row-start-1 row-end-1 w-full h-full p-3 border-b border-neutral/10">
                        <Title title="Passif" />
                    </div>
                    <div className="col-start-2 col-end-2 row-start-2 row-end-2 w-full h-full p-0 flex-col justify-start items-stretch gap-0">
                        {
                            (groupedSheetsLiabilities.length > 0) ? groupedSheetsLiabilities.map((groupedSheet) => (
                                <SheetItem
                                    key={groupedSheet.sheet.id}
                                    groupedSheet={groupedSheet}
                                    level={0}
                                />
                            ))
                                : (
                                    <FormatNull className="p-3" />
                                )
                        }
                    </div>
                </div>
            </Section.Item>
        </Section.Root>
    )
}



type SheetItem = {
    groupedSheet: GroupedSheet
    level: number
    className?: ComponentProps<'div'>['className']
}

function SheetItem(props: SheetItem) {
    return (
        <Fragment>
            <ReadSheet idSheet={props.groupedSheet.sheet.id} className="w-full">
                <div
                    className="w-full flex justify-start items-start gap-1.5 p-3 border-b border-neutral/5 hover:bg-neutral/5"
                    style={{
                        paddingLeft: `${(1 + props.level) * 12}px`
                    }}
                >
                    {props.level > 0 ? null : (
                        <span className="text-neutral font-bold">{toRoman(props.groupedSheet.sheet.number)}</span>
                    )}
                    <span className={cn(
                        "text-neutral text-left",
                        props.level === 0 ? "font-bold" : ""
                    )}>
                        {props.groupedSheet.sheet.label}
                    </span>
                </div>
            </ReadSheet>
            {
                props.groupedSheet.subSheets
                    .sort((a, b) => a.sheet.number - b.sheet.number)
                    .map((groupedSubSheet) => (
                        <SheetItem
                            key={groupedSubSheet.sheet.id}
                            groupedSheet={groupedSubSheet}
                            level={props.level + 1}
                        />
                    ))
            }
        </Fragment>
    )
}
