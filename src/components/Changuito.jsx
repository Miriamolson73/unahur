import React, {Fragment} from 'react';
import "./changuito.css";
import Producto from "./Producto";


const Changuito = ({changuito,agregarProducto}) => {

    
    return (
        <Fragment>
            <div className="changuito">
                <h5>CHANGUITO DE COMPRAS</h5>
                {
                    changuito.length === 0

                    ?
                    ( 
                    <h3>Changuito vacío</h3>
                    )
                    : 
                    (
                    changuito.map (
                    producto => (
                        <Producto 
                            key= {producto.id}
                            changuito = {changuito}
                            agregarProducto = {agregarProducto}
                            producto = {producto}
                        />
                    )
                    )
                    )
                   
                }

            </div>
        </Fragment>
      );
}
 
export default Changuito;