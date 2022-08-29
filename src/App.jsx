import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

//Layouts
import Public_Layout from './views/layouts/Public_Layout'

//Public Views
import Inicio from './views/Inicio';

// import SingUp from './views/SingUp';

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Public_Layout/>}>
          <Route index element={<Inicio/>}/>
          
          {/* <Route path='/signup' element={<SingUp/>}/> */}
          
        </Route>

        <Route>
          
          </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
