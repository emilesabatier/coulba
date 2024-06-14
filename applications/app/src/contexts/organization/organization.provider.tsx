import { ReactNode, useEffect, useState } from 'react'
import { readOrganization } from '../../services/api/auth/organizations/readOrganization'
import { OrganizationContext, organizationContext } from './organization.context'


export const OrganizationProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<OrganizationContext["data"]>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    async function getOrganization() {
        setIsLoading(!isLoading)

        const response = await readOrganization()
        if (!response) {
            setIsLoading(false)
            return
        }

        setData(response)
        setIsLoading(false)
    }

    useEffect(() => {
        getOrganization()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // if (isLoading && !data) return (
    //     <div className='w-full h-full flex justify-center items-center'>
    //         <CircularLoader />
    //     </div>
    // )
    return (
        <organizationContext.Provider value={{ data: data, setData: setData, mutate: getOrganization, isLoading: isLoading }}>
            {children}
        </organizationContext.Provider>
    )
}
