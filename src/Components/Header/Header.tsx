import 'boxicons/css/boxicons.min.css';

import Cart from '../Cart/Cart';
import './header.css'
import { useEffect, useState } from 'react';

const Header = () => {

  {/*Adj a theme ikonhoz egy olyan funkciót amivel váltogatni lehet a light és dark mode között*/}
  
  {/*Adj egy funkciót a toggle ikonhoz amivel mobilnézetben le lehet nyitni a navigációs menüt a close ikonnal meg bezárni*/}

  {/*
    Adj egy funkciót a cart-shop ikonhoz amivel le lehet nyitni a vásárlási listát
    A vásárlási lista egy külön komponens.
    */}

  {/* Állítsd be az App.css-ben az ul osztályszelektornak, hogy a listaelemek pontok nélkül jelenjenek meg */}

  const[darkTheme, setDarkTheme] = useState<boolean>(false)
  const[mobileView, setMobileView] = useState<boolean>(false)
  const[cartMenu, setCartMenu] = useState<boolean>(false)

  useEffect(()=>{
    if (darkTheme) {
        document.body.classList.add("dark-theme")
    }
    else
    document.body.classList.remove("dark-theme")
  },[darkTheme])


  return (
    <>
    <header className="header" id="header">
    <nav className={mobileView ? "show-menu" : ""}>
        <a href="#" className="nav__logo">
            <i className='bx bxs-watch nav__logo-icon'></i> Rolex
        </a>
        <div className="nav__menu"  id="nav-menu">      
            <ul className="nav__list">
                {/*
                Készítsd el a Header-eket: Home, Featured, Products, New
                Mindegyik egy listaelem, és azon belül egy hivatkozás
                a listaelem ostrálya nav__item, a hivatkozás osztálya nav__link
                */}
                <li className='nav__item'><a className='nav__link' href="">Home</a></li>
                <li className='nav__item'><a className='nav__link' href="">Featured</a></li>
                <li className='nav__item'><a className='nav__link' href="">Prodcuts</a></li>
                <li className='nav__item'><a className='nav__link' href="">Home</a></li>
            </ul>
            <div onClick={() => setMobileView(false)} className="nav__close" id="nav-close">
                <i className='bx bx-x' ></i>
            </div>
        </div>
        <div className="nav__btns">
            <i onClick={() => setDarkTheme(prev => !prev)} className= {!darkTheme ? 'bx bx-moon change-theme' : 'bx bx-sun change-theme'}id="theme-button"></i>
            <div onClick={() => setCartMenu(prev => !prev)} className="nav__shop" id="cart-shop" >
                <i className='bx bx-shopping-bag'></i>
            </div>
            <div  onClick={() => setMobileView(true)} className="nav__toggle" id="nav-toggle">
                <i className='bx bx-grid-alt' ></i>
            </div>
        </div>
    </nav>
</header>
{
    cartMenu && <Cart></Cart>
}
 </>
  )
}

export default Header