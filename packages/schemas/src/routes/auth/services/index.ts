import { generateDeleteBody, generateDeleteReturn } from "./signedUrl/generateDelete"
import { generateGetBody, generateGetReturn } from "./signedUrl/generateGet"
import { generatePutBody, generatePutReturn } from "./signedUrl/generatePut"


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
