import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuDepartamentos from './MenuDepartamentos';
import HomeDepartamentos from './HomeDepartamentos';
import CreateDepartamentos from './CreateDepartamentos';
import DetalleDepartamento from './DetalleDepartamento';
import EliminarDepartamento from './EliminarDepartamento';
import ModificarDepartamento from './ModificarDepartamento';

export default class Router extends Component {
  render() {

    function DetalleDepartamentoElement(){
        var { iddepartamento,nombre,localidad } = useParams();
          return <DetalleDepartamento iddepartamento={iddepartamento} nombre={nombre} localidad={localidad}/>
    }

    function EliminarDepartamentoElement(){
      var { iddepartamento } = useParams();
        return <EliminarDepartamento iddepartamento={iddepartamento}/>
  }

  function ModificarDepartamentoElement(){
    var { iddepartamento } = useParams();
      return <ModificarDepartamento iddepartamento={iddepartamento}/>
}

    return (
        <BrowserRouter>
        <MenuDepartamentos/>
          <Routes>
          <Route path="/" element={<HomeDepartamentos/>}/>
          <Route path='/create' element={<CreateDepartamentos/>}></Route>
          <Route path='/detalledepartamento/:iddepartamento/:nombre/:localidad' element={<DetalleDepartamentoElement/>}></Route>
          <Route path='/eliminardepartamento/:iddepartamento' element={<EliminarDepartamentoElement/>}></Route>
          <Route path='/modificardepartamento/:iddepartamento' element={<ModificarDepartamentoElement/>}></Route>

          </Routes>
        </BrowserRouter>
    )
  }
}
