import crypto from "crypto"


export function generateId() {
    return crypto.randomBytes(16).toString("base64url").replace(/_/g, "0").replace(/-/g, "a").toLowerCase()
}
