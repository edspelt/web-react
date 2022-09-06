import Carrusel from '../components/Carrusel'
import React from 'react'
import Clientes from '../components/Clientes'
import CardsServicios from '../components/CardsServicios'
import CardsCounters from '../components/CardsCounters'

const Inicio = () => {
  return (
    <div>
      <Carrusel />
      <Clientes />
      <CardsServicios />
      <CardsCounters />
    </div>
  )
}

export default Inicio