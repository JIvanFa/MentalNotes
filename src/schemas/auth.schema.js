import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Nombre de ususario es requerido',
    }),
    email: z.string({
        required_error: 'El correo es requerido',
    }).email({
        message : 'Correo inválido',
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, { message: 'La contraseña debe tener por lo menos 6 caracteres' })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'El correo es requerido'
    }).email({
        message : 'Correo inválido'
    }),
    password: z.string({
        required_error: 'La contraseña es requerida'
    }).min(6, { message: 'La contraseña debe contener por lo menos 6 caracteres' })
})