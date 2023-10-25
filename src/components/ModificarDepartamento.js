import React, { Component } from 'react'
import Global from '../Global'
import axios from "axios"
import { NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
export default class ModificarDepartamento extends Component {

    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        departamento: {},
        statGet: false,
        status: false
    }


    modificarDepar = (e) => {
        e.preventDefault();
        var id = parseInt(this.props.iddepartamento)
        var nombre = this.cajaNombre.current.value
        var localidad = this.cajaLocalidad.current.value

        var url = Global.apiDepar + "api/departamentos"

        var data = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }

        axios.put(url, data).then(response => {
            this.setState({
                status: true
            })
        })

    }


    findDepar = () => {

        var url = Global.apiDepar + "api/departamentos/" + this.props.iddepartamento
        console.log(url)
        axios.get(url).then((response) => {
            this.setState({
                departamento: response.data,
                statGet: true
            })

            console.log(this.state.departamento)

        })

    }
    componentDidMount = () => {
        this.findDepar();
    }

    render() {

        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {

            return (

                <div>
                    <h1>Modificar Departamento id: {this.props.iddepartamento} </h1>
                    <NavLink to={"/"} className="btn btn-success">Volver</NavLink>

                    <form onSubmit={this.handleSubmit} style={{ padding: "10px" }}>
                        <div className="form-group">
                            <label htmlFor="campo1">id Departamento</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaNumero}
                                defaultValue={this.props.iddepartamento}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo2">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaNombre}
                                defaultValue={this.state.departamento.nombre}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="campo3">Localidad</label>
                            <input
                                type="text"
                                className="form-control"
                                ref={this.cajaLocalidad}
                                defaultValue={this.state.departamento.localidad}

                            />
                        </div>



                        <button type="submit" className="btn btn-primary" onClick={this.modificarDepar}>Modificar departamento</button>
                    </form>

                </div>
            )
        }
    }
}
