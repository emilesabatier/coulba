import { ParseRoute, createRouter } from '@tanstack/react-router'
import { activationRoute } from './auth/activation.route'
import { attachmentsLayout } from './auth/attachments/attachments.layout'
import { attachmentsRoute } from './auth/attachments/attachments.route'
import { createAttachmentRoute } from './auth/attachments/createAttachment.route'
import { readAttachmentLayout } from './auth/attachments/readAttachment.layout'
import { readAttachmentRoute } from './auth/attachments/readAttachment.route'
import { updateAttachmentRoute } from './auth/attachments/updateAttachment.route'
import { authLayout } from './auth/auth.layout'
import { APIRoute } from './auth/configuration/API.route'
import { accountsLayout } from './auth/configuration/accounts/accounts.layout'
import { accountsRoute } from './auth/configuration/accounts/accounts.route'
import { createAccountRoute } from './auth/configuration/accounts/createAccount.route'
import { readAccountLayout } from './auth/configuration/accounts/readAccount.layout'
import { readAccountRoute } from './auth/configuration/accounts/readAccount.route'
import { updateAccountRoute } from './auth/configuration/accounts/updateAccount.route'
import { closingRoute } from './auth/configuration/closing.route'
import { configurationLayout } from './auth/configuration/configuration.layout'
import { configurationRoute } from './auth/configuration/configuration.route'
import { createJournalRoute } from './auth/configuration/journals/createJournal.route'
import { journalsLayout } from './auth/configuration/journals/journals.layout'
import { journalsRoute } from './auth/configuration/journals/journals.route'
import { updateJournalRoute } from './auth/configuration/journals/updateJournal.route'
import { organizationLayout } from './auth/configuration/organization/organization.layout'
import { organizationRoute } from './auth/configuration/organization/organization.route'
import { updateOrganizationRoute } from './auth/configuration/organization/updateOrganization.route'
import { accountSheetsLayout } from './auth/configuration/sheets/accountSheets/accountSheets.layout'
import { createAccountSheetRoute } from './auth/configuration/sheets/accountSheets/createAccountSheet.route'
import { readAccountSheetLayout } from './auth/configuration/sheets/accountSheets/readAccountSheet.layout'
import { readAccountSheetRoute } from './auth/configuration/sheets/accountSheets/readAccountSheet.route'
import { updateAccountSheetRoute } from './auth/configuration/sheets/accountSheets/updateAccountSheet.route'
import { createSheetRoute } from './auth/configuration/sheets/createSheet.route'
import { readSheetLayout } from './auth/configuration/sheets/readSheet.layout'
import { readSheetRoute } from './auth/configuration/sheets/readSheet.route'
import { sheetsLayout } from './auth/configuration/sheets/sheets.layout'
import { sheetsRoute } from './auth/configuration/sheets/sheets.route'
import { updateSheetRoute } from './auth/configuration/sheets/updateSheet.route'
import { computationStatementsLayout } from './auth/configuration/statements/computations/computationStatements/computationStatements.layout'
import { createComputationStatementRoute } from './auth/configuration/statements/computations/computationStatements/createComputationStatement.route'
import { readComputationStatementLayout } from './auth/configuration/statements/computations/computationStatements/readComputationStatement.layout'
import { readComputationStatementRoute } from './auth/configuration/statements/computations/computationStatements/readComputationStatement.route'
import { updateComputationStatementRoute } from './auth/configuration/statements/computations/computationStatements/updateComputationStatement.route'
import { computationsLayout } from './auth/configuration/statements/computations/computations.layout'
import { computationsRoute } from './auth/configuration/statements/computations/computations.route'
import { createComputationRoute } from './auth/configuration/statements/computations/createComputation.route'
import { readComputationLayout } from './auth/configuration/statements/computations/readComputation.layout'
import { readComputationRoute } from './auth/configuration/statements/computations/readComputation.route'
import { updateComputationRoute } from './auth/configuration/statements/computations/updateComputation.route'
import { accountStatementsLayout } from './auth/configuration/statements/statements/accountStatements/accountStatements.layout'
import { createAccountStatementRoute } from './auth/configuration/statements/statements/accountStatements/createAccountStatement.route'
import { readAccountStatementLayout } from './auth/configuration/statements/statements/accountStatements/readAccountStatement.layout'
import { readAccountStatementRoute } from './auth/configuration/statements/statements/accountStatements/readAccountStatement.route'
import { updateAccountStatementRoute } from './auth/configuration/statements/statements/accountStatements/updateAccountStatement.route'
import { createStatementRoute } from './auth/configuration/statements/statements/createStatement.route'
import { readStatementLayout } from './auth/configuration/statements/statements/readStatement.layout'
import { readStatementRoute } from './auth/configuration/statements/statements/readStatement.route'
import { statementsLayout } from './auth/configuration/statements/statements/statements.layout'
import { statementsRoute } from './auth/configuration/statements/statements/statements.route'
import { updateStatementRoute } from './auth/configuration/statements/statements/updateStatement.route'
import { statementsConfigLayout } from './auth/configuration/statements/statementsConfig.layout'
import { statementsConfigRoute } from './auth/configuration/statements/statementsConfig.route'
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
import { createRecordRoute } from './auth/records/createRecord.route'
import { readRecordLayout } from './auth/records/readRecord.layout'
import { readRecordRoute } from './auth/records/readRecord.route'
import { recordsLayout } from './auth/records/records.layout'
import { recordsRoute } from './auth/records/records.route'
import { createRowRoute } from './auth/records/rows/createRow.route'
import { readRowLayout } from './auth/records/rows/readRow.layout'
import { readRowRoute } from './auth/records/rows/readRow.route'
import { rowsLayout } from './auth/records/rows/rows.layout'
import { updateRowRoute } from './auth/records/rows/updateRow.route'
import { updateRecordRoute } from './auth/records/updateRecord.route'
import { balanceRoute } from './auth/reports/balance.route'
import { journalRoute } from './auth/reports/journal.route'
import { ledgerRoute } from './auth/reports/ledger.route'
import { reportsLayout } from './auth/reports/reports.layout'
import { reportsRoute } from './auth/reports/reports.route'
import { sheetRoute } from './auth/reports/sheet.route'
import { statementRoute } from './auth/reports/statement.route'
import { supportRoute } from './auth/support.route'
import { rootLayout } from './root.layout'
import { sharedLayout } from './unauth/shared/shared.layout'
import { validateEmailRoute } from './unauth/shared/validateEmail.route'
import { validateInvitationRoute } from './unauth/shared/validateInvitation.route'
import { resetPasswordRoute } from './unauth/signIn/resetPassword.route'
import { signInLayout } from './unauth/signIn/signIn.layout'
import { signInRoute } from './unauth/signIn/signIn.route'
import { signUpRoute } from './unauth/signUp/signUp.route'
import { unauthLayout } from './unauth/unauth.layout'


