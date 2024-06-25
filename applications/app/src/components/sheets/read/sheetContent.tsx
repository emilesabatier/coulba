import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatPrice, FormatSelect, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import { readSheetRoute } from "../../../routes/auth/configuration/sheets/readSheet.route"
import { router } from "../../../routes/router"
import { sheetOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { AccountSheetsTable } from "../../accountSheets/accountSheetsTable"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Title } from "../../layouts/title"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteSheet } from "../delete/deleteSheet"
import { FormatSheetWithFetch } from "../format/formatSheetWithFetch"
import { sideOptions } from "../sideOptions"
import { UpdateSheet } from "../update/updateSheet"


export function SheetContent() {
    const { idSheet } = useParams({ from: readSheetRoute.id })
    const sheet = useQuery(sheetOptions(idSheet))

    if (sheet.isLoading) return <CircularLoader className="m-3" />
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
                <div className="ml-auto flex justify-end items-center gap-1.5">
                    <DeleteSheet sheet={sheet.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteSheet>
                </div>
            </Section.Item>
            <Section.Item className="flex-col">
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Numéro">
                            <FormatText text={sheet.data.number.toString()} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Libellé">
                            <FormatText text={sheet.data.label} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Côté">
                            <FormatSelect option={sheet.data.side} options={sideOptions} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Poste parent">
                            {!sheet.data.idParent ? <FormatNull /> : <FormatSheetWithFetch idSheet={sheet.data.idParent} />}
                        </DataBlock.Item>
                        {
                            (sheet.data.side === "liability") ? null : (
                                <Fragment>
                                    <DataBlock.Item label="Montant brut ajouté">
                                        <FormatPrice price={sheet.data.addedGrossAmount} />
                                    </DataBlock.Item>
                                    <DataBlock.Item label="Montant amortissements et dépréciations ajouté">
                                        <FormatPrice price={sheet.data.addedAllowanceAmount} />
                                    </DataBlock.Item>
                                </Fragment>
                            )
                        }
                        <DataBlock.Item label="Montant net ajouté">
                            <FormatPrice price={Number(sheet.data.addedGrossAmount) + Number(sheet.data.addedAllowanceAmount)} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Métadonnées" />
                    </DataBlock.Header>
                    <DataBlock.Content>
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
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <AccountSheetsTable
                    sheet={sheet.data}
                    isLoading={sheet.isLoading}
                />
            </Section.Item>
        </Section.Root>
    )
}
