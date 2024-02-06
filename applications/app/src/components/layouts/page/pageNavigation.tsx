import { useDeviceDetect } from "@monassosportive/design/hooks"
import { DesktopNavigation } from "../navigation/desktopNavigation"
import { MobileNavigation } from "../navigation/mobileNavigation"


export function PageNavigation() {
    const { isMobile } = useDeviceDetect()

    return (
        <div className="w-full h-full flex flex-col justify-between items-stretch overflow-hidden gap-2 md:gap-4 p-2 md:p-4 bg-white shadow-outer md:rounded-tr-md order-1 md:-order-1">
            {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
        </div>
    )
}
