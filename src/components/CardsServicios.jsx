import React from 'react';
import LE from '../assets/img/icon/le.png'
import MO from '../assets/img/icon/mo.png'
import SE from '../assets/img/icon/se.png'
import ML from '../assets/img/icon/ml.png'


const CardsServicios = () => {
    const Cards = [
        {
            icon: ML,
            title: 'Servicio mantenimiento de limpieza',
            detail: 'Servicio de mantenimiento de limpieza con frecuencia diaria.',
            boton: 'Leer Mas'

        },
        {
            icon: LE,
            title: 'Los Especialistas',
            detail: 'Servicio de limpieza con frecuencia 1 a 2 veces por semana.',
            boton: 'Leer Mas'
        },
        {
            icon: SE,
            title: 'Servcios Especializados',
            detail: 'Servicio de limpiezas ocasionales especializadas.',
            boton: 'Leer Mas'
        },
        {
            icon: MO,
            title: 'Mano de Obra',
            detail: 'Provisión de mano de obra.',
            boton: 'Leer Mas'
        }
    ];

    return (
        <section
            className='bg-[#ecf3f0]'
            id='service-section'
        >
            <div className='container mx-auto'>
                <div className='flex justify-center mb-20'>
                    <h1
                        className='blond_border_bg text-4xl font-bold text-[#b02853] pt-12'
                    >
                        Nuestros Servicios
                    </h1>
                </div>
                <div className='grid lg:grid-cols-4 lg:gap-x-12 md:grid-cols-2 md:gap-12 grid-cols-1 gap-y-12 mx-4 text-[#b02853] pb-12'>
                    {
                        Cards?.map((service, index) => <div
                            key={index}
                            className='relative service-card border-2 rounded-2xl px-8 py-14 h-[22rem] shadow hover:shadow-lg hover:border-[#b02853] duration-500 pb-4'
                        >

                            <div className='flex mb-4'>
                                <div className='bg-no-repeat bg-contain h-[54px] w-[54px] flex justify-center items-center mr-5' >
                                    <img src={service?.icon} alt="Logo del Servicio" />
                                </div>
                            </div>
                            <div className='mb-2'>
                                <h5 className='text-md font-bold text-left'>{service?.title}</h5>
                            </div>
                            <div>
                                <p className='text-sm'>{service?.detail} </p>

                            </div>

                            <div className='flex absolute w-full  bottom-3 left-0 '>
                                <button className='bg-[#b02853] text-sm border-1 w-full  block rounded-2xl px-2 py-2 m-5 shadow hover:shadow-lg text-white'>
                                    {service?.boton}
                                </button>
                            </div>

                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default CardsServicios;
