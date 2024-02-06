'use server'

import { formatPrice } from "@monassosportive/design/formats"
import { InputInteger, InputSlider } from "@monassosportive/design/inputs"
import { IconCheck, IconDiscountCheck } from "@tabler/icons-react"
import { useState } from "react"
import { included } from "./included"


export function PricingContent() {
    const [adherentsNumber, setAdherentsNumber] = useState(100)

    const pricePerAdherentPerMonth = 0.1
    const total = (20 + (adherentsNumber * pricePerAdherentPerMonth))
    const perAdherentTotal = (adherentsNumber === 0) ? 0 : total / adherentsNumber

    return (
        <div className="w-full min-h-full flex flex-col justify-start items-stretch gap-4">
            <p className="max-w-md">
                Parce que l'activité d'une association sportive dépend principalement de son nombre d'adhérents, nous avons fait le choix de proposer une <b>offre unique</b>, qui dépend seulement du nombre d'<b>adhérents actif</b> pendant la saison en cours.
            </p>
            <div className="flex flex-col justify-start items-stretch gap-2 p-2">
                <span className="text-lg text-neutral/50">
                    Inclus dans l'offre
                </span>
                <ol className="flex flex-wrap justify-start items-stretch gap-4 px-2">
                    {
                        included.map((item, index) => (
                            <li
                                key={index.toString()}
                                className="flex justify-start items-center gap-2"
                            >
                                <IconCheck size={16} className="stroke-primary" />
                                <span>{item}</span>
                            </li>
                        ))
                    }
                </ol>
            </div>
            <div className="flex flex-col justify-start items-stretch gap-2">
                <div className="w-full grid grid-cols-1 md:grid-cols-[auto_auto] gap-2 p-4 bg-background rounded-md">
                    <div className="rounded-md bg-white shadow-outer p-4 flex flex-col justify-start items-stretch gap-4">
                        <div className="flex flex-col justify-start items-stretch gap-2 p-2">
                            <div className="inline-flex flex-col justify-start items-start">
                                <span className="text-lg">Nombre d'adhérents</span>
                                <span className="text-neutral/50 max-w-md">
                                    Seuls comptent les adhérents inscrits pour la saison en cours. La base historique n'est pas comptabilisée.
                                </span>
                            </div>
                            <div className="w-full flex flex-col md:flex-row justify-start items-center gap-2">
                                <InputInteger
                                    value={adherentsNumber}
                                    onChange={(value) => setAdherentsNumber(value ?? 0)}
                                    className="max-w-full w-full md:w-fit"
                                />
                                <div className="w-full flex flex-col justify-start items-stretch gap-2 p-4">
                                    <InputSlider
                                        min={0}
                                        max={1000}
                                        value={adherentsNumber}
                                        onChange={(value) => setAdherentsNumber(value ?? 0)}
                                    />
                                    <div className="w-full flex justify-between items-center gap-4">
                                        <span className="text-neutral/50">0</span>
                                        <span className="text-neutral/50">1000</span>
                                    </div>
                                </div>
                            </div>
                            <span className="text-neutral/50 max-w-md">
                                Le prix est calculé sur une base mensuelle d'un montant fixe de 20.00€ et d'un montant variable de 0.10€ par adhérent.
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-stretch gap-2">
                        <div className="h-full bg-white shadow-outer rounded-md p-4 flex flex-col justify-start items-stretch gap-4">
                            <div className="flex flex-col justify-start items-center gap-1">
                                <span className="self-start uppercase text-sm text-neutral/50">Adhérents</span>
                                <div className="p-2 w-full flex flex-col justify-start items-stretch">
                                    <span className="font-bold text-lg">{adherentsNumber}</span>
                                </div>
                            </div>
                            <div className="h-[1px] w-full bg-background" />
                            <div className="flex flex-col justify-start items-center gap-1">
                                <div className="w-full inline-flex justify-start items-center gap-1">
                                    <span className="uppercase text-sm text-neutral/50">Total</span>
                                    <span className="uppercase text-xs text-neutral/50">(TTC)</span>
                                </div>
                                <div className="p-2 w-full flex flex-col justify-start items-stretch">
                                    <div className="w-full inline-flex justify-between items-center gap-1">
                                        <span className="font-bold text-lg">{formatPrice(total)}€</span>
                                        <span className="ml-auto text-sm lowercase text-neutral/50">/mois</span>
                                    </div>
                                    <div className="w-full inline-flex justify-between items-center gap-1">
                                        <span className="font-bold text-lg">{formatPrice(perAdherentTotal)}€</span>
                                        <span className="ml-auto text-sm lowercase text-neutral/50">/adhérent/mois</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-start items-start gap-2 bg-warning/5 border border-warning/50 rounded-md p-2">
                    <IconDiscountCheck className="stroke-warning" />
                    <span className="text-warning">Période d'essai gratuite de 15 jours.</span>
                </div>
            </div>
        </div>
    )
}
