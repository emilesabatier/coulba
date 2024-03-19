import { ButtonGhost } from "@coulba/design/buttons"
import { FormatNull, formatDate } from "@coulba/design/formats"
import { Chip } from "@coulba/design/layouts"
import { IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react"
import { yearOptions } from "../../services/api/auth/years/yearsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"
import { DeleteYear } from "./deleteYear/deleteYear"
import { UpdateYear } from "./updateYear/updateYear"


export function YearsList() {
    const years = useQuery(yearOptions)

    const yearsArray = (years.data ?? [])
        .sort((a, b) => b.label.localeCompare(a.label))

    if (years.isPending) return <Loading />
    if (years.isError) return <ErrorMessage message={years.error.message} />
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-2 overflow-auto border border-neutral/25 rounded-sm p-4">
            {
                (yearsArray.length === 0) ? (<FormatNull />) : yearsArray.map((year, index) => {
                    return (
                        <Fragment>
                            {index === 0 ? null : (<div className="h-[1px] w-full bg-neutral/10" />)}
                            <div className="w-full flex justify-between items-center gap-4">
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
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
