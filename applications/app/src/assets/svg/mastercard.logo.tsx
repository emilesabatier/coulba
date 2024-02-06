import { ComponentProps } from "react"


type LogoMastercard = {
    className?: ComponentProps<'svg'>['className']
}

export function LogoMastercard(props: LogoMastercard) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 618" width="100%" height="100%" className={props.className} preserveAspectRatio="xMidYMid meet">
            <path fill="#EB001B" d="m308,0a309,309 0 1,0 2,0z" />
            <path
                d="m690,0a309,309 0 1,0 2,0z"
                fill="#F79E1B"
            />
            <path
                d="m500,66a309,309 0 0,0 0,486 309,309 0 0,0 0-486"
                fill="#FF5F00"
            />
        </svg>
    )
}
