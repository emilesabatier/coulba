import { Card } from "@monassosportive/design/layouts"
import { CreateOneTicket } from "../support/contactSupport/createOneTicket/createOneTicket"


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
                <CreateOneTicket>
                    <span className="text-information underline cursor-pointer hover:no-underline">
                        nous contacter
                    </span>
                </CreateOneTicket>
                .
            </p>
        </Card>
    )
}
