import { useQuery } from "@tanstack/react-query"
import { readAllEntries } from "../../services/routes/auth/entries/readAllEntries"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"


export function EntriesTable() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["entries"],
        queryFn: readAllEntries
    })

    if (isPending) return <Loading />
    if (isError) return <ErrorMessage message={error.message} />
    return (
        <span>{data.toString()}</span>
    )
}
