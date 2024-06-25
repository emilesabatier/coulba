import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDateTime, FormatNull, FormatSelect, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readAccountSheetRoute } from "../../../routes/auth/configuration/sheets/accountSheets/readAccountSheet.route"
import { router } from "../../../routes/router"
import { accountSheetOptions } from "../../../services/api/auth/accountSheets/accountSheetsOptions"
import { FormatAccountWithFetch } from "../../accounts/format/formatAccountWithFetch"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { Title } from "../../layouts/title"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteAccountSheet } from "../delete/deleteAccountSheet"
import { flowOptions } from "../flowOptions"
import { UpdateAccountSheet } from "../update/updateAccountSheet"


export function AccountSheetContent() {
    const { idSheet, idAccountSheet } = useParams({ from: readAccountSheetRoute.id })
    const accountSheet = useQuery(accountSheetOptions(idAccountSheet))

    if (accountSheet.isLoading) return <CircularLoader className="m-3" />
    if (accountSheet.isError) return <ErrorMessage message={accountSheet.error.message} />
    if (!accountSheet.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({
                            to: "/configuration/bilan/$idSheet",
                            params: { idSheet: idSheet }
                        })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateAccountSheet accountSheet={accountSheet.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateAccountSheet>
                </div>
                <div className="ml-auto flex justify-end items-center gap-1.5">
                    <DeleteAccountSheet accountSheet={accountSheet.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteAccountSheet>
                </div>
            </Section.Item>
            <Section.Item className="flex-col">
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Compte lié">
                            <FormatAccountWithFetch idAccount={accountSheet.data.idAccount} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Flux">
                            <FormatSelect option={accountSheet.data.flow} options={flowOptions} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Colonne brut ?">
                            <FormatBoolean boolean={!accountSheet.data.isAllowance} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Métadonnées" />
                    </DataBlock.Header>
                    <DataBlock.Content>
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
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
        </Section.Root>
    )
}
