import { ButtonGhost, ButtonOutlineContent, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconEye, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { transactionsOptions } from "../../services/api/auth/transactions/transactionsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { CreateTransaction } from "../transactions/create/createTransaction"
import { ReadTransaction } from "../transactions/read/readTransaction"


export function LastTransactions() {
    const transactions = useQuery(transactionsOptions)

    if (transactions.isLoading) return <CircularLoader />
    if (transactions.isError) return <ErrorMessage message={transactions.error.message} />
    if (!transactions.data) return null

    const lastTransactions = transactions.data
        .sort((a, b) => b.createdOn.localeCompare(a.createdOn))
        .slice(0, 10)

    return (
        <div className="w-full max-w-[400px] h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
            <div className="w-full flex justify-between items-center gap-4 p-4 border-b border-neutral/10">
                <h2 className="text-xl text-neutral/75">Derniers enregistrements</h2>
                <CreateTransaction>
                    <ButtonPlain
                        icon={<IconPlus />}
                    />
                </CreateTransaction>
            </div>
            <div className="flex flex-col justify-start items-stretch h-[300px] overflow-auto">
                {lastTransactions.length > 0 ? null : <FormatNull text="Aucune donnée" className="w-full p-4" />}
                {lastTransactions.map((transaction) => {
                    return (
                        <div
                            key={transaction.id}
                            className="flex justify-between items-center gap-4 p-4 border-b border-neutral/5 last:border-b-0"
                        >
                            <span>{transaction.label}</span>
                            <FormatDateTime isoDate={transaction.createdOn} className="ml-auto" />
                            <ReadTransaction idTransaction={transaction.id}>
                                <ButtonGhost
                                    icon={<IconEye />}
                                />
                            </ReadTransaction>
                        </div>
                    )
                })}
            </div>
            <div className="w-full p-4 border-t border-neutral/10">
                <Link to="/enregistrements">
                    <ButtonOutlineContent
                        text="Voir tous les enregistrements"
                        className="w-full border-dashed justify-center"
                    />
                </Link>
            </div>
        </div>
    )
}
