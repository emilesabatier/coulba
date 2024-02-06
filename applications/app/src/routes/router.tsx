import { NavigateOptions, ParseRoute, createRouter } from '@tanstack/react-router'
import { connectionRoute } from './connection/connection.route'
import { accountRoute } from './dashboard/accounts/account.route'
import { accountsLayout } from './dashboard/accounts/accounts.layout'
import { accountsRoute } from './dashboard/accounts/accounts.route'
import { roleRoute } from './dashboard/accounts/roles/role.route'
import { rolesLayout } from './dashboard/accounts/roles/roles.layout'
import { rolesRoute } from './dashboard/accounts/roles/roles.route'
import { adherentRoute } from './dashboard/adherents/adherent.route'
import { adherentsExportRoute } from './dashboard/adherents/adherents.export.route'
import { adherentsLayout } from './dashboard/adherents/adherents.layout'
import { adherentsRoute } from './dashboard/adherents/adherents.route'
import { registrationFormsLayout } from './dashboard/adherents/registrationForms/registrationForms.layout'
import { registrationFormsRoute } from './dashboard/adherents/registrationForms/registrationForms.route'
import { registrationRoute } from './dashboard/adherents/registrationForms/registrations/registration.route'
import { registrationsLayout } from './dashboard/adherents/registrationForms/registrations/registrations.layout'
import { registrationsRoute } from './dashboard/adherents/registrationForms/registrations/registrations.route'
import { agendaLayout } from './dashboard/agenda/agenda.layout'
import { agendaRoute } from './dashboard/agenda/agenda.route'
import { calendarRoute } from './dashboard/agenda/calendar/calendar.route'
import { eventRoute } from './dashboard/agenda/events/event.route'
import { eventsLayout } from './dashboard/agenda/events/events.layout'
import { eventsRoute } from './dashboard/agenda/events/events.route'
import { lessonRoute } from './dashboard/agenda/lessons/lesson.route'
import { lessonsLayout } from './dashboard/agenda/lessons/lessons.layout'
import { lessonsRoute } from './dashboard/agenda/lessons/lessons.route'
import { rollcallRoute } from './dashboard/agenda/rollcalls/rollcall.route'
import { rollcallsLayout } from './dashboard/agenda/rollcalls/rollcalls.layout'
import { rollcallsRoute } from './dashboard/agenda/rollcalls/rollcalls.route'
import { associationInformationRoute } from './dashboard/association/association.information.route'
import { associationLayout } from './dashboard/association/association.layout'
import { associationRoute } from './dashboard/association/association.route'
import { associationSeasonsRoute } from './dashboard/association/association.seasons.route'
import { associationSportRoute } from './dashboard/association/sports/association.sport.route'
import { associationSportsLayout } from './dashboard/association/sports/association.sports.layout'
import { associationSportsRoute } from './dashboard/association/sports/association.sports.route'
import { collaboratorRoute } from './dashboard/collaborators/collaborator.route'
import { collaboratorsLayout } from './dashboard/collaborators/collaborators.layout'
import { collaboratorsRoute } from './dashboard/collaborators/collaborators.route'
import { announcementRoute } from './dashboard/communication/announcements/announcement.route'
import { announcementsLayout } from './dashboard/communication/announcements/announcements.layout'
import { announcementsRoute } from './dashboard/communication/announcements/announcements.route'
import { chatLayout } from './dashboard/communication/chat/chat.layout'
import { conversationRoute } from './dashboard/communication/chat/conversation.route'
import { conversationsRoute } from './dashboard/communication/chat/conversations.route'
import { communicationLayout } from './dashboard/communication/communication.layout'
import { communicationRoute } from './dashboard/communication/communication.route'
import { contactRoute } from './dashboard/communication/contacts/contact.route'
import { contactsLayout } from './dashboard/communication/contacts/contacts.layout'
import { contactsRoute } from './dashboard/communication/contacts/contacts.route'
import { dashboardLayout } from './dashboard/dashboard.layout'
import { overviewRoute } from './dashboard/overview/overview.route'
import { profileLayout } from './dashboard/profile/profile.layout'
import { profileRoute } from './dashboard/profile/profile.route'
import { profileInformationRoute } from './dashboard/profile/profileInformation.route'
import { profileSecurityRoute } from './dashboard/profile/profileSecurity.route'
import { subscriptionCardsRoute } from './dashboard/subscription/subscription.cards.route'
import { subscriptionInformationRoute } from './dashboard/subscription/subscription.information.route'
import { subscriptionLayout } from './dashboard/subscription/subscription.layout'
import { subscriptionOrdersRoute } from './dashboard/subscription/subscription.orders.route'
import { subscriptionPaymentsRoute } from './dashboard/subscription/subscription.payments.route'
import { subscriptionRoute } from './dashboard/subscription/subscription.route'
import { subscriptionVouchersRoute } from './dashboard/subscription/subscription.vouchers.route'
import { rootLayout } from './root.layout'
import { positionRoute } from './dashboard/collaborators/positions/position.route'
import { positionsLayout } from './dashboard/collaborators/positions/positions.layout'
import { positionsRoute } from './dashboard/collaborators/positions/positions.route'


const routeTree = rootLayout.addChildren([
    connectionRoute,
    dashboardLayout.addChildren([
        overviewRoute,

        adherentsLayout.addChildren([
            adherentsRoute,
            adherentRoute,
            registrationFormsLayout.addChildren([
                registrationFormsRoute,
                registrationsLayout.addChildren([
                    registrationsRoute,
                    registrationRoute
                ])
            ]),
            adherentsExportRoute,
        ]),

        collaboratorsLayout.addChildren([
            collaboratorsRoute,
            collaboratorRoute,
            positionsLayout.addChildren([
                positionsRoute,
                positionRoute
            ]),
        ]),

        accountsLayout.addChildren([
            accountsRoute,
            accountRoute,
            rolesLayout.addChildren([
                rolesRoute,
                roleRoute
            ]),
        ]),

        agendaLayout.addChildren([
            agendaRoute,
            calendarRoute,
            lessonsLayout.addChildren([
                lessonsRoute,
                lessonRoute
            ]),
            eventsLayout.addChildren([
                eventsRoute,
                eventRoute
            ]),
            rollcallsLayout.addChildren([
                rollcallsRoute,
                rollcallRoute
            ])
        ]),

        communicationLayout.addChildren([
            communicationRoute,
            chatLayout.addChildren([
                conversationsRoute,
                conversationRoute
            ]),
            announcementsLayout.addChildren([
                announcementsRoute,
                announcementRoute
            ]),
            contactsLayout.addChildren([
                contactsRoute,
                contactRoute
            ])
        ]),

        subscriptionLayout.addChildren([
            subscriptionRoute,
            subscriptionInformationRoute,
            subscriptionOrdersRoute,
            subscriptionPaymentsRoute,
            subscriptionCardsRoute,
            subscriptionVouchersRoute
        ]),

        associationLayout.addChildren([
            associationRoute,
            associationInformationRoute,
            associationSportsLayout.addChildren([
                associationSportsRoute,
                associationSportRoute
            ]),
            associationSeasonsRoute
        ]),

        profileLayout.addChildren([
            profileRoute,
            profileInformationRoute,
            profileSecurityRoute
        ])

    ])
])

export type ValidRoutes = ParseRoute<typeof routeTree>['fullPath']
export type ValidParams = NavigateOptions<typeof routeTree>["params"]


export const router = createRouter({
    routeTree,
    context: {
        label: undefined,
        title: undefined,
        icon: undefined,
        subNavigationParent: undefined,
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
