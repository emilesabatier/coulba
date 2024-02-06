'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { BackButton } from "../../../components/layouts/backButton"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { DeleteOneRegistration } from "../../../components/registration/deleteOneRegistration/deleteOneRegistration"
import { registrationFormat } from "../../../components/registration/formatRegistration/registration.format"
import { registrationData } from "../../../components/registration/registration.data"
import { RegistrationIcon } from "../../../components/registration/registration.icon"
import { UpdateOneRegistration } from "../../../components/registration/updateOneRegistration/updateOneRegistration"
import { useRegistration } from "../../../hooks/data/useRegistration"
import { registrationRoute } from "../../../routes/dashboard/adherents/registrationForms/registrations/registration.route"



export function RegistrationPage() {
    const { idRegistrationForm, idRegistration } = useParams({ from: registrationRoute.id })
    const registration = useRegistration(idRegistrationForm, idRegistration)

    if (!registration.data) return null

    const dataGroups = registrationData(registration.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/adherents/preinscriptions/$idRegistrationForm/" params={{ idRegistrationForm: registration.data?.idRegistrationForm }} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <RegistrationIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{registrationFormat(registration.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneRegistration registration={registration.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneRegistration>
                    <DeleteOneRegistration registration={registration.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneRegistration>
                </div>
            </Content.Header>
            <DataBlock.Grid id="registration">
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
