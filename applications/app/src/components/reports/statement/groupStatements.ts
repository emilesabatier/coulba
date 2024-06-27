import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { Account } from "../balance/getBalance"


export type Statement = {
    id: string
    number: number
    label: string
    net: number
    statements: Statement[]
}

export function groupStatements(statements: v.Output<typeof auth.statements.get.return>[], balance: Array<Account>, idParent?: string | null): Statement[] {
    return statements
        .filter((statement) => statement.idParent === idParent)
        .map((statement) => {
            const childrenStatements = groupStatements(statements, balance, statement.id)

            let net = 0

            if (childrenStatements.length === 0) {
                statement.accountStatements.forEach((accountStatement) => {
                    balance
                        .filter((_balance) => _balance.account.id === accountStatement.idAccount)
                        .forEach((_balance) => {
                            if (_balance.account.number.toString().at(0) === "6") net += _balance.balance.debit - _balance.balance.credit
                            if (_balance.account.number.toString().at(0) === "7") net += _balance.balance.credit - _balance.balance.debit
                        })
                })
            }
            else {
                childrenStatements.forEach((childStatement) => {
                    net += childStatement.net
                })
            }

            return ({
                id: statement.id,
                number: statement.number,
                label: statement.label,
                net: net + Number(statement.addedNetAmount),
                statements: childrenStatements
            })
        })
}