import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const App = ({arr}) =>{
    return (
        <div>
            <section id="bienvenida">
                <div class="container description">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <p class="text2">RESERVA DE ASIENTOS</p>
                            <p><a class="btn btn-primary" role="button" id="ingresar"><i class="fa fa-sign-in" aria-hidden="true"></i> INGRESAR</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <h1 className="text3">Menú Principal</h1>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <p><a className="btn btn-primary"role="button" id="opReservar"><i className="fa fa-list-alt" aria-hidden="true"></i> RESERVAR</a></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <p><a className="btn btn-primary" role="button" id="opLiberar"><i className="fa fa-window-close-o" aria-hidden="true"></i> LIBERAR</a></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <p><a className="btn btn-primary" role="button" id="opBuscar"><i className="fa fa-search"></i> BUSCAR</a></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <p><a className="btn btn-primary" role="button" id="opListar"><i className="fa fa-bars" aria-hidden="true"></i> LISTAR</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <h1 className="text3">Asientos</h1>
            </div>
            <table id="tablaPasajeros">
                 <tr>
                    <td id="1" className="btn btn-default">1</td>
                    <td id="3" className="btn btn-default reservado">3</td>
                    <td id="5" className="btn btn-default">5</td>
                    <td id="7" className="btn btn-default">7</td>
                    <td id="9" className="btn btn-default reservado">9</td>
                </tr>
                <tr>
                    <td id="2" className="btn btn-default reservado">2</td>
                    <td id="4" className="btn btn-default">4</td>
                    <td id="6" className="btn btn-default reservado">6</td>
                    <td id="8" className="btn btn-default reservado">8</td>
                    <td id="10" className="btn btn-default">10</td>
                </tr>
            </table>
                <div>
                    <h1 className="text4">Lista de Pasajeros Registrados</h1>
                    <ul>
                        {mostrar(arr)}
                    </ul>
                </div>
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
        <li className="lista" key={index}>
            <p><strong>Asiento :</strong><em>  {usuario.asiento}</em></p>
            <p className="text-capitalize"><strong>Nombre :</strong><em> {usuario.nombre}</em></p>
            <p className="text-capitalize"><strong>Apellido :</strong><em>  {usuario.apellido}</em></p>
            <p><strong>DNI :</strong><em> {usuario.dni}</em></p>
            
        </li>);
    });
}

ReactDOM.render(<App
    arr = {pasajeros}
 />, document.getElementById('root'));
registerServiceWorker();
