'use client'

import { Outlet } from "@tanstack/react-router"
import { CardIcon } from "../../../components/card/card.icon"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"
import { OrderIcon } from "../../../components/order/order.icon"
import { PaymentIcon } from "../../../components/payment/payment.icon"
import { SubscriptionIcon } from "../../../components/subscription/subscription.icon"
import { VoucherIcon } from "../../../components/voucher/voucher.icon"


export function SubscriptionLayout() {
    return (
        <Page.Root id="subscription">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Informations",
                                    icon: <SubscriptionIcon />,
                                    path: "/abonnement/informations"
                                },
                                {
                                    title: "Commandes",
                                    icon: <OrderIcon />,
                                    path: "/abonnement/commandes"
                                },
                                {
                                    title: "Paiements",
                                    icon: <PaymentIcon />,
                                    path: "/abonnement/paiements"
                                },
                                {
                                    title: "Cartes bancaires",
                                    icon: <CardIcon />,
                                    path: "/abonnement/cartes"
                                },
                                {
                                    title: "Bons de réduction",
                                    icon: <VoucherIcon />,
                                    path: "/abonnement/bons"
                                }
                            ]}
                        />
                        <Main.Content
                            children={<Outlet />}
                        />
                    </Main.Root>
                </Page.Content>
            </Page.Main>
        </Page.Root>
    )
}
