import React from 'react'
import'./styles.css';
import'./animacion.css';
import'./responsive.css';


const Navbar = () => {
    return(
        <nav className="col-12"> 
        <nav className= "navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="../../public/index.html">
            <img className="logo" src="./logo.png" alt="Logo de Van de granja"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">Inicio <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Tienda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Carrito</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Mi cuenta</a>
              </li>
               <li className="nav-item">
                <a className="nav-link" href="../../public/index.html">Contactos</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="../../public/index.html">Nosotros</a>
              </li>
            </ul>
            <div className= "col-md-4 col-lg-3 navbar-social wow fadeInUp animated">
              <p>
                <a href="https://es-la.facebook.com/"><i className="fab fa-facebook"></i></a> 
                <a href="https://twitter.com/?lang=es"><i className="fab fa-twitter"></i></a> 
                <a href="https://www.google.com/?hl=es"><i className="fab fa-google-plus-g"></i></a> 
                <a href="https://www.instagram.com/?hl=es-la"><i className="fab fa-instagram"></i></a> 
                <a href="https://ar.pinterest.com/"><i className="fab fa-pinterest"></i></a>
              </p>
            </div>
          </div>
        </nav>
      </nav>
        
    )
}
export default Navbar