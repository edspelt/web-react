
import Logo from '../assets/img/logo/logo-blue.png'
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const navigation = [
        { title: 'Inicio', path: '/' },
        { title: 'Nosotros', path: '/Nosotros' },
        { title: 'Servicios', path: '/Servicios' },
        { title: 'RSE', path: '/RSE' },
        { title: 'Etica', path: '/Etica' },
        { title: 'Contactanos', path: '/Contactanos' },
        { title: 'Trabaja con Nosotros', path: '/Trabaja' },
        { title: 'Proveedores', path: '/Proveedores' }
    ];

    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between md:justify-end py-3 md:py-5 md:flex-row">
                        <a href="">
                            <h2 className="text-2xl font-bold text-white"><img src={Logo} alt="logo el mejor" /></h2>
                        </a>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#b02853]"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-[#b02853]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {navigation?.map((menu, index) =>
                                <li key={index} className=' text-[#b02853] hover:text-black font-bold'>
                                    <Link to={menu?.path}>{menu?.title}</Link>

                                </li>)
                            }

                        </ul>

                        <div className="mt-3 space-y-2 md:hidden inline-block">
                            <a
                                href=""
                                className="inline-block w-full px-4 py-2 text-center text-white bg-[#b02853] rounded-md shadow hover:bg-red-900"
                            >
                                Pedi Presupuesto
                            </a>
                            <a
                                href=""
                                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                            >
                                Inicia Sesion
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:block">
                    <a
                        href=""
                        className="px-4 py-2 text-white bg-[#b02853] rounded-md shadow hover:bg-red-900"
                    >
                        Pedi Presupuesto
                    </a>
                    <a
                        href=""
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Inicia Sesion

                    </a>
                </div>
            </div>
        </nav>
    );
}

