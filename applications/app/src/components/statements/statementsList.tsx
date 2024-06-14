import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { IconChevronLeft, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { ComponentProps, Fragment } from "react"
import * as v from "valibot"
import { router } from "../../routes/router"
import { statementsOptions } from "../../services/api/auth/statements/statementsOptions"
import { toRoman } from "../../services/toRoman"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateStatement } from "./create/createStatement"
import { ReadStatement } from "./read/readStatement"


type GroupedStatement = {
    statement: v.Output<typeof auth.statements.get.return>
    subStatements: GroupedStatement[]
}

function groupStatements(statements: v.Output<typeof auth.statements.get.return>[], idParent?: string | null) {
    if (statements.length === 0) return []
    return statements
        .filter((statement) => statement.idParent === idParent)
        .map((statement) => {
            const subStatements = groupStatements(statements, statement.id) as GroupedStatement[]
            return ({
                statement: statement,
                subStatements: subStatements
            })
        }) as GroupedStatement[]
}

export function StatementsList() {
    const statements = useQuery(statementsOptions)

    const groupedStatements = groupStatements(statements.data ?? [], null)
        .sort((a, b) => a.statement.number - b.statement.number)

    if (statements.isLoading) return <CircularLoader className="m-3" />
    if (statements.isError) return <ErrorMessage message={statements.error.message} />
    if (!statements.data) return null
    return (
        <Section.Root>
            <Section.Item className="justify-start">
                <ButtonOutline
                    onClick={() => router.navigate({ to: "/configuration/compte-de-resultat" })}
                    icon={<IconChevronLeft />}
                />
                <CreateStatement>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter"
                    />
                </CreateStatement>
            </Section.Item>
            <Section.Item className="p-0 flex-col justify-start items-stretch gap-0">
                {
                    (groupedStatements.length > 0) ? groupedStatements.map((groupedStatement) => (
                        <StatementItem
                            key={groupedStatement.statement.id}
                            groupedStatement={groupedStatement}
                            level={0}
                        />
                    ))
                        : (
                            <FormatNull className="p-3" />
                        )
                }
            </Section.Item>
        </Section.Root>
    )
}



type StatementItem = {
    groupedStatement: GroupedStatement
    level: number
    className?: ComponentProps<'div'>['className']
}

function StatementItem(props: StatementItem) {
    return (
        <Fragment>
            <ReadStatement idStatement={props.groupedStatement.statement.id} className="w-full">
                <div
                    className="w-full flex justify-start items-start gap-1.5 p-3 border-b border-neutral/5 hover:bg-neutral/5"
                    style={{
                        paddingLeft: `${(1 + props.level) * 12}px`
                    }}
                >
                    {props.level > 0 ? null : (
                        <span className="text-neutral font-bold">{toRoman(props.groupedStatement.statement.number)}</span>
                    )}
                    <span className={cn(
                        "text-neutral text-left",
                        props.level === 0 ? "font-bold" : ""
                    )}>
                        {props.groupedStatement.statement.label}
                    </span>
                </div>
            </ReadStatement>
            {
                props.groupedStatement.subStatements
                    .sort((a, b) => a.statement.number - b.statement.number)
                    .map((groupedSubStatement) => (
                        <StatementItem
                            key={groupedSubStatement.statement.id}
                            groupedStatement={groupedSubStatement}
                            level={props.level + 1}
                        />
                    ))
            }
        </Fragment>
    )
}
