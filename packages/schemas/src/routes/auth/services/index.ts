import { generateDeleteBody, generateDeleteReturn } from "./signedUrl/generateDelete.js"
import { generateGetBody, generateGetReturn } from "./signedUrl/generateGet.js"
import { generatePutBody, generatePutReturn } from "./signedUrl/generatePut.js"


export const services = {
    use: {
        signedUrl: {
            patch: {
                generateGet: {
                    body: generateGetBody,
                    return: generateGetReturn
                },
                generatePut: {
                    body: generatePutBody,
                    return: generatePutReturn
                },
                generateDelete: {
                    body: generateDeleteBody,
                    return: generateDeleteReturn
                }
            }
        }
    }
}
