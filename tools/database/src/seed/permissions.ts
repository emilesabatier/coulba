import { Action, Resource } from "@monassosportive/schemas/components"


export const permissions: {
    resource: Resource
    actions: Action[]
}[] = [
        {
            resource: "announcement",
            actions: [
                "create",
                "read",
                "update",
                "delete",
                "send_announcement"
            ]
        },
        {
            resource: "contact",
            actions: [
                "create",
                "read",
                "update",
                "delete"
            ]
        },
        {
            resource: "role",
            actions: [
                "create",
                "read",
                "update",
                "delete"
            ]
        },
        {
            resource: "registrationForm",
            actions: [
                "create",
                "read",
                "update",
                "delete"
            ]
        },
        {
            resource: "registration",
            actions: [
                "create",
                "read",
                "update",
                "delete",
                "validate"
            ]
        },
        {
            resource: "account",
            actions: [
                "create",
                "read",
                "update",
                "delete",
                "send_credentials"
            ]
        },
        {
            resource: "adherent",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "occurrence",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "association",
            actions: [
                "read",
                "update"
            ]
        },
        {
            resource: "collaborator",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "conversation",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "event",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "lesson",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "message",
            actions: [
                "create",
            ]
        },
        {
            resource: "rollcall",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "order",
            actions: [
                "read",
            ]
        },
        {
            resource: "voucher",
            actions: [
                "read",
            ]
        },
        {
            resource: "invoice",
            actions: [
                "download_pdf",
            ]
        },
        {
            resource: "subscription",
            actions: [
                "read",
                "update"
            ]
        }
    ]
