import { t } from "elysia";

export const loginSchema = t.Object({
    email : t.String({format : 'email'}),
    password : t.String({minLength : 8})
})

export type loginDto = typeof loginSchema.static

export const registerSchema = t.Object({
    name : t.String(),
    email : t.String({format : 'email'}),
    password : t.String({minLength : 8})
})

export type registerDto = typeof registerSchema.static