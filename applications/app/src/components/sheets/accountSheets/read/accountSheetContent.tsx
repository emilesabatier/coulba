import { ButtonGhost, ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull, FormatSelect, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readAccountSheetRoute } from "../../../routes/auth/app/configuration/accountSheets/readAccountSheet.route"
import { router } from "../../../routes/router"
import { accountSheetOptions } from "../../../services/api/auth/accountSheets/accountSheetsOptions"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteAccountSheet } from "../delete/deleteAccountSheetSheet"
import { FormatAccountSheetWithFetch } from "../format/formatAccountSheetSheetWithFetch"
import { systemOptions } from "../systemOptions"
import { UpdateAccountSheet } from "../update/updateAccountSheetSheet"


export function AccountSheetContent() {
    const { idAccountSheet } = useParams({ from: readAccountSheetRoute.id })
    const accountSheet = useQuery(accountSheetOptions(idAccountSheet))

    if (accountSheet.isLoading) return <CircularLoader />
    if (accountSheet.isError) return <ErrorMessage message={accountSheet.error.message} />
    if (!accountSheet.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/configuration/comptes" })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateAccountSheet accountSheet={accountSheet.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateAccountSheet>
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    <DeleteAccountSheet accountSheet={accountSheet.data}>
                        <ButtonGhost
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteAccountSheet>
                </div>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Informations" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Numéro">
                        <FormatText text={accountSheet.data.number.toString()} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Libellé">
                        <FormatText text={accountSheet.data.label} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Système minimal">
                        <FormatSelect option={accountSheet.data.system} options={systemOptions} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Compte parent">
                        {!accountSheet.data.idParent ? <FormatNull /> : <FormatAccountSheetWithFetch idAccountSheet={accountSheet.data.idParent} />}
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <Section.Title title="Métadonnées" />
            </Section.Item>
            <Section.Item>
                <DataBlock.Root>
                    <DataBlock.Item label="Ajouté le">
                        <FormatDateTime isoDate={accountSheet.data.createdOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Ajouté par">
                        {!accountSheet.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={accountSheet.data.createdBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié le">
                        <FormatDateTime isoDate={accountSheet.data.lastUpdatedOn} />
                    </DataBlock.Item>
                    <DataBlock.Item label="Modifié par">
                        {!accountSheet.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={accountSheet.data.lastUpdatedBy} />}
                    </DataBlock.Item>
                    <DataBlock.Item label="Id">
                        <FormatText text={accountSheet.data.id} />
                    </DataBlock.Item>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
