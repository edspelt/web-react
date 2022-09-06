import React from 'react'
import nosotros from '../assets/img/slider/Nosotros.webp'
import img1 from '../assets/img/slider/0.webp'

const SobreNosotros = () => {
    return (
        <div>
            <div className='relative'>
                <img src={nosotros} alt="imagen em" />
                <div className='absolute'>


                    <div className=''>
                        <p>Sobre <span className='text-red-900 font-bold'>Nosotros</span> </p>

                    </div>
                    <p className=' flex flex-row'>
                        Inicio
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                        <span>Nosotros</span></p>


                </div>
                {/* Nosotros Mision y Vision
                <div>
                    <img src={img1} alt="Nosotros"  className='rounded-[2rem]'/>
                    <div className='flex flex-row'>
                       
                        <p>
                            Somos una empresa de servicio de limpieza y tercerización de mano de obra orientada a la calidad y excelencia de nuestros servicios.
                            Con más de 3 décadas de crecimiento sostenido, actualmente contamos con casi 600 puntos de servicios distribuidos en 16 de los 17 
                            departamentos del país que son atendidos por nuestros más de 1600 colaboradores .
                        </p>
                        <div className='flex flex-row'>
                            <p>Mision</p>
                            <p>Vision</p>
                        </div>

                    </div>

                    <div>
                        <p></p>
                        <div>
                            asdasds
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default SobreNosotros