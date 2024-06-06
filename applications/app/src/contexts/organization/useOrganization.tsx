import { useContext } from 'react'
import { organizationContext } from './organization.context'


export const useOrganization = () => useContext(organizationContext)
