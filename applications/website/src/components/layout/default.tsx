

import { ButtonPlain } from '@coulba/design/buttons'
import { Logo } from '@coulba/design/layouts'


export function DefaultContent() {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
            <div className='max-w-[320px] p-8'>
                <Logo className='stroke-primary fill-primary' />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='mt-4'>Cette page n'existe pas ou la ressource demandée n'est pas disponible.</h2>
                <ButtonPlain
                    onClick={() => window.location.href = "https://monassosportive.fr"}
                    text="Retour à l'accueil"
                />
            </div>
        </div>
    )
}
