import React from "react";
import CardWidget from "../cardwidget/Cardwidget";

const NavBar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">
                  Escuela Fit
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav d-flex justify-content-around">
                     <a className="nav-link " aria-current="page" href="#">
                        Inicio
                     </a>
                     <a className="nav-link" aria-current="page" href="#">
                        Productos
                     </a>
                     <a className="nav-link" aria-current="page" href="#">
                        Contacto
                     </a>
                  </div>
                  <a className="nav-link " aria-current="page" href="#">
                     <CardWidget />
                  </a>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default NavBar;
