import {z} from 'zod'

export const messegeSchema = z.object({
    content: z.string().min(3 , {message:'message should atleast contain 3 characters'})
    .max(300,{message:'message shouldnot contain more than 300 characters'})
})