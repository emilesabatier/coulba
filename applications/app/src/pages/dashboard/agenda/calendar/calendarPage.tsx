'use client'

import { ButtonMenu, ButtonOutline, ButtonPlain } from "@monassosportive/design/buttons"
import { PopoverMenu } from "@monassosportive/design/overlays"
import { IconDots, IconPlus } from "@tabler/icons-react"
import { CalendarContent } from "../../../../components/calendar/calendarContent"
import { CreateOneEvent } from "../../../../components/event/createOneEvent/createOneEvent"
import { Content } from "../../../../components/layouts/content/content"
import { CreateOneLesson } from "../../../../components/lesson/createOneLesson/createOneLesson"
import { CreateOneOccurrence } from "../../../../components/occurrence/createOneOccurrence/createOneOccurrence"


export function CalendarPage() {
    return (
        <Content.Root>
            <div className="flex justify-start items-center gap-1">
                <CreateOneOccurrence>
                    <ButtonPlain
                        text="Ajouter une occurrence"
                        icon={<IconPlus />}
                    />
                </CreateOneOccurrence>
                <PopoverMenu
                    triggerElement={<ButtonOutline icon={<IconDots />} />}
                    align="end"
                >
                    <CreateOneEvent>
                        <ButtonMenu
                            text="Ajouter un évènement"
                            icon={<IconPlus />}
                        />
                    </CreateOneEvent>
                    <CreateOneLesson>
                        <ButtonMenu
                            text="Ajouter un cours"
                            icon={<IconPlus />}
                        />
                    </CreateOneLesson>
                </PopoverMenu>
            </div>
            <CalendarContent />
        </Content.Root>
    )
}
