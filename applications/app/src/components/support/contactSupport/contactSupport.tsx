import { ButtonPlain } from "@coulba/design/buttons"
import { IconMailPlus } from "@tabler/icons-react"
import { CreateOneTicket } from "./createOneTicket/createOneTicket"


export function ContactSupport() {
    return (
        <div className="w-full flex flex-col justify-start items-stretch gap-2">
            <CreateOneTicket>
                <ButtonPlain
                    icon={<IconMailPlus />}
                    text="Créer un ticket"
                />
            </CreateOneTicket>
            <div className="flex flex-col justify-start items-start">
                <p className="text-sm text-neutral/50">
                    Un ticket sera envoyé au support, nous vous répondrons le plus vite possible.
                </p>
            </div>
        </div>

    )
}
