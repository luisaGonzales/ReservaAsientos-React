import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = ({arr}) =>{
    return (
        <div>
            <h1>Lista de Pasajeros Registrados</h1>
            <ul>
                {mostrar(arr)}
            </ul>
        </div>
    );
}

let pasajeros = [
    {
        nombre: "Beth",
        apellido:"Gonzales",
        dni:"70459572",
        asiento: "2"
    },
    {
        nombre: "Luis",
        apellido:"Medina",
        dni:"29290156",
        asiento: "3"
    },
    {
        nombre: "Victoria",
        apellido:"Cáceres",
        dni:"29336926",
        asiento: "6"
    },
    {
        nombre: "Jefferson",
        apellido:"Casapía",
        dni:"70802345",
        asiento: "8"
    },
    {
        nombre: "Miguel",
        apellido:"Villena",
        dni:"29807632",
        asiento: "9"
    },

];

function mostrar (noarr){
    return noarr.map((usuario, index)=>{
        return(
        <li key={index}>
            <p>Nombre : {usuario.nombre}</p>
            <p>Apellido : {usuario.apellido}</p>
            <p>Dni : {usuario.dni}</p>
            <p>Asiento : {usuario.asiento}</p>
        </li>);
    });
}

ReactDOM.render(<App
    arr = {pasajeros}
 />, document.getElementById('root'));
registerServiceWorker();
