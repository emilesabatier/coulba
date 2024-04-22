import { useContext } from 'react'
import { currentYearContext } from './currentYear.context'


export const useCurrentYear = () => useContext(currentYearContext)
