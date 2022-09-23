import React from 'react'
import db from '../assets/img/gerentes/db.svg'
import gd from '../assets/img/gerentes/graciela.svg'
import vg from '../assets/img/gerentes/violeta.svg'
import rc from '../assets/img/gerentes/rosario.svg'
import fd from '../assets/img/gerentes/fanny.svg'
import jf from '../assets/img/gerentes/javier.svg'
import dh from '../assets/img/gerentes/david.svg'



const Gerentes = () => {
    const navi = [
        // {
        //     gte: 'Daniel Baudelet',
        //     cargo: 'Socio Gerente General',
        //     foto: db

        // },
        {
            gte: 'Graciela Dietrich',
            cargo: 'Gerente General Adjunta',
            foto: gd
        },
        {
            gte: 'Violeta Garcia',
            cargo: 'Gerente Administrativo',
            foto: vg
        },
        {
            gte: 'Rosario Cabrera',
            cargo: 'Gerente Comercial',
            foto: rc
        },
        {
            gte: 'Fanny Dominguez',
            cargo: 'Gerente de Operaciones',
            foto: fd
        },
        {
            gte: 'Javier Fernandez',
            cargo: 'Gerente de Recursos humanos',
            foto: jf
        },
        {
            gte: 'David Hermosa',
            cargo: 'Gerente de tecnología de la información',
            foto: dh
        }

    ];
    return (
        <section className='bg-[#ecf3f0]' id='service-section'>
            <div className=' mx-auto'>
                <div className='flex justify-center mb-20'>
                    <h1 className='blond_border_bg text-4xl font-bold text-[#b02853] pt-12'>
                        Nuestro Equipo
                    </h1>
                </div>
                <div className='grid lg:grid-cols-6 lg:gap-x-12 md:grid-cols-2 md:gap-12 grid-cols-1 gap-y-12 mx-4 text-[#b02853] pb-12 grid-flow-col '>
                    <div className='col-span-6 relative border-2 rounded-xl  shadow hover:shadow-lg 
                    hover:border-[#b02853] duration-700 pb-4 transition ease-in-out delay-150 
                    hover:-translate-y-1 hover:scale-110 hover:duration-700 justify-center '>
                        <div className='flex ' >
                            <div className='flex justify-center items-center' >
                                <img src={db} alt="Foto Daniel baudelet" className='rounded-xl'/>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <h5 className='text-xl font-bold text-center'>Daniel Baudelet</h5>
                        </div>
                        <div>
                            <p className='text-sm flex justify-center text-center'>Socio Gerente General </p>

                        </div>

                    </div>

                </div>
                <div className='grid lg:grid-cols-6 lg:gap-x-12 md:grid-cols-2 md:gap-12 grid-cols-1 gap-y-12 mx-4 text-[#b02853] pb-12'>
                    {
                        navi?.map((gte, index) => <div
                            key={index}
                            className='relative border-2 rounded-xl shadow hover:shadow-lg
                             hover:border-[#b02853] duration-700 pb-4 
                             transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-700'
                        >
                            <div className='flex'>
                                <div className='flex justify-center items-center' >
                                    <img src={gte?.foto} alt="Foto Gerente" className='rounded-xl' />
                                </div>
                            </div>
                            <div className='mb-2'>
                                <h5 className='text-xl font-bold text-center'>{gte?.gte}</h5>
                            </div>
                            <div>
                                <p className='text-sm flex justify-center text-center'>{gte?.cargo} </p>

                            </div>


                        </div>)
                    }

                </div>
            </div>
        </section>
    )
}

export default Gerentes