import React from "react"
import classes from "./App.css"

export default (props) =>(
    <div className = {classes.contenedorText}>
        <input className = {classes.checkmark} type="checkbox" onClick={props.completar}></input>
        <div style={{
            textDecoration: props.tarea.completado ? "line-through" : ""
        }}>{props.tarea.text}
        </div>
        <button className={classes.botonBorrar} onClick={props.borrar}>X</button>
    </div>

);