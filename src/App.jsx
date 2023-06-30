import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './pages/HomePage';
import Products from './pages/Products';
import InputChip from './components/inputChip'
import Input from './components/input';
import Home from './pages/Home';
import ToDo from './components/ToDo';
import SignUp from './pages/SignUp';
import Form from './pages/Form';
// import DND from './pages/DND/index ';
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/form'element={<Form/>}/>
            <Route path='/sign-up'element={<SignUp/>}/>
            <Route path='/todo'element={<ToDo/>}/>
            <Route path='/drag-drop'element={<Homepage/>}/>
            <Route path='/products'element={<Products/>}/>
            <Route path='/input-chip'element={<InputChip/>}/>
            <Route path='/input'element={<Input/>}/>
            {/* <Route path='/draganddrop'element={<DND/>}/> */}

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App