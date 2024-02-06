'use client'

import { ButtonGhost, ButtonMenu } from "@monassosportive/design/buttons"
import { PopoverMenu } from "@monassosportive/design/overlays"
import { IconDoorExit, IconDots, IconEdit, IconUsersGroup } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { accountFormat } from "../../../../components/account/formatAccount/account.format"
import { ConversationContent } from "../../../../components/conversation/conversationContent"
import { LeaveOneConversation } from "../../../../components/conversation/leaveOneConversation/leaveOneConversation"
import { UpdateConversationAccountConversations } from "../../../../components/conversation/updateConversationAccountConversations/updateConversationAccountConversations"
import { UpdateConversationLabel } from "../../../../components/conversation/updateConversationLabel/updateConversationLabel"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { useConversation } from "../../../../hooks/data/useConversation"
import { conversationRoute } from "../../../../routes/dashboard/communication/chat/conversation.route"


export function ConversationPage() {
    const { idConversation } = useParams({ from: conversationRoute.id })
    const conversation = useConversation(idConversation)

    return (
        <Content.Root className="h-full max-h-full">
            <Content.Header className="justify-between gap-2">
                <div className="w-full min-h-fit overflow-hidden flex justify-start items-center gap-1">
                    <BackButton to="/communication/messagerie" params={{}} />
                    <div className="flex justify-start items-center overflow-hidden">
                        {
                            !conversation.data?.label ? (
                                <div className="inline-flex justify-start items-center overflow-hidden gap-1 whitespace-nowrap text-ellipsis">
                                    {conversation.data?.accountConversations.map((accountConversation, index) => {
                                        return (
                                            <span className="text-left ">
                                                {accountFormat(accountConversation.account)}{index !== conversation.data?.accountConversations.length - 1 ? "," : ""}
                                            </span>
                                        )
                                    })}
                                </div>
                            )
                                : (
                                    <span>
                                        {conversation.data?.label}
                                    </span>
                                )
                        }
                    </div>
                </div>
                <div className="shrink-0 overflow-hidden flex justify-end items-center gap-1">
                    {
                        !conversation.data ? null : (
                            <PopoverMenu
                                triggerElement={<ButtonGhost icon={<IconDots />} />}
                                align="end"
                            >
                                <UpdateConversationLabel conversation={conversation.data}>
                                    <ButtonMenu
                                        text="Modifier le libellé"
                                        icon={<IconEdit />}
                                    />
                                </UpdateConversationLabel>
                                <UpdateConversationAccountConversations conversation={conversation.data}>
                                    <ButtonMenu
                                        text="Ajouter/modifier les participants"
                                        icon={<IconUsersGroup />}
                                    />
                                </UpdateConversationAccountConversations>
                                <LeaveOneConversation conversation={conversation.data}>
                                    <ButtonMenu
                                        text="Quitter"
                                        icon={<IconDoorExit />}
                                        color="error"
                                    />
                                </LeaveOneConversation>
                            </PopoverMenu>
                        )
                    }
                </div>
            </Content.Header>
            <ConversationContent />
        </Content.Root>
    )
}
