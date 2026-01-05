import {z} from 'zod'

export const signInSchema = z.object({
    identifier: z.string(), // identifier is industry term for email here
    password: z.string(),
})