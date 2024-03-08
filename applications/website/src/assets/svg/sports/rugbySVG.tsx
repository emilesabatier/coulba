import { ComponentProps } from "react"


type RugbySVG = {
    className?: ComponentProps<'svg'>['className']
}

export function RugbySVG(props: RugbySVG) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" className={props.className} preserveAspectRatio="xMidYMid meet">
            <path className="fill-neutral/25" d="M419.778,230.635c18.058-27.361,31.677-53.271,41.672-76.661l0.012-0.065
	c25.521-59.703,27.424-103.045,18.552-111.915c-4.336-4.336-16.737-6.152-35.143-3.979c-19.614,2.258-46.095,9.014-77.098,22.283
	c-23.31,9.973-49.167,23.622-76.549,41.784c-31.222,20.718-64.437,47.3-98.137,81.001c-33.587,33.587-60.147,66.898-80.854,98.283
	c-18.058,27.361-31.677,53.271-41.672,76.661l-0.012,0.065c-25.521,59.705-27.423,103.046-18.552,111.917
	c4.336,4.336,16.737,6.152,35.143,3.979c19.614-2.258,46.096-9.014,77.098-22.283c23.31-9.973,49.167-23.622,76.549-41.784
	c31.222-20.718,64.437-47.3,98.137-81.001C372.511,295.331,399.071,262.02,419.778,230.635z"/>
            <path className="fill-neutral/100" d="M481.289,270.095c-8.404-3.781-18.273-0.032-22.051,8.37
	c-16.669,37.064-40.226,70.962-70.015,100.753c-29.901,29.899-63.729,53.558-100.545,70.315
	c-27.69,12.591-56.923,21.227-86.894,25.667c-20.163,2.99-40.756,3.996-60.322,3.04c9.001-3.015,18.772-6.683,29.336-11.204
	c26.265-11.239,52.914-25.78,79.211-43.221c34.722-23.042,68.606-51.003,100.708-83.105c32.019-32.019,59.937-65.964,82.98-100.89
	c17.326-26.25,31.822-52.929,43.089-79.293c0.093-0.22,0.182-0.444,0.267-0.669c21.032-49.429,33.773-107.444,15.965-128.301
	c-0.377-0.469-0.777-0.924-1.212-1.359l0,0l0,0c-0.472-0.472-0.972-0.922-1.486-1.359c-15.282-13.964-43.333-20.937-58.991-23.867
	c-22.771-4.328-59.647-8.042-105.993-1.167c-33.05,4.896-65.285,14.418-95.818,28.3c-40.466,18.42-77.582,44.357-110.316,77.091
	c-32.659,32.659-58.514,69.89-76.848,110.651c-13.729,30.505-23.172,62.794-28.066,95.97c-0.043,0.297-0.078,0.599-0.105,0.902
	c-11.044,75.996,4.501,143.523,26.003,165.058c0.007,0.007,0.013,0.015,0.02,0.022c0.474,0.474,0.976,0.926,1.493,1.364
	c15.28,13.959,43.33,20.93,58.985,23.86c13.665,2.597,32.404,4.973,55.226,4.973c15.208,0,32.234-1.056,50.768-3.806
	c33.05-4.896,65.285-14.418,95.817-28.3c40.466-18.42,77.582-44.357,110.316-77.091c32.661-32.661,58.516-69.892,76.85-110.658
	C493.435,283.744,489.69,273.873,481.289,270.095z M446.125,147.351c-0.092,0.213-0.178,0.43-0.26,0.65
	c-10.448,24.344-23.907,49.052-40.007,73.447c-21.807,33.053-48.294,65.244-78.726,95.675
	c-30.536,30.536-62.689,57.08-95.563,78.896c-24.616,16.327-49.477,29.903-73.893,40.349c-26.192,11.211-51.92,18.685-72.492,21.054
	c-4.525,0.535-8.692,0.806-12.386,0.806h-0.002c-4.073,0-6.761-0.325-8.407-0.64c-1.91-9.94-0.09-42.441,21.497-92.942
	c0.088-0.208,0.173-0.42,0.255-0.635c10.447-24.346,23.907-49.058,40.014-73.462c21.809-33.056,48.294-65.245,78.726-95.675
	c30.533-30.533,62.685-57.078,95.562-78.896c24.618-16.329,49.477-29.903,73.894-40.349c26.192-11.211,51.918-18.685,72.492-21.054
	c4.525-0.535,8.694-0.806,12.388-0.806c4.073,0,6.759,0.325,8.407,0.64C469.53,64.349,467.712,96.852,446.125,147.351z
	 M47.298,320.778c0.042-0.287,0.077-0.58,0.105-0.874c4.476-29.854,13.01-58.91,25.37-86.371
	c16.669-37.064,40.226-70.962,70.015-100.753c29.899-29.899,63.729-53.558,100.543-70.315
	c27.691-12.591,56.925-21.227,86.896-25.667c20.163-2.99,40.756-3.996,60.321-3.039c-9.001,3.015-18.77,6.683-29.334,11.204
	c-26.265,11.237-52.914,25.778-79.211,43.221c-34.726,23.043-68.609,51.005-100.708,83.104
	c-32.017,32.017-59.935,65.963-82.98,100.89c-17.328,26.254-31.826,52.932-43.089,79.294c-0.092,0.213-0.178,0.432-0.262,0.652
	c-3.934,9.248-7.577,18.795-10.787,28.347C43.365,362.503,44.116,342.325,47.298,320.778z"/>
        </svg>
    )
}
