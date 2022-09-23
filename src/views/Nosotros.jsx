import React from 'react'

import ContentNosotros from '../components/ContentNosotros';
import Gerentes from '../components/Gerentes';
import HeroNosotros from '../components/HeroNosotros';

const Nosotros = () => {
  return (
    <div>
        <HeroNosotros/>
        <ContentNosotros/>
        <Gerentes/>
    </div>
  )
}

export default Nosotros