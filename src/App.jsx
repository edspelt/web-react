import {BrowserRouter, Routes, Route} from 'react-router-dom'


//Layouts
import Public_Layout from './views/layouts/Public_Layout'

//Public Views
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

// import SingUp from './views/SingUp';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Public_Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Servicios' element={<Nosotros/>}/>
          <Route path='/RSE' element={<Nosotros/>}/>
          <Route path='/Etica' element={<Nosotros/>}/>
          <Route path='/Contactanos' element={<Nosotros/>}/>
          <Route path='/Trabaja' element={<Nosotros/>}/>



          {/* <Route path='/signup' element={<SingUp/>}/> */}
          
        </Route>

        <Route>
          
          </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
