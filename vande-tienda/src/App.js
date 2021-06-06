import React, {Fragment, useState} from 'react';
import Navbar from './components/NavBar'
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {
 

 // Crear listado de productos
 const [productos, setProductos] = useState([
   {id: 1, nombre: 'banana', precio: 20},
   {id: 2, nombre: 'Manzana', precio: 30},
   {id: 3, nombre: 'Pera', precio: 70},
   {id: 4, nombre: 'Sandia', precio: 40},
   {id: 5, nombre: 'Melon', precio: 80},
 ]);
 // State para un carrito de compras

const [carrito, agregarProducto] = useState([])

// Obnener la fecha 
 const fecha = new Date().getFullYear();

  return (
    <Fragment> 
      <Navbar />
        <Header 
          titulo = 'Van de granja'
        />
        <h1>Lista de Productos</h1>
        {productos.map(producto=>(
          <Producto 
            key ={producto.id}
            producto={producto}
            carrito={carrito}
            productos={productos}
            agregarProducto={agregarProducto}
          />
        ))}
        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
        <Footer 
          fecha={fecha}
        />
       
    </Fragment>
  );
}

export default App;
