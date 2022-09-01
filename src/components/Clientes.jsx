import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import cliente1 from '../assets/img/brand/atlas.png'
import cliente2 from '../assets/img/brand/automaq.png'
import cliente3 from '../assets/img/brand/basa.png'
import cliente4 from '../assets/img/brand/catedral.png'
import cliente5 from '../assets/img/brand/cervepar.png'
import cliente6 from '../assets/img/brand/claro.png'
import cliente7 from '../assets/img/brand/condor.png'
import cliente8 from '../assets/img/brand/continental.png'
import cliente9 from '../assets/img/brand/eticos.png'
import cliente10 from '../assets/img/brand/garden.png'
import cliente11 from '../assets/img/brand/gnb.png'
import cliente12 from '../assets/img/brand/landrover.png'
import cliente21 from '../assets/img/brand/lasca.png'
import cliente13 from '../assets/img/brand/mariano.png'
import cliente14 from '../assets/img/brand/mcal.png'
import cliente15 from '../assets/img/brand/nipon.png'
import cliente16 from '../assets/img/brand/personal.png'
import cliente17 from '../assets/img/brand/pinedo.png'
import cliente18 from '../assets/img/brand/rieder.png'
import cliente19 from '../assets/img/brand/shopsol.png'
import cliente20 from '../assets/img/brand/tigo.png'



import Carousel from 'react-multi-carousel';

const Clientes = () => {
  const clients = [
    {
      LogoCliente: cliente1,
    },
    {
      LogoCliente: cliente2,

    },
    {
      LogoCliente: cliente3,

    },
    {
      LogoCliente: cliente4,

    },
    {
      LogoCliente: cliente5,

    },
    {
      LogoCliente: cliente6,

    },
    {
      LogoCliente: cliente7,

    },
    {
      LogoCliente: cliente8,

    },
    {
      LogoCliente: cliente9,

    },
    {
      LogoCliente: cliente10,

    },
    {
      LogoCliente: cliente11,

    },
    {
      LogoCliente: cliente12,

    },
    {
      LogoCliente: cliente13,

    },
    {
      LogoCliente: cliente14,

    },
    {
      LogoCliente: cliente15,

    },
    {
      LogoCliente: cliente16,

    },
    {
      LogoCliente: cliente17,

    },
    {
      LogoCliente: cliente18,

    },
    {
      LogoCliente: cliente19,

    },
    {
      LogoCliente: cliente20,

    },
    {
      LogoCliente: cliente21,

    },

  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section
      className='pt-4 pb-4 bg-gray-200 '
      id='team-section'
    >
      <Carousel
        swipeable='true'
        responsive={responsive}
        infinite={true}
      >
        {
          clients.map((clients, index) => <div
            key={index}
            className='mx-1'
          >
            <div >
              <div>
                <img src={clients.LogoCliente} alt={`LogoCliente${index}`} className='mx-auto' />
              </div>

            </div>
          </div>)
        }
      </Carousel>
    </section>
  );
};

export default Clientes;