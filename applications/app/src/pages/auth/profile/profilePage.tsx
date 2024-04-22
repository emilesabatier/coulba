import { Main } from "../../../components/layouts/main/main"
import { ProfileContent } from "../../../components/profile/profileContent"


export function ProfilePage() {
    return (
        <Main.Root>
            <Main.Header
                title="Profil"
                description="Vous trouverez sur cette page les informations et réglages liés à votre profil."
            />
            <Main.Content>
                <ProfileContent />
            </Main.Content>
        </Main.Root>
    )
}
