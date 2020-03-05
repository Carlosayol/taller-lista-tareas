import React from "react"

export default (props) =>(
    <div style={{
        display:"flex", justifyContent: 'Center'
    }}>
        <input type="checkbox" onClick={props.completar}></input>
        <div style={{
            textDecoration: props.tarea.completado ? "line-through" : ""
        }}>{props.tarea.text}
        </div>
        <button onClick={props.borrar}>X</button>
    </div>

);