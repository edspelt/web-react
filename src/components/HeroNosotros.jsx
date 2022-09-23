import React from 'react'
import nosotros from '../assets/img/slider/Nosotros.webp'
import img1 from '../assets/img/slider/0.webp'

// const HeroNosotros = () => {
//     return (
//         <div className='relative bg-no-repeat bg-center float-left w-full h-screen'>
//             <img src={nosotros} alt="imagen em" />
//             <div className='absolute lg:left-32 lg:top-80 md:left-10 md:top-40 sm:left-10 sm:top-20 top-10 left-5'>
//                 <div className='lg:text-3xl md:text-2xl sm:text-md'>
//                     <p>Sobre <span className='text-red-900 font-bold'>Nosotros</span> </p>
//                 </div>
//                 <p className=' flex flex-row'>
//                     Inicio

//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                     </svg>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//                     </svg>


//                     <span>Nosotros</span></p>

//             </div>
//         </div>
//     )
// }
export default () => {    
    return (
        <div className="bg-white">

            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-black font-bold text-4xl xl:text-5xl">
                        Sobre
                         <span className="text-red-900"> Nosotros</span>
                    </h1>
                    
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
        </div>
    )
}
