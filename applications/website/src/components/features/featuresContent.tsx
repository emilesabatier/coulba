

import { FormatSelect } from "@coulba/design/formats"
import { useDeviceDetect } from "@coulba/design/hooks"
import { InputSelect } from "@coulba/design/inputs"
import { useState } from "react"
import { features } from "./features"
import { tagColors, tagOptions } from "./tagOptions"


export function FeaturesContent() {
    const [currentFeature, setCurrentFeature] = useState(features[0])
    const { isMobile } = useDeviceDetect()

    const featureOptions = features.map(x => ({
        key: x.key,
        label: x.title
    }))


    return (
        <div className="w-full min-h-full grid grid-cols-1 grid-rows-[max-content_auto] md:grid-cols-[max-content_auto] md:grid-rows-1 gap-y-2">
            {
                isMobile ? (
                    <InputSelect
                        options={featureOptions}
                        value={currentFeature.key}
                        onChange={(value) => {
                            const feature = features.find(x => x.key === value)
                            if (!feature) return
                            setCurrentFeature(feature)
                        }}
                    />
                ) : (
                    <div className="rounded-md p-2">
                        <ol className="flex flex-col justify-start items-stretch gap-1">
                            {
                                features.map((feature) => (
                                    <li key={feature.key}>
                                        <button
                                            onClick={() => setCurrentFeature(feature)}
                                            aria-current={currentFeature.key === feature.key}
                                            className="w-full aria-current:bg-primary/5 p-2 rounded-sm flex justify-end items-center hover:bg-background/50 group"
                                        >
                                            <span className="text-right group-aria-current:text-primary group-hover:underline">
                                                {feature.title}
                                            </span>
                                        </button>
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                )
            }
            <div className="rounded-md p-4 bg-background">
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {
                        currentFeature.content.map((item, index) => (
                            <li
                                key={index.toString()}
                                className="flex flex-col justify-start items-start gap-4 bg-white p-4 rounded-md shadow-outer"
                            >
                                <div className="w-full flex justify-between items-start gap-2">
                                    <span className="text-xl">
                                        {item.title}
                                    </span>
                                    {
                                        !item.tag ? null : <FormatSelect option={item.tag} options={tagOptions} color={tagColors[item.tag]} />
                                    }
                                </div>
                                <span className="text-neutral/50">
                                    {item.description}
                                </span>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}
