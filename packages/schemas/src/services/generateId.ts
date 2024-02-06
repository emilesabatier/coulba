import crypto from "crypto"

export function generateId() {
    return crypto.randomBytes(16).toString("base64url").replaceAll("_", "0").replaceAll("-", "a").toLowerCase()
}
