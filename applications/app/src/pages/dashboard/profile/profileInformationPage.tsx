'use client'

import { ButtonSubtle } from "@monassosportive/design/buttons"
import { IconEdit } from "@tabler/icons-react"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { Placeholder } from "../../../components/layouts/placeholder"
import { profileData } from "../../../components/profile/profile.data"
import { UpdateProfile } from "../../../components/profile/updateProfile/updateProfile"
import { useProfile } from "../../../hooks/useProfile"


export function ProfileInformationPage() {
    const profile = useProfile()

    const dataGroups = !profile.data ? [] : profileData(profile.data).filter(x => ["identity", "metadata"].includes(x.key))
    return (
        <Content.Root>
            <Placeholder error={profile.error} isLoading={profile.isLoading} loadingType="circular">
                {
                    !profile.data ? null : (
                        <UpdateProfile profile={profile.data}>
                            <ButtonSubtle
                                text="Modifier"
                                icon={<IconEdit />}
                            />
                        </UpdateProfile>
                    )
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
        </Content.Root>
    )
}
