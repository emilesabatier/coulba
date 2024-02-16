import { Action, Resource, Scope } from "@coulba/schemas/components"


export const permissionRoles: {
    resource: Resource
    scope: Scope
    actions: Action[]
}[] = [
        {
            resource: "adherent",
            scope: "related",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "registrationForm",
            scope: "association",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "collaborator",
            scope: "association",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "event",
            scope: "related",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "lesson",
            scope: "related",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "occurrence",
            scope: "related",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "rollcall",
            scope: "association",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "contact",
            scope: "related",
            actions: [
                "read",
                "update",
            ]
        },
        {
            resource: "conversation",
            scope: "related",
            actions: [
                "create",
                "read",
                "update",
                "delete",
            ]
        },
        {
            resource: "message",
            scope: "related",
            actions: [
                "create",
            ]
        },
        {
            resource: "announcement",
            scope: "related",
            actions: [
                "create",
                "read",
                "update",
                "delete",
                "send_announcement"
            ]
        }
    ]
