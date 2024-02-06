'use client'

import { ButtonPlain } from '@monassosportive/design/buttons'
import { Logo } from '@monassosportive/design/layouts'
import { useNavigate } from '@tanstack/react-router'


export function DefaultContent() {
    const navigate = useNavigate()
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
            <div className='max-w-[320px] p-8'>
                <Logo className='stroke-primary fill-primary' />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='mt-4'>Cette page n'existe pas ou la ressource demandée n'est pas disponible.</h2>
                <ButtonPlain
                    onClick={() => navigate({ to: "/" })}
                    text="Retour à l'accueil"
                />
            </div>
        </div>
    )
}
