import { z } from 'zod'

export const createTaskChema = z.object({
    title: z.string({
        required_error: 'Titulo es requerido'
    }),
    description: z.string({
        required_error: 'La descripcion es necesaria'
    }),
    date: z.string().datetime().optional(),
});


