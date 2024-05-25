import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatDate, FormatDateTime, FormatFileSize, FormatNull, FormatText } from "@coulba/design/formats"
import { IconEye, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { attachmentsOptions } from "../../services/api/auth/attachments/attachmentsOptions"
import { Table } from "../layouts/table"
import { CreateAttachment } from "./create/createAttachment"
import { ReadAttachment } from "./read/readAttachment"


export function AttachmentsTable() {
    const attachments = useQuery(attachmentsOptions)

    const attachmentsData = (attachments.data ?? [])
        .sort((a, b) => b.date.localeCompare(a.date))

    return (
        <Table
            data={attachmentsData}
            isLoading={attachments.isLoading}
            columns={[
                {
                    id: 'actions',
                    header: () => null,
                    cell: ({ cell }) => {
                        return (
                            <ReadAttachment idAttachment={cell.row.original.id}>
                                <ButtonGhost
                                    icon={<IconEye />}
                                />
                            </ReadAttachment>
                        )
                    }
                },
                {
                    accessorKey: 'reference',
                    header: 'Référence',
                    cell: ({ row }) => (<FormatText text={row.original.reference} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'label',
                    header: "Libellé",
                    cell: ({ row }) => (!row.original.label ? <FormatNull /> : <FormatText text={row.original.label} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'date',
                    header: "Date",
                    cell: ({ row }) => (<FormatDate isoDate={row.original.date} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'type',
                    header: "Type",
                    cell: ({ row }) => (row.original.type.split("/").at(1)),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'size',
                    header: "Taille",
                    cell: ({ row }) => (<FormatFileSize size={row.original.size} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'createdOn',
                    header: "Ajouté le",
                    cell: (context) => (<FormatDateTime isoDate={String(context.getValue())} />),
                    filterFn: 'includesString'
                }
            ]}
        >
            <CreateAttachment>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter un fichier"
                    className="border-dashed"
                />
            </CreateAttachment>
        </Table>
    )
}
