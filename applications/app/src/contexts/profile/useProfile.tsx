import { useContext } from 'react'
import { profileContext } from './profile.context'


export const useProfile = () => useContext(profileContext)
