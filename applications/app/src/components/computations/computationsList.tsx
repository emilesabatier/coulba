import { ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
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
            <Section.Item>
                <CreateComputation>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter un calcul"
                    />
                </CreateComputation>
            </Section.Item>
            <Section.Item className="p-0 flex flex-col justify-start items-stretch gap-0">
                {
                    (!sortedComputations || sortedComputations?.length === 0) ? (<FormatNull />) : sortedComputations.map((computation) => {
                        return (
                            <ReadComputation idComputation={computation.id} className="w-full cursor-pointer hover:bg-neutral/5 border-b border-neutral/5 last:border-b-0">
                                <div className="flex justify-start items-center gap-1.5 p-3">
                                    <span className="text-neutral/50">{computation.number}</span>
                                    <h2>{formatComputation(computation)}</h2>
                                </div>
                            </ReadComputation>
                        )
                    })
                }
            </Section.Item>
        </Section.Root>
    )
}
