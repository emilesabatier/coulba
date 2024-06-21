import { Button } from "@coulba/design/buttons"
import { toast } from "@coulba/design/overlays"
import { ReactElement } from "react"
import { sendEmailValidation } from "../../services/api/auth/profile/sendEmailValidation"


type SendEmailValidation = {
    children: ReactElement
}

export function SendEmailValidation(props: SendEmailValidation) {
    return (
        <Button
            onClick={async () => {
                const response = await sendEmailValidation()
                if (!response) return

                toast({ title: "Email envoyé", variant: "success" })
                return
            }}
            children={props.children}
        />
    )
}
