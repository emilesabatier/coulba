import { auth } from "@coulba/schemas/routes"
import { Style, css } from "hono/css"
import * as v from "valibot"
import { Statement as StatementItem } from "./groupStatements.js"
import { StatementTable } from "./statements.js"


type Statement = {
    statements: Array<StatementItem>
    computations: Array<v.Output<typeof auth.computations.get.return>>
}

function Statement(props: Statement) {
    return (
        <html lang="fr">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Style />
            </head>
            <body class={css`width: fit-content; height: 100%; overflow: scroll;`}>
                <div class={css`width: fit-content; min-height:fit-content; overflow: scroll;`}>
                    <StatementTable
                        statements={props.statements}
                        computations={props.computations}
                    />
                </div>
            </body>
        </html>
    )
}

export function statementTemplate(props: Statement) {
    return (<Statement {...props} />).toString()
}
