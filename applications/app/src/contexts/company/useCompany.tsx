import { useContext } from 'react'
import { companyContext } from './company.context'


export const useCompany = () => useContext(companyContext)
