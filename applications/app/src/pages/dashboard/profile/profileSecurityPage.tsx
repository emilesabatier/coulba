'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { Card } from "@monassosportive/design/layouts"
import { toast } from "@monassosportive/design/overlays"
import { IconMailCog, IconPasswordUser } from "@tabler/icons-react"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { Placeholder } from "../../../components/layouts/placeholder"
import { profileData } from "../../../components/profile/profile.data"
import { UpdateEmail } from "../../../components/profile/updateEmail/updateEmail"
import { UpdatePassword } from "../../../components/profile/updatePassword/updatePassword"
import { useProfile } from "../../../hooks/useProfile"
import { sendEmailValidation } from "../../../services/routes/dashboard/profile/sendEmailValidation"


export function ProfileSecurityPage() {
    const profile = useProfile()

    const dataGroups = !profile.data ? [] : profileData(profile.data).filter(x => ["security"].includes(x.key))
    return (
        <Content.Root>
            <Placeholder error={profile.error} isLoading={profile.isLoading}>
                <div className="flex justify-start items-center gap-1">
                    <UpdateEmail>
                        <ButtonOutline
                            text="Modifier l'email"
                            icon={<IconMailCog />}
                            color="error"
                        />
                    </UpdateEmail>
                    <UpdatePassword>
                        <ButtonOutline
                            text="Modifier le mot de passe"
                            icon={<IconPasswordUser />}
                            color="error"
                        />
                    </UpdatePassword>
                </div>
            </Placeholder>
            <div>
                <Placeholder error={profile.error} isLoading={profile.isLoading} loadingType={null}>
                    {
                        (profile.data?.emailAddressTemporary !== null && profile.data?.emailAddressTemporary !== profile.data?.emailAddress) ? (
                            <Card variant="warning">
                                <span className="text-warning text-base">
                                    Vous avez demandé un changement d'adresse email à l'adresse suivante: {profile.data?.emailAddressTemporary}.
                                    <br /> Si vous n'avez pas reçu l'email de validation, vous pouvez en &nbsp;
                                    <span className="text-warning underline cursor-pointer hover:no-underline" onClick={async () => {
                                        const response = await sendEmailValidation()
                                        if (!response.status) return

                                        toast({ title: "Email de validation envoyé à la nouvelle adresse.", variant: "information" })
                                    }}>
                                        renvoyer un nouveau
                                    </span>.
                                </span>
                            </Card>
                        ) : null
                    }
                </Placeholder>
                <DataBlock.Grid id="profile">
                    {
                        dataGroups.map((group) => (
                            <DataBlock.Root key={group.key}>
                                <DataBlock.Header title={group.title} />
                                <DataBlock.Content>
                                    {
                                        group.items.map((item) => (
                                            <DataBlock.Item
                                                key={item.key}
                                                label={item.label}
                                                description={item.description}
                                                children={item.value}
                                            />
                                        ))
                                    }
                                </DataBlock.Content>
                            </DataBlock.Root>
                        ))
                    }
                </DataBlock.Grid>
            </div>
        </Content.Root>
    )
}
