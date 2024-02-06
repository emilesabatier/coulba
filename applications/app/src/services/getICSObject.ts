import { EventAttributes, createEvents } from 'ics'


export async function getICSObject(attributes: Array<EventAttributes>) {
    return await new Promise<string>((resolve, reject) => {
        createEvents(attributes, (error, value) => {
            if (error) {
                reject(error)
            }

            resolve(value)
        })
    })
}
