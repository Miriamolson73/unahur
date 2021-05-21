import { Fragment, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Headers";
import Producto from "./components/Producto";

function App() {

   //listados de productos
      const [productos,articulo]= useState([
        {id:1, articulo:" Rosas ", precio: 500},
        {id:2, articulo:" Tulipanes ", precio: 1200},
        {id:4, articulo:" Margaritas ", precio: 120} ,
        {id:3, articulo:" Crisantemos ", precio: 150},
        {id:3, articulo:" Pensamientos ", precio: 50} ,
        {id:3, articulo:" Lirios ", precio: 70},
        {id:3, articulo:" Nacar ", precio:500},
        {id:3, articulo:" Limonero ", precio: 1200}
        
      ]);
  return (
    <Fragment>
    
     
      <Header />
      <h1>Las Mejores Pantas al Mejor Precio Compra OnLine </h1> 
      {productos.map(producto=>(
      <Producto
      key={producto.id}
      producto={producto} />) 
      )}
      

      <Footer
        anio={2021}/>
    </Fragment>    
  
  );
}

export default App;
