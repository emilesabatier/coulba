// import { ButtonGhost, ButtonOutlineContent, ButtonPlain } from "@coulba/design/buttons"
// import { FormatDateTime, FormatNull } from "@coulba/design/formats"
// import { CircularLoader } from "@coulba/design/layouts"
// import { IconEye, IconPlus } from "@tabler/icons-react"
// import { useQuery } from "@tanstack/react-query"
// import { Link } from "@tanstack/react-router"
// import { rowsOptions } from "../../services/api/auth/rows/rowsOptions"
// import { ErrorMessage } from "../layouts/errorMessage"
// import { CreateRow } from "../rows/create/createRow"
// import { ReadRow } from "../rows/read/readRow"


// export function LastRows() {
//     const rows = useQuery(rowsOptions)

//     if (rows.isLoading) return <CircularLoader />
//     if (rows.isError) return <ErrorMessage message={rows.error.message} />
//     if (!rows.data) return null

//     const lastRows = rows.data
//         .sort((a, b) => b.createdOn.localeCompare(a.createdOn))
//         .slice(0, 10)

//     return (
//         <div className="w-full max-w-[400px] h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
//             <div className="w-full flex justify-between items-center gap-3 p-3 border-b border-neutral/10">
//                 <h2 className="text-xl text-neutral/75">Derniers lignes</h2>
//                 <CreateRow>
//                     <ButtonPlain
//                         icon={<IconPlus />}
//                     />
//                 </createRow>
//             </div>
//             <div className="flex flex-col justify-start items-stretch h-[300px] overflow-auto">
//                 {lastRows.length > 0 ? null : <FormatNull text="Aucune donnée" className="w-full p-3" />}
//                 {lastRows.map((row) => {
//                     return (
//                         <div
//                             key={row.id}
//                             className="flex justify-between items-center gap-3 p-3 border-b border-neutral/5 last:border-b-0"
//                         >
//                             <span>{row.label}</span>
//                             <FormatDateTime isoDate={row.createdOn} className="ml-auto" />
//                             <ReadRow idRow={row.id}>
//                                 <ButtonGhost
//                                     icon={<IconEye />}
//                                 />
//                             </ReadRow>
//                         </div>
//                     )
//                 })}
//             </div>
//             <div className="w-full p-3 border-t border-neutral/10">
//                 <Link to="/lignes">
//                     <ButtonOutlineContent
//                         text="Voir tous les lignes"
//                         className="w-full border-dashed justify-center"
//                     />
//                 </Link>
//             </div>
//         </div>
//     )
// }
