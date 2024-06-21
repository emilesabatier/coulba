import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { router } from "../../routes/router"
import { computationsOptions } from "../../services/api/auth/computations/computationsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateComputation } from "./create/createComputation"
import { formatComputation } from "./format/formatComputation"
import { ReadComputation } from "./read/readComputation"


export function ComputationsList() {
    const computations = useQuery(computationsOptions)

    const sortedComputations = (computations.data ?? [])
        .sort((a, b) => a.number - b.number)

    if (computations.isLoading) return <CircularLoader className="m-3" />
    if (computations.isError) return <ErrorMessage message={computations.error.message} />
    if (!computations.data) return null
    return (
        <Section.Root>
            <Section.Item className="justify-start">
                <ButtonOutline
                    onClick={() => router.navigate({ to: "/configuration/compte-de-resultat" })}
                    icon={<IconChevronLeft />}
                />
                <CreateComputation>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter"
                    />
                </CreateComputation>
            </Section.Item>
            <Section.Item>
                <div className="w-full flex flex-col justify-start items-stretch rounded-md border border-neutral/10">
                    {
                        (sortedComputations?.length > 0) ? sortedComputations.map((computation) => {
                            return (
                                <ReadComputation idComputation={computation.id} className="w-full cursor-pointer hover:bg-neutral/5 border-b border-neutral/5 last:border-b-0">
                                    <div className="flex justify-start items-center gap-1.5 p-3">
                                        <span className="text-neutral/50">{computation.number}</span>
                                        <h2>{formatComputation(computation)}</h2>
                                    </div>
                                </ReadComputation>
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
