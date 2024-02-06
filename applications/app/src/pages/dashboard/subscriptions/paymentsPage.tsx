'use client'

import { Content } from "../../../components/layouts/content/content"
import { PaymentsTable } from "../../../components/payment/paymentsTable/paymentsTable"


export function PaymentsPage() {
    return (
        <Content.Root>
            <PaymentsTable />
        </Content.Root>
    )
}