const routeTree = rootLayout.addChildren([
    unauthLayout.addChildren([
        signUpRoute,

        signInLayout.addChildren([
            signInRoute,
            resetPasswordRoute
        ]),

        sharedLayout.addChildren([
            validateInvitationRoute,
            validateEmailRoute
        ])
    ]),
    authLayout.addChildren([
        overviewRoute,
        activationRoute,
        supportRoute,

        profileLayout.addChildren([
            profileRoute,
            updateProfileLayout.addChildren([
                updateProfileRoute,
                updateProfileEmailRoute,
                updateProfilePasswordRoute
            ])
        ]),

        recordsLayout.addChildren([
            recordsRoute,
            createRecordRoute,
            readRecordLayout.addChildren([
                readRecordRoute,
                updateRecordRoute,
                rowsLayout.addChildren([
                    createRowRoute,
                    readRowLayout.addChildren([
                        readRowRoute,
                        updateRowRoute
                    ])
                ])
            ])
        ]),

        attachmentsLayout.addChildren([
            attachmentsRoute,
            createAttachmentRoute,
            readAttachmentLayout.addChildren([
                readAttachmentRoute,
                updateAttachmentRoute
            ])
        ]),

        reportsLayout.addChildren([
            reportsRoute,
            journalRoute,
            ledgerRoute,
            balanceRoute,
            sheetRoute,
            statementRoute
        ]),

        configurationLayout.addChildren([
            configurationRoute,
            organizationLayout.addChildren([
                organizationRoute,
                updateOrganizationRoute
            ]),
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
                readAccountLayout.addChildren([
                    readAccountRoute,
                    updateAccountRoute
                ])
            ]),
            sheetsLayout.addChildren([
                sheetsRoute,
                createSheetRoute,
                readSheetLayout.addChildren([
                    readSheetRoute,
                    updateSheetRoute,
                    accountSheetsLayout.addChildren([
                        createAccountSheetRoute,
                        readAccountSheetLayout.addChildren([
                            readAccountSheetRoute,
                            updateAccountSheetRoute
                        ])
                    ])
                ])
            ]),
            statementsConfigLayout.addChildren([
                statementsConfigRoute,
                statementsLayout.addChildren([
                    statementsRoute,
                    createStatementRoute,
                    readStatementLayout.addChildren([
                        readStatementRoute,
                        updateStatementRoute,
                        accountStatementsLayout.addChildren([
                            createAccountStatementRoute,
                            readAccountStatementLayout.addChildren([
                                readAccountStatementRoute,
                                updateAccountStatementRoute
                            ])
                        ])
                    ])
                ]),
                computationsLayout.addChildren([
                    computationsRoute,
                    createComputationRoute,
                    readComputationLayout.addChildren([
                        readComputationRoute,
                        updateComputationRoute,
                        computationStatementsLayout.addChildren([
                            createComputationStatementRoute,
                            readComputationStatementLayout.addChildren([
                                readComputationStatementRoute,
                                updateComputationStatementRoute
                            ])
                        ])
                    ])
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
        description: undefined,
        session: {
            isLoading: false,
            mutate: async () => { },
            profile: undefined,
            isSignedIn: false
        }
    },
    notFoundMode: "root"
})


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
