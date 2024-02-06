import { QRCodeToDataURLOptions, toDataURL } from "qrcode"

const options: QRCodeToDataURLOptions = {
    width: 1024,
    margin: 1,
    errorCorrectionLevel: "H",
    color: {
        dark: "#953737",
        light: "#f6f6f6"
    }
}

export const getQRCode = (value: string) => {
    let qrValue: string | undefined = undefined

    toDataURL(value, options, (err, url) => {
        if (err) {
            console.error(err)
            return
        }
        qrValue = url
    })

    return qrValue
}
