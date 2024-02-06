'use client'

import { Content } from "../../../components/layouts/content/content"
import { OrdersTable } from "../../../components/order/ordersTable/ordersTable"


export function OrdersPage() {
    return (
        <Content.Root>
            <OrdersTable />
        </Content.Root>
    )
}
