import { ComponentProps } from "react"

export function FlagCH({ className }: { className?: ComponentProps<'svg'>['className'] }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className={className}>
            <g fillRule="evenodd" strokeWidth="1pt">
                <path fill="red" d="M0 0h640v480H0z" />
                <g fill="#fff">
                    <path d="M170 195h300v90H170z" />
                    <path d="M275 90h90v300h-90z" />
                </g>
            </g>
        </svg>
    )
}
