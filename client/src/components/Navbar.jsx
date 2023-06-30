import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Navbar = () => {

    const { isAuthenticated, logout, user } = useAuth()

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 rounded-lg">
            <h1 className="text-4xl font-bold">Mental Notes</h1>
            <ul className="flex gap-x-4 ">
                {isAuthenticated ? (
                    <>
                        <li className="text-2xl">
                            Bienvenido {user.username}
                        </li>
                        <li>
                            <Link to='/add-task'
                                className="bg-indigo-500 px-4 py-1 rounded-md text-2xl"
                            >Crear tarea</Link>
                        </li>
                        <li>
                            <Link to='/login' onClick={() => {
                                logout();
                            }}
                                className="bg-red-500 rounded-md px-4 py-1 text-2xl"
                            >Cerrar sesión</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'
                                className="bg-indigo-500 px-4 py-1 rounded-md text-2xl"
                            >Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to='/register'
                                className="bg-teal-700 px-4 py-1 rounded-md text-2xl"
                            >Registrarse</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}
export default Navbar
