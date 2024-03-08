import { Card } from "@coulba/design/layouts"
import { CreateTicket } from "../support/contactSupport/createTicket/createTicket"


export function ContactBanner() {
    return (
        <Card variant="information">
            <p className="text-information"  >
                Si vous rencontrez la moindre difficulté, n&apos;hésitez pas à&nbsp;
                {/* <Link to="/documentation/$articlePath" params={{ articlePath: "introduction" }}>
                    <span className="text-information underline cursor-pointer hover:no-underline">
                        consulter la documentation
                    </span>
                </Link>
                &nbsp;ou&nbsp; */}
                <CreateTicket>
                    <span className="text-information underline cursor-pointer hover:no-underline">
                        nous contacter
                    </span>
                </CreateTicket>
                .
            </p>
        </Card>
    )
}
