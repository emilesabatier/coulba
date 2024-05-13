

type Sheet = {

}

function Sheet(props: Sheet) {
    return (
        <html lang="fr">
            <body>

            </body>
        </html>
    )
}

export function sheetTemplate(props: Sheet) {
    return (<Sheet {...props} />).toString()
}
