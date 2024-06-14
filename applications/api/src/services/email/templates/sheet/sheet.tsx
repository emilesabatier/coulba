import { Style, css } from "hono/css"
import { SheetAsset, SheetLiability } from "./groupSheets"
import { SheetAssets } from "./sheetAssets"
import { SheetLiabilities } from "./sheetLiabilities"


type Sheet = {
    sheetAssets: Array<SheetAsset>
    sheetLiabilities: Array<SheetLiability>
}

function Sheet(props: Sheet) {
    return (
        <html lang="fr">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Style />
            </head>
            <body class={css`width: fit-content; height: 100%; overflow: scroll;`}>
                <div class={css`width: fit-content; min-height:fit-content; overflow: scroll;`}>
                    <SheetAssets sheets={props.sheetAssets} />
                    <SheetLiabilities sheets={props.sheetLiabilities} />
                </div>
            </body>
        </html>
    )
}

export function sheetTemplate(props: Sheet) {
    return (<Sheet {...props} />).toString()
}
