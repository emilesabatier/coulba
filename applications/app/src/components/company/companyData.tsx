import { useCompany } from "../../contexts/company/useCompany"


export function CompanyData() {
    const company = useCompany()

    return (
        <div className="p-4 border border-neutral/25 rounded-sm grid grid-cols-[min-content_auto] gap-y-4 gap-x-8">
            <span className="text-neutral/75">SIREN</span>
            <span>{company.data?.siren ?? "/"}</span>
            <span className="text-neutral/75">Nom</span>
            <span>{company.data?.name ?? "/"}</span>
            <span className="text-neutral/75">Adresse</span>
            <span>{company.data?.address ?? "/"}</span>
            <span className="text-neutral/75">Email</span>
            <span>{company.data?.email ?? "/"}</span>
        </div>
    )
}
