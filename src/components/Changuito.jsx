import React, {Fragment} from 'react';
import "./changuito.css";
import Producto from "./Producto";


const Changuito = ({changuito}) => {
    return (
        <Fragment>
            <div className="changuito">
                <h3>CHANGUITO DE COMPRAS</h3>
                {changuito.map(
                    producto=>
                    <Producto
                        key={producto.id}
                        producto={producto}
                     />       
                    )}

            </div>
        </Fragment>
      );
}
 
export default Changuito;