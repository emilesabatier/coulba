import { ParseRoute, createRouter } from '@tanstack/react-router'
import { activationRoute } from './auth/activation.route'
import { appLayout } from './auth/app.layout'
import { attachmentsLayout } from './auth/app/attachments/attachments.layout'
import { attachmentsRoute } from './auth/app/attachments/attachments.route'
import { createAttachmentRoute } from './auth/app/attachments/createAttachment.route'
import { readAttachmentRoute } from './auth/app/attachments/readAttachment.route'
import { updateAttachmentRoute } from './auth/app/attachments/updateAttachment.route'
import { APIRoute } from './auth/app/configuration/API.route'
import { accountsLayout } from './auth/app/configuration/accounts/accounts.layout'
import { accountsRoute } from './auth/app/configuration/accounts/accounts.route'
import { createAccountRoute } from './auth/app/configuration/accounts/createAccount.route'
import { updateAccountRoute } from './auth/app/configuration/accounts/updateAccount.route'
import { closingRoute } from './auth/app/configuration/closing.route'
import { companyLayout } from './auth/app/configuration/company/company.layout'
import { companyRoute } from './auth/app/configuration/company/company.route'
import { updateCompanyRoute } from './auth/app/configuration/company/updateCompany.route'
import { configurationLayout } from './auth/app/configuration/configuration.layout'
import { configurationRoute } from './auth/app/configuration/configuration.route'
import { createJournalRoute } from './auth/app/configuration/journals/createJournal.route'
import { journalsLayout } from './auth/app/configuration/journals/journals.layout'
import { journalsRoute } from './auth/app/configuration/journals/journals.route'
import { updateJournalRoute } from './auth/app/configuration/journals/updateJournal.route'
import { createSheetRoute } from './auth/app/configuration/sheets/createSheet.route'
import { sheetsLayout } from './auth/app/configuration/sheets/sheets.layout'
import { sheetsRoute } from './auth/app/configuration/sheets/sheets.route'
import { updateSheetRoute } from './auth/app/configuration/sheets/updateSheet.route'
import { computationsLayout } from './auth/app/configuration/statements/computations/computations.layout'
import { createComputationRoute } from './auth/app/configuration/statements/computations/createComputation.route'
import { updateComputationRoute } from './auth/app/configuration/statements/computations/updateComputation.route'
import { createStatementRoute } from './auth/app/configuration/statements/createStatement.route'
import { statementsLayout } from './auth/app/configuration/statements/statements.layout'
import { statementsRoute } from './auth/app/configuration/statements/statements.route'
import { updateStatementRoute } from './auth/app/configuration/statements/updateStatement.route'
import { subscriptionRoute } from './auth/app/configuration/subscription.route'
import { createUserRoute } from './auth/app/configuration/users/createUser.route'
import { updateUserRoute } from './auth/app/configuration/users/updateUser.route'
import { usersLayout } from './auth/app/configuration/users/users.layout'
import { usersRoute } from './auth/app/configuration/users/users.route'
import { createYearRoute } from './auth/app/configuration/years/createYear.route'
import { updateYearRoute } from './auth/app/configuration/years/updateYear.route'
import { yearsLayout } from './auth/app/configuration/years/years.layout'
import { yearsRoute } from './auth/app/configuration/years/years.route'
import { overviewRoute } from './auth/app/overview/overview.route'
import { profileLayout } from './auth/app/profile/profile.layout'
import { profileRoute } from './auth/app/profile/profile.route'
import { updateProfileLayout } from './auth/app/profile/update/updateProfile.layout'
import { updateProfileRoute } from './auth/app/profile/update/updateProfile.page'
import { updateProfileEmailRoute } from './auth/app/profile/update/updateProfileEmail.page'
import { updateProfilePasswordRoute } from './auth/app/profile/update/updateProfilePassword.page'
import { balanceRoute } from './auth/app/reports/balance.route'
import { ledgerRoute } from './auth/app/reports/ledger.route'
import { recordsRoute } from './auth/app/reports/records.route'
import { reportsLayout } from './auth/app/reports/reports.layout'
import { reportsRoute } from './auth/app/reports/reports.route'
import { sheetRoute } from './auth/app/reports/sheet.route'
import { statementRoute } from './auth/app/reports/statement.route'
import { supportRoute } from './auth/app/support.route'
import { createTransactionRoute } from './auth/app/transactions/createTransaction.route'
import { readTransactionRoute } from './auth/app/transactions/readTransaction.route'
import { transactionsLayout } from './auth/app/transactions/transactions.layout'
import { transactionsRoute } from './auth/app/transactions/transactions.route'
import { updateTransactionRoute } from './auth/app/transactions/updateTransaction.route'
import { authLayout } from './auth/auth.layout'
import { rootLayout } from './root.layout'
import { sharedLayout } from './shared/shared.layout'
import { validateInvitationRoute } from './shared/validateInvitation.route'
import { resetPasswordRoute } from './signIn/resetPassword.route'
import { signInLayout } from './signIn/signIn.layout'
import { signInRoute } from './signIn/signIn.route'
import { signUpRoute } from './signUp/signUp.route'


const routeTree = rootLayout.addChildren([

    signUpRoute,

    signInLayout.addChildren([
        signInRoute,
        resetPasswordRoute
    ]),

    sharedLayout.addChildren([
        validateInvitationRoute
    ]),

    authLayout.addChildren([
        activationRoute,
        appLayout.addChildren([
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
                journalsLayout.addChildren([
                    journalsRoute,
                    createJournalRoute,
                    updateJournalRoute
                ]),
                accountsLayout.addChildren([
                    accountsRoute,
                    createAccountRoute,
                    updateAccountRoute
                ]),
                sheetsLayout.addChildren([
                    sheetsRoute,
                    createSheetRoute,
                    updateSheetRoute
                ]),
                statementsLayout.addChildren([
                    statementsRoute,
                    createStatementRoute,
                    updateStatementRoute,
                    computationsLayout.addChildren([
                        createComputationRoute,
                        updateComputationRoute
                    ])
                ])
            ]),

            supportRoute,

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
])

export type ValidRoutes = ParseRoute<typeof routeTree>['fullPath']
// export type ValidParams = NavigateOptions<typeof routeTree>["params"]


export const router = createRouter({
    routeTree,
    context: {
        title: undefined,
        session: {
            isLoading: false,
            mutate: async () => { },
            profile: undefined,
            isSignedIn: undefined
        }
    }
})


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
