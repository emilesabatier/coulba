import { useQuery } from "@tanstack/react-query"
import { readRecords } from "../../services/api/auth/records/readRecords"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"


export function RecordsTable() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["records"],
        queryFn: readRecords
    })

    if (isPending) return <Loading />
    if (isError) return <ErrorMessage message={error.message} />
    return (
        <span>{data.toString()}</span>
    )
}
