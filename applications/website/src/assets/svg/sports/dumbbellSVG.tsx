import { ComponentProps } from "react"


type DumbbellSVG = {
    className?: ComponentProps<'svg'>['className']
}

export function DumbbellSVG(props: DumbbellSVG) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" className={props.className} preserveAspectRatio="xMidYMid meet">
            <g>
                <path className="fill-primary/25" d="M168.757,366.805c0,7.633-6.245,13.878-13.878,13.878H97.292c-7.633,0-13.878-6.245-13.878-13.878
		V145.196c0-7.633,6.245-13.878,13.878-13.878h57.587c7.633,0,13.878,6.245,13.878,13.878V366.805L168.757,366.805z"/>
                <path className="fill-primary/25" d="M343.243,145.196c0-7.633,6.245-13.878,13.878-13.878h57.587c7.633,0,13.878,6.245,13.878,13.878
		v221.609c0,7.633-6.245,13.878-13.878,13.878h-57.587c-7.633,0-13.878-6.245-13.878-13.878V145.196z"/>
            </g>
            <path className="fill-primary/100" d="M498.122,242.123c7.665,0,13.878-6.213,13.878-13.878v-33.192c0-15.304-12.451-27.756-27.756-27.756
	h-41.781v-22.102c0-15.304-12.451-27.756-27.756-27.756h-57.587c-15.304,0-27.756,12.451-27.756,27.756v62.694h-146.73v-62.694
	c0-15.304-12.451-27.756-27.756-27.756H97.292c-15.304,0-27.756,12.451-27.756,27.756v22.102H27.756
	C12.451,167.298,0,179.749,0,195.053v33.192c0,7.665,6.213,13.878,13.878,13.878s13.878-6.213,13.878-13.878v-33.192h41.781v121.893
	H27.756v-33.192c0-7.665-6.213-13.878-13.878-13.878S0,276.09,0,283.755v33.192c0,15.304,12.451,27.756,27.756,27.756h41.781v22.102
	c0,15.304,12.451,27.756,27.756,27.756h57.587c15.304,0,27.756-12.451,27.756-27.756V304.11H256c7.665,0,13.878-6.213,13.878-13.878
	c0-7.665-6.213-13.878-13.878-13.878h-73.365v-40.708h146.73v131.158c0,15.305,12.451,27.756,27.756,27.756h57.587
	c15.304,0,27.756-12.451,27.756-27.756v-22.102h41.781c15.304,0,27.756-12.451,27.756-27.756v-33.192
	c0-7.665-6.213-13.878-13.878-13.878s-13.878,6.213-13.878,13.878v33.192h-41.781V195.053h41.781v33.192
	C484.244,235.91,490.457,242.123,498.122,242.123z M97.292,366.805v-48.078c0.037-0.591,0.09-1.178,0.09-1.779V195.053
	c0-0.601-0.053-1.188-0.09-1.779v-48.08h57.587l0.003,221.609h-57.59V366.805z M357.121,366.805V145.196h57.587v48.067
	c-0.039,0.595-0.09,1.187-0.09,1.79v121.893c0,0.615,0.053,1.216,0.092,1.821v48.037h-57.589V366.805z"/>
        </svg>
    )
}
