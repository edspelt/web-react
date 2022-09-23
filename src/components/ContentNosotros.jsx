import React from 'react'
import img1 from '../assets/img/slider/0.webp'
import mision from '../assets/img/icon/mision.png'
import vision from '../assets/img/icon/vision.png'
import fondo from '../assets/img/icon/fact-bg.png'
import fondo2 from '../assets/img/icon/feature-bg.png'
const ContentNosotros = () => {
    return (
        <>
            <div className='grid lg:grid-cols-2 lg:gap-x-12 md:grid-cols-2 md:gap-12 grid-cols-1 gap-y-12 mx-1 text-gray-500'>
                <div className='flex-1 relative'>
                    <img src={img1} alt="" className='p-10 rounded-[4rem] w-auto' />

                </div>
                <div className='flex-1 text-justify p-10'>
                    <p className='pb-4'>Somos una empresa de servicio de limpieza y tercerización de mano de obra orientada a la
                        calidad y excelencia de nuestros servicios.
                        Con más de 3 décadas de crecimiento sostenido, actualmente contamos con casi 600 puntos de
                        servicios distribuidos en 16 de los 17 departamentos del país que son atendidos por nuestros
                        más de 1600 colaboradores .
                    </p>
                    <h3 className='text-[#ab003e] text-xl font-bold pb-2'>Politica de Calidad</h3>
                    <p>Es nuestro compromiso satisfacer las necesidades de los clientes, ofreciendo servicios que cumplan con los requerimientos y especificaciones acordados, trabajando con eficiencia y productividad, con un enfoque de Mejora Continua
                        y Responsabilidad Social Empresarial cumpliendo los requisitos aplicables.
                    </p>
                    <div className='flex flex-row'>
                        <div className='flex-1 text-center'>
                            <div className='flex items-center relative justify-center'>
                                <img src={fondo} alt="" className='w-20' />
                                <img src={mision} alt="" className='w-14 absolute transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-700' />
                            </div>

                            <h3 className='text-xl font-bold text-[#ab003e]'>Mision</h3>
                            <p className='text-justify p-3'>Brindar servicios especializados con responsabilidad social, enfoque profesional, procesos estandarizados y colaboradores eficientes, formados en principios y valores.</p>
                        </div>
                        <div className='flex-1 text-center'>
                            <div className='flex items-center relative justify-center'>
                                <img src={fondo} alt="" className='w-20 items' />
                                <img src={vision} alt="" className='w-14 items absolute transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-700' />
                            </div>
                            <h3 className='text-xl font-bold text-[#ab003e]'>Vision</h3>
                            <p className='text-justify p-3'>Liderar siendo el mejor en el sector de servicios generales, con fuerte especialización en limpieza.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContentNosotros