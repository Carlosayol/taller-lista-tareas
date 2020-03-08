import React, {Component} from 'react';
import Forma from './Forma';
import Check from "./Check";
import classes from './App.css';

export default class Tareas extends Component {

    state = {
        checks: []
    };

    agregarTarea = (tarea) => {
        this.setState({
            checks: [tarea, ...this.state.checks]
        });
    };

    completar = (id) => {
        this.setState({
            checks: this.state.checks.map(tarea => {
                if(tarea.id === id){
                    return{
                        ...tarea,
                        completado: !tarea.completado
                    };
                }else{
                    return tarea;
                }
            })
        })
    }

    borrarTarea = (id) => {
        this.setState({
            checks: this.state.checks.filter(
                tarea => tarea.id !== id)
        })
    }

    borrarCompletas = () => {
        this.setState({
            checks: this.state.checks.filter(
                tarea => !tarea.completado)
        })
    }

    render() {
        return (
        <div >
            <div className = {classes.heading}>Lista de Tareas</div>
            <Forma onSubmit={this.agregarTarea} />
            {this.state.checks.map(tarea => (<Check  key={tarea.id}
            completar= {() => this.completar(tarea.id)} 
            borrar = {() => this.borrarTarea(tarea.id)}
            tarea = {tarea} />))}
            <div>
                <button className = {classes.botonAccion} onClick={this.borrarCompletas}
                >Borrar Tareas Completas</button>
            </div>
        </div>
        );
    }
}