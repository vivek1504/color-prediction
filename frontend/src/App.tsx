import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Games } from './pages/Games'
import { Login } from './pages/login'
import { Won } from './pages/Won'
import { RecoilRoot } from 'recoil'

function App() {
   return<RecoilRoot>
    <Won></Won>
    <BrowserRouter>
    <Routes>
      <Route path='/game' element={<Games></Games>}></Route>
      <Route path='/' element={<Login></Login>}></Route>
      <Route path='/won' element={<Won></Won>}></Route>
    </Routes>
  </BrowserRouter>
  </RecoilRoot>
}

export default App
