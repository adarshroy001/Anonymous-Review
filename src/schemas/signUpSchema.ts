import { z } from "zod";

export const usernameValidation = z
.string()
.min(2,'Username must be atleast of 2 characters')
.max(20,'Username must be not more than of 20 characters')
.regex(/^[a-zA-Z0-9_]+$/,'Username must not contain special character') ;

export const singUpSchema = z.object({
    username: usernameValidation ,
    email: z.string().email({message:'Invalid Email Address'}),
    password:z.string().min(6,{message:'Password must be of atleast 6 character'})
})