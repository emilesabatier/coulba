import { ReactNode, useEffect, useState } from 'react'
import { readYears } from '../../services/api/auth/years/readYears'
import { CurrentYearContext, currentYearContext } from './currentYear.context'


export const CurrentYearProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<CurrentYearContext["data"]>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    async function getCurrentYear() {
        setIsLoading(!isLoading)

        const response = await readYears()
        const currentYear = response?.find(x => x.isCurrent)
        if (!currentYear) {
            setIsLoading(false)
            return
        }

        setData(currentYear)
        setIsLoading(false)
    }

    useEffect(() => {
        getCurrentYear()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // if (isLoading && !data) return (
    //     <div className='w-full h-full flex justify-center items-center'>
    //         <CircularLoader />
    //     </div>
    // )
    return (
        <currentYearContext.Provider value={{ data: data, setData: setData, mutate: getCurrentYear, isLoading: isLoading }}>
            {children}
        </currentYearContext.Provider>
    )
}
