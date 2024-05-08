import { ReactNode, useEffect, useState } from 'react'
import { readCompany } from '../../services/api/auth/companies/readCompany'
import { CompanyContext, companyContext } from './company.context'


export const CompanyProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<CompanyContext["data"]>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    async function getCompany() {
        setIsLoading(!isLoading)

        const response = await readCompany()
        if (!response) {
            setIsLoading(false)
            return
        }

        setData(response)
        setIsLoading(false)
    }

    useEffect(() => {
        getCompany()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // if (isLoading && !data) return (
    //     <div className='w-full h-full flex justify-center items-center'>
    //         <CircularLoader />
    //     </div>
    // )
    return (
        <companyContext.Provider value={{ data: data, setData: setData, mutate: getCompany, isLoading: isLoading }}>
            {children}
        </companyContext.Provider>
    )
}
