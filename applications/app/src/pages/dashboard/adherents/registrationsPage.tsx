'use client'

import { ButtonGhost, ButtonMenu, ButtonPlain } from "@monassosportive/design/buttons"
import { LinearLoader } from "@monassosportive/design/layouts"
import { PopoverMenu } from "@monassosportive/design/overlays"
import { IconCopy, IconDots, IconEdit, IconExternalLink, IconPlus, IconQrcode } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { BackButton } from "../../../components/layouts/backButton"
import { Content } from "../../../components/layouts/content/content"
import { CreateOneRegistration } from "../../../components/registration/createOneRegistration/createOneRegistration"
import { RegistrationsTable } from "../../../components/registration/registrationsTable/registrationsTable"
import { ActivateOneRegistrationForm } from "../../../components/registrationForm/registrationFormActivation/activateOneRegistrationForm"
import { DeactivateOneRegistrationForm } from "../../../components/registrationForm/registrationFormActivation/deactivateOneRegistrationForm"
import { CopyLink } from "../../../components/registrationForm/shareOneRegistrationForm/copyLink"
import { DownloadQRCode } from "../../../components/registrationForm/shareOneRegistrationForm/downloadQRCode"
import { OpenLink } from "../../../components/registrationForm/shareOneRegistrationForm/openLink"
import { UpdateOneRegistrationForm } from "../../../components/registrationForm/updateOneRegistrationForm/updateOneRegistrationForm"
import { useRegistrationForm } from "../../../hooks/data/useRegistrationForm"
import { registrationsLayout } from "../../../routes/dashboard/adherents/registrationForms/registrations/registrations.layout"


export function RegistrationsPage() {
    const { idRegistrationForm } = useParams({ from: registrationsLayout.id })
    const registrationForm = useRegistrationForm(idRegistrationForm)

    if (!registrationForm.data) return <LinearLoader />
    return (
        <Content.Root>
            <div className="flex flex-col justify-start items-stretch gap-4">
                <div className="w-full overflow-hidden flex justify-between items-stretch gap-2">
                    <div className="overflow-hidden flex justify-start items-center gap-1">
                        <BackButton to="/adherents/preinscriptions" params={{}} />
                        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-3xl leading-none text-neutral">{registrationForm.data.label}</h2>
                    </div>
                    <div className="shrink-0 overflow-hidden flex justify-end items-center gap-1">
                        <div className="min-w-fit max-w-full overflow-hidden flex justify-end items-center gap-2">
                            <PopoverMenu
                                align="end"
                                triggerElement={<ButtonGhost icon={<IconDots />} />}
                            >
                                <CopyLink registrationForm={registrationForm.data}>
                                    <ButtonMenu
                                        text="Copier le lien"
                                        icon={<IconCopy />}
                                    />
                                </CopyLink>
                                <OpenLink registrationForm={registrationForm.data}>
                                    <ButtonMenu
                                        text="Ouvrir le lien"
                                        icon={<IconExternalLink />}
                                    />
                                </OpenLink>
                                <DownloadQRCode registrationForm={registrationForm.data}>
                                    <ButtonMenu
                                        text="Télécharger le code QR"
                                        icon={<IconQrcode />}
                                    />
                                </DownloadQRCode>
                                <UpdateOneRegistrationForm registrationForm={registrationForm.data}>
                                    <ButtonMenu
                                        text="Mettre à jour"
                                        icon={<IconEdit />}
                                    />
                                </UpdateOneRegistrationForm>
                                {registrationForm.data.isActive ? <DeactivateOneRegistrationForm registrationForm={registrationForm.data} /> : <ActivateOneRegistrationForm registrationForm={registrationForm.data} />}
                            </PopoverMenu>
                        </div>
                    </div>
                </div>
                <div>
                    <CreateOneRegistration idRegistrationForm={registrationForm.data.id} >
                        <ButtonPlain
                            text="Ajouter une préinscription"
                            icon={<IconPlus />}
                        />
                    </CreateOneRegistration>
                </div>
            </div>
            <RegistrationsTable idRegistrationForm={registrationForm.data.id} />
        </Content.Root >
    )
}
