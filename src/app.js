import express from 'express'
import morgan from 'morgan'
import cookieParser  from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
//servidor de express
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
//morgan para mostrar las peticiones del servidor
app.use(morgan('dev'));
//imprime en formato JSON 
app.use(express.json());
//para mostrar las cookies
app.use(cookieParser());
//las rutas que se van mostrar en el body del html
app.use('/api',authRoutes);
app.use('/api',taskRoutes);



export default app;


 
