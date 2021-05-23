import React, { Fragment } from 'react';

const Producto = ({producto,productos,changuito,agregarProducto}) => {
    //extraer valores
    const {id,articulo,precio}= producto;

    //funcion para agregar productos al changuito

    const selecionarProducto=(id) => {

        const producto= productos.filter(

            producto => producto.id===id)[0];
            agregarProducto([
                ...changuito,
                producto]);
        
        console.log(producto);
    }

    // ELIMINAR DE CHANGUITO
    const eliminarProducto=(id) => {

        const compra= changuito.filter(
            producto => producto.id !== id)[0];
            agregarProducto([
               changuito,producto
                ]);
     
            
             
        
        console.log(compra);
    } 

    return (
        <Fragment>
            <div>
            <h3>{id}{articulo}{precio}</h3>
            {
                productos

                ? 
                <button
                type="button" onClick={()=> selecionarProducto(id)}> Comprar </button>

                :
               
               
                <button
                type="button" onClick={()=> eliminarProducto(id)}> Eliminar </button> 
            }
           
            </div>
        </Fragment>  );
}
 
export  default Producto  ;
