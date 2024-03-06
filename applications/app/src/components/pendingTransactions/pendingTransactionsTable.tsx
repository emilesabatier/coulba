import { ButtonOutline } from "@coulba/design/buttons"
import { useQuery } from "@tanstack/react-query"
import { readRecords } from "../../services/api/auth/records/readRecords"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"
import { CreateRecord } from "./createRecord/createRecord"


export function PendingTransactionsTable() {
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["records"],
        queryFn: async () => {
            const response = await readRecords()
            if (!response.status) throw new Error("Erreur avec la lecture des enregistrements")
            return response.data
        }
    })

    if (isPending) return <Loading />
    if (isError) return <ErrorMessage message={error.message} />
    return (
        <div>
            <CreateRecord>
                <ButtonOutline
                    text="Ajouter un enregistrement"
                />
            </CreateRecord>
            {
                data?.map(x => (
                    <span>{x.id}</span>
                ))
            }
        </div>
    )
}
