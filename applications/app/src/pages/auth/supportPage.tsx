import { Main } from "../../components/layouts/main/main";
import { SendSupportMessageForm } from "../../components/support/sendSupportMessage.form";


export function SupportPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Support"
                description="Vous trouverez sur cette page un formulaire afin de nous contacter rapidement."
            />
            <Main.Content>
                <SendSupportMessageForm />
            </Main.Content>
        </Main.Root>
    )
}
