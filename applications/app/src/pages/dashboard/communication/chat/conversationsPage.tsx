'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconMessagePlus } from "@tabler/icons-react"
import { ConversationsList } from "../../../../components/conversation/conversationsList/conversationsList"
import { CreateOneConversation } from "../../../../components/conversation/createOneConversation/createOneConversation"
import { Content } from "../../../../components/layouts/content/content"



export function ConversationsPage() {
    return (
        <Content.Root>
            <CreateOneConversation>
                <ButtonPlain
                    text="Démarrer une conversation"
                    icon={<IconMessagePlus />}
                />
            </CreateOneConversation>
            <ConversationsList />
        </Content.Root>
    )
}
