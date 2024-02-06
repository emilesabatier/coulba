import { BadmintonSVG } from "../../assets/svg/sports/badmintonSVG"
import { BasketballSVG } from "../../assets/svg/sports/basketballSVG"
import { BowlingSVG } from "../../assets/svg/sports/bowlingSVG"
import { BoxingSVG } from "../../assets/svg/sports/boxingSVG"
import { DartSVG } from "../../assets/svg/sports/dartSVG"
import { DumbbellSVG } from "../../assets/svg/sports/dumbbellSVG"
import { FencingSVG } from "../../assets/svg/sports/fencingSVG"
import { FootballSVG } from "../../assets/svg/sports/footballSVG"
import { GolfSVG } from "../../assets/svg/sports/golfSVG"
import { JudoSVG } from "../../assets/svg/sports/judoSVG"
import { PingPongSVG } from "../../assets/svg/sports/pingPongSVG"
import { RollerSkateSVG } from "../../assets/svg/sports/rollerSkateSVG"
import { RugbySVG } from "../../assets/svg/sports/rugbySVG"
import { TennisSVG } from "../../assets/svg/sports/tennisSVG"
import { VolleyballSVG } from "../../assets/svg/sports/volleyballSVG"


const icons = [
    <BadmintonSVG />,
    <BasketballSVG />,
    <BowlingSVG />,
    <BoxingSVG />,
    <DartSVG />,
    <DumbbellSVG />,
    <FencingSVG />,
    <FootballSVG />,
    <GolfSVG />,
    <JudoSVG />,
    <PingPongSVG />,
    <RollerSkateSVG />,
    <RugbySVG />,
    <TennisSVG />,
    <VolleyballSVG />,
]


export function IconsFrame() {
    const suffledIcons = icons
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    return (
        <div className="min-w-fit w-full flex justify-center items-center gap-8 p-4 opacity-25">
            {
                suffledIcons.map((icon, index) => (
                    <div
                        key={index.toString()}
                        className="w-16"
                        style={{
                            // width: `${getRandomInt(32, 128)}px`,
                            // opacity: getRandomArbitrary(0.5, 1)
                        }}
                    >
                        {icon}
                    </div>
                ))
            }
        </div>
    )
}
