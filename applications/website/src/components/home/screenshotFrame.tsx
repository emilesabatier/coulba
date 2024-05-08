import screenshot from "../../assets/image/screenshot.webp"


export function ScreenshotFrame() {
    return (
        <div
            className="min-w-fit w-full flex justify-center items-center bg-white rounded-md border border-neutral/20 overflow-hidden"
            style={{ maskImage: "linear-gradient(rgb(0 0 0 / 100%), transparent)" }}
        >
            <img
                src={screenshot}
                alt="Une capture d'écran de l'application web"
                rel="preload"
                loading="lazy"
                className="w-full"
            />
        </div>
    )
}
