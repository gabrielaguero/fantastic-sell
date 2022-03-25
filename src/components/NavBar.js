import react from 'react';
import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () =>{
    
    return(
        <div>
        <nav>
             <ul>
                 <li>
                     <a href="">Home</a>
                 </li>
                 <li> 
                    <a href="">Envíos</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
                <li>
                    <a href="">Ayuda</a>
                </li>
             </ul>
      </nav>
      <header>
          <CartWidget/>
      </header>
      </div>
      )
}

export default NavBar;