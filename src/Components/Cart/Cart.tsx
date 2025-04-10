import 'boxicons/css/boxicons.min.css';
import './cart.css'
import { useState } from 'react';

{/*A close ikonra kattintva zárja be a cartot */}

{/* Mind a három óra esetében a plusz és mínusz ikonra kattintva növelni és csökkenteni tudjuk az mennyiségeket */}

{/* Lent számolja ki a végleges összeget és hogy hány darab órát rendel*/}

{/*Ha nullára csökken a mennyiség nem kell eltünnie, de 0 alá ne menjen az értéke */}


const Cart = () => {
  

    const[oraEgy, setOraEgy] = useState(1)
    const[oraKetto, setOraKetto] = useState(1)
    const[oraHarom, setOraHarom] = useState(1)

    const[oraEgyAr, setOraEgyAr] = useState(1050)
    const[oraKettoAr, setOraKettoAr] = useState(850)
    const[oraHaromAr, setOraHaromAr] = useState(980)

    return (
    <div className="cart" id="cart">
    <i className='bx bx-x cart__close' id="cart-close"></i>

    <h2 className="cart__title-center">My Cart</h2>

    <div className="cart__container">
        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/featured1.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Jazzmaster</h3>
                <span className="cart__price">${oraEgyAr}</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={() => {setOraEgy(prev => prev-1 <= 0 ? prev-0 : prev-1); 
                                setOraEgyAr(prev => prev -1050 <= 0 ? prev -0 : prev -1050)}}></i>
                        </span>

                        <span className="cart__amount-number">{oraEgy}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus' onClick={() => {setOraEgy(prev => prev+1); 
                                setOraEgyAr(prev => prev +1050)}}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>
        
        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/featured3.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Rose Gold</h3>
                <span className="cart__price">${oraKettoAr}</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={() => {setOraKetto(prev => prev-1 <= 0 ? prev-0 : prev-1);
                                 setOraKettoAr(prev => prev -850 <= 0 ? prev -0 : prev -850)}}></i>
                        </span>

                        <span className="cart__amount-number">{oraKetto}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus' onClick={() => {setOraKetto(prev => prev+1); setOraKettoAr(prev => prev +850)}}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>

        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/new1.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Longines Rose</h3>
                <span className="cart__price">${oraHaromAr}</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus'  onClick={() => {setOraHarom(prev => prev-1 <= 0 ? prev-0 : prev-1); 
                                setOraHaromAr(prev => prev -950 <= 0 ? prev -0 : prev -950)}}></i>
                        </span>

                        <span className="cart__amount-number">{oraHarom}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus'  onClick={() => {setOraHarom(prev => prev+1); setOraHaromAr(prev => prev +950)}}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>
    </div>

    <div className="cart__prices">
        <span className="cart__prices-item">3 items</span>
        <span className="cart__prices-total">${oraEgyAr+oraKettoAr+oraHaromAr >= 0 ? oraEgyAr+oraKettoAr+oraHaromAr : 0}</span>
    </div>
</div>
  )
}

export default Cart