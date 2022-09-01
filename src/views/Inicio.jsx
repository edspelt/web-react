import Carrusel from '../components/Carrusel'
import React from 'react'
import Clientes from '../components/Clientes'
import CardsServicios from '../components/CardsServicios'

const Inicio = () => {
  return (
    <div>
      <Carrusel />
      <Clientes />
      <CardsServicios />
    </div>
  )
}

export default Inicio