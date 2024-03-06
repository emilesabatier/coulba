import { NavigateOptions, ParseRoute, createRouter } from '@tanstack/react-router'
import { attachmentRoute } from './auth/attachments/attachment.route'
import { attachmentsLayout } from './auth/attachments/attachments.layout'
import { attachmentsRoute } from './auth/attachments/attachments.route'
import { authLayout } from './auth/auth.layout'
import { APIRoute } from './auth/configuration/API.route'
import { accountsRoute } from './auth/configuration/accounts.route'
import { companyRoute } from './auth/configuration/company.route'
import { configurationLayout } from './auth/configuration/configuration.layout'
import { configurationRoute } from './auth/configuration/configuration.route'
import { journalsRoute } from './auth/configuration/journals.route'
import { subscriptionRoute } from './auth/configuration/subscription.route'
import { usersRoute } from './auth/configuration/users.route'
import { yearsRoute } from './auth/configuration/years.route'
import { closingRoute } from './auth/declaration/closing.route'
import { reportsLayout } from './auth/declaration/reports.layout'
import { reportsRoute } from './auth/declaration/reports.route'
import { sheetRoute } from './auth/declaration/sheet.route'
import { statementRoute } from './auth/declaration/statement.route'
import { overviewRoute } from './auth/overview/overview.route'
import { profileLayout } from './auth/profile/profile.layout'
import { profileRoute } from './auth/profile/profile.route'
import { settingsRoute } from './auth/profile/settings.route'
import { balanceRoute } from './auth/transactions/balance.route'
import { ledgerRoute } from './auth/transactions/ledger.route'
import { pendingTransactionsRoute } from './auth/transactions/pendingTransactions.route'
import { connectionRoute } from './connection/connection.route'
import { rootLayout } from './root.layout'
import { recordsRoute } from './auth/transactions/records.route'
import { transactionsLayout } from './auth/transactions/transactions.layout'
import { transactionsRoute } from './auth/transactions/transactions.route'


const routeTree = rootLayout.addChildren([
    connectionRoute,
    authLayout.addChildren([
        overviewRoute,

        transactionsLayout.addChildren([
            transactionsRoute,
            pendingTransactionsRoute,
            recordsRoute,
            ledgerRoute,
            balanceRoute
        ]),

        attachmentsLayout.addChildren([
            attachmentsRoute,
            attachmentRoute
        ]),

        reportsLayout.addChildren([
            reportsRoute,
            sheetRoute,
            statementRoute,
            closingRoute
        ]),

        configurationLayout.addChildren([
            configurationRoute,
            companyRoute,
            subscriptionRoute,
            usersRoute,
            APIRoute,
            yearsRoute,
            accountsRoute,
            journalsRoute,
        ]),

        profileLayout.addChildren([
            profileRoute,
            settingsRoute
        ])

    ])
])

export type ValidRoutes = ParseRoute<typeof routeTree>['fullPath']
export type ValidParams = NavigateOptions<typeof routeTree>["params"]


export const router = createRouter({
    routeTree,
    context: {
        title: undefined,
        session: {
            isSignedIn: undefined
        }
    }
})


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
