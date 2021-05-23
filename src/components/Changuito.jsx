import React, {Fragment} from 'react';
import "./changuito.css";
import Producto from "./Producto";


const Changuito = ({changuito}) => {

    
    return (
        <Fragment>
            <div className="changuito">
                <h6>CHANGUITO DE COMPRAS</h6>
                {
                    changuito

                    ?
                    changuito.map(
                            producto=>
                            <Producto
                                key={producto.id}
                                producto={producto}
                    />  )     
                    :
                    <button>changuito vacio</button>
                   
                }

            </div>
        </Fragment>
      );
}
 
export default Changuito;