import React from 'react'
import nosotros from '../assets/img/slider/Nosotros.webp'
import img1 from '../assets/img/slider/0.webp'

const HeroNosotros = () => {
    return (
        <div className='relative bg-no-repeat bg-center float-left w-full h-screen'>
            <img src={nosotros} alt="imagen em" />
            <div className='absolute lg:left-32 lg:top-80 md:left-10 md:top-40 sm:left-10 sm:top-20 top-10 left-5'>
                <div className='lg:text-3xl md:text-2xl sm:text-md'>
                    <p>Sobre <span className='text-red-900 font-bold'>Nosotros</span> </p>
                </div>
                <p className=' flex flex-row'>
                    Inicio

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>


                    <span>Nosotros</span></p>

            </div>
        </div>
    )
}

export default HeroNosotros