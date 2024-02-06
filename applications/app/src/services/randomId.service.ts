import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890abcdef', 16)


export function randomId(): string {
    return nanoid()
}