import React from 'react';
import "./Producto.css";

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    
    const {nombre, precio, id} = producto;

    // Agregar producto al carrito

    const seleccionarProducto = id=>{
        const producto = productos.filter(producto =>producto.id === id)[0];
        agregarProducto([
            ...carrito, producto
        ]);

    }

    //Eliminar productos del carrito 
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        // Colocar los productos en el state

        agregarProducto(productos)
    }


    return (
        <div className="container-fluid">
            <div className="">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h2>{nombre}</h2>
                        <p>${precio}</p>
                    
                        {productos
                        ?
                            (<button
                            type="button"
                            onClick={()=> seleccionarProducto (id)}
                            >Comprar</button>
                            )
                        :
                            
                            (<button
                                type="button"
                                onClick={()=> eliminarProducto (id)}
                                >Eliminar</button>
                            )
 
                        }
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Producto ;
