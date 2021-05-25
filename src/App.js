import { Fragment, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Headers";
import Producto from "./components/Producto";
import Changuito from "./components/Changuito";

function App() {

   //listados de productos
      const [productos,articulo]= useState([
        {id:1, articulo:" Rosas ", precio: 500},
        {id:2, articulo:" Tulipanes ", precio: 1200},
        {id:3, articulo:" Crisantemos ", precio: 150},
        {id:4, articulo:" Margaritas ", precio: 120} ,
        {id:5, articulo:" Pensamientos ", precio: 50} ,
        {id:6, articulo:" Limonero ", precio: 1200}
        
      ]);
      //state el changuito
      const [changuito,agregarProducto]=useState([]);

  return (
    <Fragment>
    
     
      <Header />
      <h4>Las mas Lindas Plantas al Mejor Precio "Compra OnLine" </h4> 
      {productos.map(producto=>(
          <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          changuito={changuito} 
          agregarProducto={agregarProducto}
         
          />) 
      )}
      
      <Changuito
      
       
        changuito={changuito}
        agregarProducto={agregarProducto}
      />
      <Footer
        anio={2021}/>
    </Fragment>    
  
  );
}

export default App;
