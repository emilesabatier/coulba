import { ButtonGhost, ButtonOutline } from "@coulba/design/buttons"
import { FormatNull, formatDate } from "@coulba/design/formats"
import { Chip, CircularLoader } from "@coulba/design/layouts"
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { yearsOptions } from "../../services/api/auth/years/yearsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { CreateYear } from "./create/createYear"
import { DeleteYear } from "./delete/deleteYear"
import { UpdateYear } from "./update/updateYear"


export function YearsList() {
    const years = useQuery(yearsOptions)

    const yearsArray = (years.data ?? [])
        .sort((a, b) => b.label.localeCompare(a.label))

    if (years.isLoading) return <CircularLoader />
    if (years.isError) return <ErrorMessage message={years.error.message} />
    if (!years.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
            <div className="w-full flex justify-between items-center p-4 border-b border-neutral/10 last:border-b-0">
                <CreateYear>
                    <ButtonOutline
                        className="border-dashed"
                        icon={<IconPlus />}
                        text="Ajouter un exercice"
                    />
                </CreateYear>
            </div>
            {
                (yearsArray.length === 0) ? (<FormatNull />) : yearsArray.map((year) => {
                    return (
                        <div className="w-full flex justify-between items-center p-2 border-b border-neutral/5 last:border-b-0">
                            <div className="flex justify-start items-center gap-4 p-2">
                                <h2>{year.label}</h2>
                                <span className="text-neutral/50">{formatDate(year.startingOn)} - {formatDate(year.endingOn)}</span>
                                {!year.isSelected ? null : <Chip color="success" text="Sélectionné" />}
                            </div>
                            <div className="flex justify-end items-center gap-1">
                                <UpdateYear year={year}>
                                    <ButtonGhost
                                        icon={<IconPencil />}
                                    />
                                </UpdateYear>
                                <DeleteYear year={year}>
                                    <ButtonGhost
                                        icon={<IconTrash />}
                                        color="error"
                                    />
                                </DeleteYear>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
