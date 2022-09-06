import React from 'react';
import LE from '../assets/img/icon/ps.png'
import MO from '../assets/img/icon/metros.png'
import SE from '../assets/img/icon/CA.png'
import ML from '../assets/img/icon/cliente.png'
import fondo from '../assets/img/icon/fact-bg.png'



const CardsCounter = () => {
    const Cards = [
        {
            icon: ML,
            title: '300+',
            detail: 'Clientes Activos.',
            fondo: fondo


        },
        {
            icon: LE,
            title: '600+',
            detail: 'Puntos de Servicios.',
            fondo: fondo

        },
        {
            icon: SE,
            title: '1600+',
            detail: 'Colaboradores activos.',
            fondo: fondo

        },
        {
            icon: MO,
            title: '1.169.271+',
            detail: 'Metros cuadrados cubiertos p/Dia.',
            fondo: fondo

        }
    ];

    return (
        <section
            className='bg-[#b02853] p-1'
            id='service-section'
        >
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-4 lg:gap-x-4 md:grid-cols-2 md:gap-12 grid-cols-1 gap-y-12  text-[#b02853]'>
                    {
                        Cards?.map((service, index) => <div
                            key={index}
                            className=' service-card rounded-2xl py-14 h-[22rem]'
                        >

                            <div className='flex justify-center top-0'>
                                <div className='relative bg-no-repeat bg-contain  top-0' >
                                    
                                    <img src={service?.fondo} alt="" className=' scale-125' />
                                    <img src={service?.icon} alt="Logo del Servicio" className='absolute top-0 left-0 scale-75 hover:scale-50 duration-300' />

                                </div>
                            </div>
                            <div className='text-white text-6xl font-bold text-center mt-5'>
                                <h5>{service?.title}</h5>
                            </div>
                            <div className='text-white text-lg text-center'>
                                <p>{service?.detail} </p>
                            </div>

                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default CardsCounter;
