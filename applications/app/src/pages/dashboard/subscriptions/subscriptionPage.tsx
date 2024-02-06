'use client'

import { Content } from "../../../components/layouts/content/content"
import { Placeholder } from "../../../components/layouts/placeholder"
import { SubscriptionContent } from "../../../components/subscription/subscriptionContent"
import { useAssociation } from "../../../hooks/data/useAssociation"
import { useSubscription } from "../../../hooks/data/useSubscription"


export function SubscriptionPage() {
    const association = useAssociation()
    const subscription = useSubscription(association.data?.subscription.id)

    return (
        <Content.Root>
            <Placeholder isLoading={association.isLoading} error={association.error}>
                {!subscription.data ? null : (
                    <SubscriptionContent subscription={subscription.data} />
                )}
            </Placeholder>
        </Content.Root>
    )
}
