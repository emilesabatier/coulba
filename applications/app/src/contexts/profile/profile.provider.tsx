import { ReactNode, useEffect, useState } from 'react'
import { ProfileContext, profileContext } from './profile.context'
import { readProfile } from '../../services/api/auth/profile/readProfile'


export const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<ProfileContext["data"]>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    async function getProfile() {
        setIsLoading(!isLoading)

        const response = await readProfile()
        if (!response) {
            setIsLoading(false)
            return
        }

        setData(response)
        setIsLoading(false)
    }

    useEffect(() => {
        getProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // if (isLoading && !data) return (
    //     <div className='w-full h-full flex justify-center items-center'>
    //         <CircularLoader />
    //     </div>
    // )
    return (
        <profileContext.Provider value={{ data: data, setData: setData, mutate: getProfile, isLoading: isLoading }}>
            {children}
        </profileContext.Provider>
    )
}
