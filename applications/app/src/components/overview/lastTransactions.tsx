// import { ButtonGhost, ButtonOutlineContent, ButtonPlain } from "@coulba/design/buttons"
// import { FormatDateTime, FormatNull } from "@coulba/design/formats"
// import { CircularLoader } from "@coulba/design/layouts"
// import { IconEye, IconPlus } from "@tabler/icons-react"
// import { useQuery } from "@tanstack/react-query"
// import { Link } from "@tanstack/react-router"
// import { recordsOptions } from "../../services/api/auth/records/recordsOptions"
// import { ErrorMessage } from "../layouts/errorMessage"
// import { CreateRecord } from "../records/create/createRecord"
// import { ReadRecord } from "../records/read/readRecord"


// export function LastRecords() {
//     const records = useQuery(recordsOptions)

//     if (records.isLoading) return <CircularLoader />
//     if (records.isError) return <ErrorMessage message={records.error.message} />
//     if (!records.data) return null

//     const lastRecords = records.data
//         .sort((a, b) => b.createdOn.localeCompare(a.createdOn))
//         .slice(0, 10)

//     return (
//         <div className="w-full max-w-[400px] h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
//             <div className="w-full flex justify-between items-center gap-3 p-3 border-b border-neutral/10">
//                 <h2 className="text-xl text-neutral/75">Derniers enregistrements</h2>
//                 <CreateRecord>
//                     <ButtonPlain
//                         icon={<IconPlus />}
//                     />
//                 </CreateRecord>
//             </div>
//             <div className="flex flex-col justify-start items-stretch h-[300px] overflow-auto">
//                 {lastRecords.length > 0 ? null : <FormatNull text="Aucune donnée" className="w-full p-3" />}
//                 {lastRecords.map((record) => {
//                     return (
//                         <div
//                             key={record.id}
//                             className="flex justify-between items-center gap-3 p-3 border-b border-neutral/5 last:border-b-0"
//                         >
//                             <span>{record.label}</span>
//                             <FormatDateTime isoDate={record.createdOn} className="ml-auto" />
//                             <ReadRecord idRecord={record.id}>
//                                 <ButtonGhost
//                                     icon={<IconEye />}
//                                 />
//                             </ReadRecord>
//                         </div>
//                     )
//                 })}
//             </div>
//             <div className="w-full p-3 border-t border-neutral/10">
//                 <Link to="/enregistrements">
//                     <ButtonOutlineContent
//                         text="Voir tous les enregistrements"
//                         className="w-full border-dashed justify-center"
//                     />
//                 </Link>
//             </div>
//         </div>
//     )
// }
