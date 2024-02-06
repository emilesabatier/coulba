'use client'

import { Content } from "../../../components/layouts/content/content"
import { VouchersTable } from "../../../components/voucher/vouchersTable/vouchersTable"


export function VouchersPage() {
    return (
        <Content.Root>
            <VouchersTable />
        </Content.Root>
    )
}
