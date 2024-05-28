import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, CircularLoader } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { IconChevronDown, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { ComponentProps } from "react"
import * as v from "valibot"
import { sheetsOptions } from "../../services/api/auth/sheets/sheetsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateSheet } from "./create/createSheet"
import { DeleteSheet } from "./delete/deleteSheet"
import { UpdateSheet } from "./update/updateSheet"


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
                        text="Ajouter une ligne"
                    />
                </CreateSheet>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Actif" />
            </Section.Item>
            <Section.Item className="flex flex-col justify-start items-stretch gap-1.5">
                <Accordion type="multiple">
                    {
                        (groupedSheetsAssets.length === 0) ? (<FormatNull />) : groupedSheetsAssets.map((groupedSheet) => (
                            <SheetItem
                                key={groupedSheet.sheet.id}
                                groupedSheet={groupedSheet}
                                className="pl-0"
                            />
                        ))
                    }
                </Accordion>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Passif" />
            </Section.Item>
            <Section.Item className="flex flex-col justify-start items-stretch gap-1.5">
                <Accordion type="multiple">
                    {
                        (groupedSheetsLiabilities.length === 0) ? (<FormatNull />) : groupedSheetsLiabilities.map((groupedSheet) => (
                            <SheetItem
                                key={groupedSheet.sheet.id}
                                groupedSheet={groupedSheet}
                                className="pl-0"
                            />
                        ))
                    }
                </Accordion>
            </Section.Item>
        </Section.Root>
    )
}



type SheetItem = {
    groupedSheet: GroupedSheet
    className?: ComponentProps<'div'>['className']
}

function SheetItem(props: SheetItem) {
    const hasSubSheets = props.groupedSheet.subSheets.length > 0

    return (
        <AccordionItem
            disabled={!hasSubSheets}
            value={props.groupedSheet.sheet.id}
            className={cn(
                "pl-4",
                props.className
            )}
        >
            <div className="flex justify-between items-center gap-3 hover:bg-neutral/5 rounded-sm">
                <AccordionTrigger className="w-full flex justify-start items-center ">
                    <div className="flex justify-start items-start gap-2 p-2">
                        <h2 className="font-bold">{props.groupedSheet.sheet.number}</h2>
                        <span className="text-neutral/75 text-left">{props.groupedSheet.sheet.label}</span>
                    </div>
                    <IconChevronDown size={16} className={cn(
                        "stroke-neutral/50 shrink-0",
                        hasSubSheets ? undefined : "opacity-0"
                    )} />
                </AccordionTrigger>
                <div className="flex justify-end items-center gap-1">
                    <UpdateSheet sheet={props.groupedSheet.sheet}>
                        <ButtonGhost
                            icon={<IconPencil />}
                        />
                    </UpdateSheet>
                    <DeleteSheet sheet={props.groupedSheet.sheet}>
                        <ButtonGhost
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteSheet>
                </div>
            </div>
            <AccordionContent>
                <Accordion type="multiple">
                    {
                        props.groupedSheet.subSheets
                            .sort((a, b) => a.sheet.number - b.sheet.number)
                            .map((groupedSubSheet) => (
                                <SheetItem
                                    key={groupedSubSheet.sheet.id}
                                    groupedSheet={groupedSubSheet}
                                />
                            ))
                    }
                </Accordion>
            </AccordionContent>
        </AccordionItem>
    )
}
