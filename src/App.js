import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Conta from "./components/Conta.js";
import Locais from "./components/Locais.js";
import Comidas from "./components/Comidas.js";
import Local from "./components/Local.js";
import Comida from "./components/Comida.js";

function App() {


  return (
    <>
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/locais" element={<Locais/>}/>
          <Route path="/local/:id" element={<Local/>}/>
          <Route path="/conta" element={<Conta/>}/>
          <Route path="/comidas" element={<Comidas/>}/>
          <Route path="/comida/:id" element={<Comida/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
