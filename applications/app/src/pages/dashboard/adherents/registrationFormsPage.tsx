'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { Content } from "../../../components/layouts/content/content"
import { CreateOneRegistrationForm } from "../../../components/registrationForm/createOneRegistrationForm/createOneRegistrationForm"
import { RegistrationFormsList } from "../../../components/registrationForm/registrationFormsList/registrationFormsList"


export function RegistrationFormsPage() {
    return (
        <Content.Root>
            <CreateOneRegistrationForm>
                <ButtonPlain
                    text="Ajouter un formulaire de préinscription"
                    icon={<IconPlus />}
                />
            </CreateOneRegistrationForm>
            <RegistrationFormsList />
        </Content.Root>

    )
}
