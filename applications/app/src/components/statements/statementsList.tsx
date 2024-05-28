import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, CircularLoader } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { auth } from "@coulba/schemas/routes"
import { IconChevronDown, IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { ComponentProps } from "react"
import * as v from "valibot"
import { statementsOptions } from "../../services/api/auth/statements/statementsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"
import { CreateStatement } from "./create/createStatement"
import { DeleteStatement } from "./delete/deleteStatement"
import { UpdateStatement } from "./update/updateStatement"


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
            <Section.Item>
                <CreateStatement>
                    <ButtonPlain
                        icon={<IconPlus />}
                        text="Ajouter une ligne"
                    />
                </CreateStatement>
            </Section.Item>
            <Section.Item>
                <Accordion type="multiple" className="w-full">
                    {
                        (groupedStatements.length === 0) ? (<FormatNull />) : groupedStatements.map((groupedStatement) => (
                            <StatementItem
                                key={groupedStatement.statement.id}
                                groupedStatement={groupedStatement}
                                className="pl-0"
                            />
                        ))
                    }
                </Accordion>
            </Section.Item>
        </Section.Root>
    )
}



type StatementItem = {
    groupedStatement: GroupedStatement
    className?: ComponentProps<'div'>['className']
}

function StatementItem(props: StatementItem) {
    const hasSubStatements = props.groupedStatement.subStatements.length > 0

    return (
        <AccordionItem
            disabled={!hasSubStatements}
            value={props.groupedStatement.statement.id}
            className={cn(
                "pl-4",
                props.className
            )}
        >
            <div className="flex justify-between items-center gap-3 hover:bg-neutral/5 rounded-sm">
                <AccordionTrigger className="w-full flex justify-start items-center ">
                    <div className="flex justify-start items-start gap-2 p-2">
                        <h2 className="font-bold">{props.groupedStatement.statement.number}</h2>
                        <span className="text-neutral/75 text-left">{props.groupedStatement.statement.label}</span>
                    </div>
                    <IconChevronDown size={16} className={cn(
                        "stroke-neutral/50 shrink-0",
                        hasSubStatements ? undefined : "opacity-0"
                    )} />
                </AccordionTrigger>
                <div className="flex justify-end items-center gap-1">
                    <UpdateStatement statement={props.groupedStatement.statement}>
                        <ButtonGhost
                            icon={<IconPencil />}
                        />
                    </UpdateStatement>
                    <DeleteStatement statement={props.groupedStatement.statement}>
                        <ButtonGhost
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteStatement>
                </div>
            </div>
            <AccordionContent>
                <Accordion type="multiple">
                    {
                        props.groupedStatement.subStatements
                            .sort((a, b) => a.statement.number - b.statement.number)
                            .map((groupedSubStatement) => (
                                <StatementItem
                                    key={groupedSubStatement.statement.id}
                                    groupedStatement={groupedSubStatement}
                                />
                            ))
                    }
                </Accordion>
            </AccordionContent>
        </AccordionItem>
    )
}
