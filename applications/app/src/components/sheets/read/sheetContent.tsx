import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatSelect, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readSheetRoute } from "../../../routes/auth/app/configuration/sheets/readSheet.route"
import { router } from "../../../routes/router"
import { sheetOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { AccountSheetsTable } from "../../accountSheets/accountSheetsTable"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteSheet } from "../delete/deleteSheet"
import { FormatSheetWithFetch } from "../format/formatSheetWithFetch"
import { sideOptions } from "../sideOptions"
import { UpdateSheet } from "../update/updateSheet"


export function SheetContent() {
    const { idSheet } = useParams({ from: readSheetRoute.id })
    const sheet = useQuery(sheetOptions(idSheet))

    if (sheet.isLoading) return <CircularLoader />
    if (sheet.isError) return <ErrorMessage message={sheet.error.message} />
    if (!sheet.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/configuration/bilan" })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateSheet sheet={sheet.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateSheet>
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    <DeleteSheet sheet={sheet.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteSheet>
                </div>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Informations" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Numéro">
                        <FormatText text={sheet.data.number.toString()} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Libellé">
                        <FormatText text={sheet.data.label} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Côté">
                        <FormatSelect option={sheet.data.side} options={sideOptions} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ligne parent">
                        {!sheet.data.idParent ? <FormatNull /> : <FormatSheetWithFetch idSheet={sheet.data.idParent} />}
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajouté le">
                        <FormatDateTime isoDate={sheet.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajouté par">
                        {!sheet.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={sheet.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié le">
                        <FormatDateTime isoDate={sheet.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié par">
                        {!sheet.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={sheet.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={sheet.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Comptes utilisés dans le calcul" />
            </Section.Item>
            <Section.Item className="p-0 border-b-0">
                <AccountSheetsTable
                    sheet={sheet.data}
                    isLoading={sheet.isLoading}
                />
            </Section.Item>
        </Section.Root>
    )
}
