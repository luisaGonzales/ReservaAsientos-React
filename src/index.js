import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = ({arr}) =>{
    return (
        <div>
            <h1>PRUEBA</h1>
            <ul>
                {mostrar(arr)}
            </ul>
        </div>
    );
}

let arr = [
    {
        nombre: "lale",
        apellido:"la del barrio",
        dni:"0",
        asiento: "12"
    },
    {
        nombre: "lale2",
        apellido:"la del barrio2",
        dni:"02",
        asiento: "122"
    }
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
    arr = {arr}
 />, document.getElementById('root'));
registerServiceWorker();
