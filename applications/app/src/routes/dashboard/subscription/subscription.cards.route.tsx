import { createRoute } from "@tanstack/react-router"
import { CardIcon } from "../../../components/card/card.icon"
import { CardsPage } from "../../../pages/dashboard/subscriptions/cardsPage"
import { subscriptionLayout } from "./subscription.layout"


export const subscriptionCardsRoute = createRoute({
    getParentRoute: () => subscriptionLayout,
    beforeLoad: () => ({
        label: "Cartes bancaires",
        icon: <CardIcon />,
        subNavigationParent: "/abonnement/cartes"
    }),
    path: '/cartes',
    component: () => <CardsPage />
})
