import React from 'react';
import'./carrito.css';
import Producto from './Producto';  //reutilizamos el componente

const  Carrito= ({carrito, agregarProducto}) => (
   
    // Removemos el retun ya que esta implicito.

    <div className = "carrito">
        <h2> Mi carrito de Compras</h2>

        {carrito.length ===0
        ?<p>No hay elementos</p>
        :carrito.map(producto=>(
            <Producto 
            key = {producto.id}
            producto = {producto}
            carrito = {carrito}
            agregarProducto={agregarProducto}
            />

        ))}
    </div> 
);
 
export default Carrito ;