import { ButtonGhost, ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatNull, formatDate } from "@coulba/design/formats"
import { Chip, CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { router } from "../../routes/router"
import { yearsOptions } from "../../services/api/auth/years/yearsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateYear } from "./create/createYear"
import { DeleteYear } from "./delete/deleteYear"
import { UpdateYear } from "./update/updateYear"


export function YearsList() {
    const years = useQuery(yearsOptions)

    const yearsArray = (years.data ?? [])
        .sort((a, b) => b.label.localeCompare(a.label))

    if (years.isLoading) return <CircularLoader className="m-3" />
    if (years.isError) return <ErrorMessage message={years.error.message} />
    if (!years.data) return null
    return (
        <Section.Root>
            <Section.Item className="justify-start">
                <ButtonOutline
                    onClick={() => router.navigate({ to: "/configuration/exercices" })}
                    icon={<IconChevronLeft />}
                />
                <CreateYear>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un exercice"
                    />
                </CreateYear>
            </Section.Item>
            <Section.Item>
                <div className="w-full flex flex-col justify-start items-stretch rounded-md border border-neutral/10">
                    {
                        (yearsArray.length > 0) ?
                            yearsArray.map((year) => {
                                return (
                                    <div className="w-full flex justify-between items-center p-3 border-b border-neutral/5 last:border-b-0">
                                        <div className="flex justify-start items-center gap-3">
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
                            : (
                                <FormatNull className="p-3" />
                            )
                    }
                </div>
            </Section.Item>
        </Section.Root>
    )
}
