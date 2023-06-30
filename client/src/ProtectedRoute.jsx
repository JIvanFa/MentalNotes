import { useAuth } from "./context/authContext"
import {Navigate, Outlet} from 'react-router-dom'
export const ProtectedRoute = () => {
    const {loading, isAuthenticated} = useAuth()
    if(loading) console.log('cargando')
    if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>;
    return <Outlet/>;
}
export default ProtectedRoute;
