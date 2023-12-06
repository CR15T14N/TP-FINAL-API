import { AllMusic } from './Pages/AllMusic'
import { VistaPrev } from './Pages/VistaPrev';
import { Home } from './Pages/Home';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import MusicContextProvider from './context/MusicContext'
import { NextUIProvider } from '@nextui-org/react'


function App() {

  return (
    <>
     <BrowserRouter>

    <NextUIProvider>

    <MusicContextProvider>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/artists' element={<AllMusic />}></Route>
      <Route path='/vistaprevia' element={<VistaPrev />} ></Route>
      <Route path='*' element={<h3>Ruta inexistente</h3>}></Route>
    </Routes>

    </MusicContextProvider>
    
    </NextUIProvider>
  
     </BrowserRouter>
    </>
  )
}

export default App
