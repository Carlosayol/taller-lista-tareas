import React, {Component} from 'react';
import shortid from "shortid";


export default class Forma extends Component {

    state = {
        text: ""
    };

    cambio = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    actualizacion = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            completado: false,
        });
        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.actualizacion}>
                <input name="text" value={this.state.text} onChange={this.cambio}/>
                <button onClick={this.actualizacion}>Agregar Tarea</button>
            </form>
        );
    }
}