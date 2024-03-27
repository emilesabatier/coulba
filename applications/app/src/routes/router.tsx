import { NavigateOptions, ParseRoute, createRouter } from '@tanstack/react-router'
import { attachmentsLayout } from './auth/attachments/attachments.layout'
import { attachmentsRoute } from './auth/attachments/attachments.route'
import { createAttachmentRoute } from './auth/attachments/createAttachment.route'
import { readAttachmentRoute } from './auth/attachments/readAttachment.route'
import { updateAttachmentRoute } from './auth/attachments/updateAttachment.route'
import { authLayout } from './auth/auth.layout'
import { APIRoute } from './auth/configuration/API.route'
import { accountsLayout } from './auth/configuration/accounts/accounts.layout'
import { accountsRoute } from './auth/configuration/accounts/accounts.route'
import { createAccountRoute } from './auth/configuration/accounts/createAccount.route'
import { updateAccountRoute } from './auth/configuration/accounts/updateAccount.route'
import { closingRoute } from './auth/configuration/closing.route'
import { companyLayout } from './auth/configuration/company/company.layout'
import { companyRoute } from './auth/configuration/company/company.route'
import { updateCompanyRoute } from './auth/configuration/company/updateCompany.route'
import { configurationLayout } from './auth/configuration/configuration.layout'
import { configurationRoute } from './auth/configuration/configuration.route'
import { createJournalRoute } from './auth/configuration/journals/createJournal.route'
import { journalsLayout } from './auth/configuration/journals/journals.layout'
import { journalsRoute } from './auth/configuration/journals/journals.route'
import { updateJournalRoute } from './auth/configuration/journals/updateJournal.route'
import { subscriptionRoute } from './auth/configuration/subscription.route'
import { createUserRoute } from './auth/configuration/users/createUser.route'
import { updateUserRoute } from './auth/configuration/users/updateUser.route'
import { usersLayout } from './auth/configuration/users/users.layout'
import { usersRoute } from './auth/configuration/users/users.route'
import { createYearRoute } from './auth/configuration/years/createYear.route'
import { updateYearRoute } from './auth/configuration/years/updateYear.route'
import { yearsLayout } from './auth/configuration/years/years.layout'
import { yearsRoute } from './auth/configuration/years/years.route'
import { overviewRoute } from './auth/overview/overview.route'
import { profileLayout } from './auth/profile/profile.layout'
import { profileRoute } from './auth/profile/profile.route'
import { updateProfileLayout } from './auth/profile/update/updateProfile.layout'
import { updateProfileRoute } from './auth/profile/update/updateProfile.page'
import { updateProfileEmailRoute } from './auth/profile/update/updateProfileEmail.page'
import { updateProfilePasswordRoute } from './auth/profile/update/updateProfilePassword.page'
import { balanceRoute } from './auth/reports/balance.route'
import { ledgerRoute } from './auth/reports/ledger.route'
import { recordsRoute } from './auth/reports/records.route'
import { reportsLayout } from './auth/reports/reports.layout'
import { reportsRoute } from './auth/reports/reports.route'
import { sheetRoute } from './auth/reports/sheet.route'
import { statementRoute } from './auth/reports/statement.route'
import { createTransactionRoute } from './auth/transactions/createTransaction.route'
import { readTransactionRoute } from './auth/transactions/readTransaction.route'
import { transactionsLayout } from './auth/transactions/transactions.layout'
import { transactionsRoute } from './auth/transactions/transactions.route'
import { updateTransactionRoute } from './auth/transactions/updateTransaction.route'
import { connectionRoute } from './connection/connection.route'
import { rootLayout } from './root.layout'


const routeTree = rootLayout.addChildren([
    connectionRoute,
    authLayout.addChildren([
        overviewRoute,

        transactionsLayout.addChildren([
            transactionsRoute,
            createTransactionRoute,
            readTransactionRoute,
            updateTransactionRoute
        ]),

        attachmentsLayout.addChildren([
            attachmentsRoute,
            createAttachmentRoute,
            readAttachmentRoute,
            updateAttachmentRoute
        ]),

        reportsLayout.addChildren([
            reportsRoute,
            recordsRoute,
            ledgerRoute,
            balanceRoute,
            sheetRoute,
            statementRoute
        ]),

        configurationLayout.addChildren([
            configurationRoute,
            companyLayout.addChildren([
                companyRoute,
                updateCompanyRoute
            ]),
            subscriptionRoute,
            usersLayout.addChildren([
                usersRoute,
                createUserRoute,
                updateUserRoute
            ]),
            APIRoute,
            yearsLayout.addChildren([
                yearsRoute,
                createYearRoute,
                updateYearRoute
            ]),
            closingRoute,
            accountsLayout.addChildren([
                accountsRoute,
                createAccountRoute,
                updateAccountRoute
            ]),
            journalsLayout.addChildren([
                journalsRoute,
                createJournalRoute,
                updateJournalRoute
            ]),
        ]),

        profileLayout.addChildren([
            profileRoute,
            updateProfileLayout.addChildren([
                updateProfileRoute,
                updateProfileEmailRoute,
                updateProfilePasswordRoute
            ])
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
