'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { DataBlock } from "../../../../components/layouts/dataBlock/dataBlock"
import { DeleteOneLesson } from "../../../../components/lesson/deleteOneLesson/deleteOneLesson"
import { lessonFormat } from "../../../../components/lesson/formatLesson/lesson.format"
import { lessonData } from "../../../../components/lesson/lesson.data"
import { LessonIcon } from "../../../../components/lesson/lesson.icon"
import { UpdateOneLesson } from "../../../../components/lesson/updateOneLesson/updateOneLesson"
import { useLesson } from "../../../../hooks/data/useLesson"
import { lessonRoute } from "../../../../routes/dashboard/agenda/lessons/lesson.route"


export function LessonPage() {
    const { idLesson } = useParams({ from: lessonRoute.id })
    const lesson = useLesson(idLesson)

    if (!lesson.data) return null

    const dataGroups = lessonData(lesson.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/agenda/cours" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <LessonIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{lessonFormat(lesson.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneLesson lesson={lesson.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneLesson>
                    <DeleteOneLesson lesson={lesson.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneLesson>
                </div>
            </Content.Header>
            <DataBlock.Grid id="lesson">
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
