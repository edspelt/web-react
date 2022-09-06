
import React from 'react'
import Logo from '../assets/img/logo/logo-blue.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='grid grid-cols-1 text-left  md:text-left md:grid-cols-4 gap-10 bg-[#ecf3f0] text-[#b02853]  p-10'>
                <div>
                    <div>
                        <img src={Logo} alt="" className='mb-3' />
                    </div>
                    <div className=' font-medium'>
                        <p>(021) 6886500</p>
                        <p>comercial@elmejor.com.py</p>
                        <p>Sucre 1620 c/ San Martin</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl border-b-2 inline-block mb-3 font-bold '>Servicios</h1>
                    <div className=' font-medium'>
                        <p className='flex'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span> Mantenimiento de Limpieza</p>
                        <p className='flex'>
                            <span >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span> Tercerizacion de Mano de Obra
                        </p>
                        <p className='flex'> <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span> Servicios Especializados
                        </p>
                        <p className='flex'>
                            <span >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg></span> Los Especialistas
                        </p>

                    </div>

                </div>
                <div>
                    <h1 className='text-2xl border-b-2 inline-block mb-3 font-bold'>Valores</h1>
                    <div className=' font-medium'>
                        <p>Responsabilidad</p>
                        <p>Respeto</p>
                        <p>Compromiso</p>
                        <p>Vocacion de servicio</p>
                        <p>Honestidad</p>
                        <p>Disciplina</p>


                    </div>

                </div>
                <div >
                    <h1 className='text-2xl border-b-2 inline-block mb-3 font-bold'>Encontranos en Redes</h1>
                    <div className=' font-medium flex flex-col'>
                        <Link to={'https://v5.reactrouter.com/web/api/Link'}>Facebook</Link>
                        <Link to={'https://v5.reactrouter.com/web/api/Link'}>Instagram</Link>
                        <Link to={'https://v5.reactrouter.com/web/api/Link'}>LinkedIn</Link>


                    </div>

                </div>
            </div>
            <div className='bg-black text-white text-center p-3'>
                <p>Copyright ©2022 El Mejor. All Rights Reserved Copyright</p>
            </div>
        </footer>
    )
}

export default Footer