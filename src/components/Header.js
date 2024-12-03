import React from "react";
import Button from "./components/Button"

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
  
    return (
        <header>
            <div>
                <span className='logo'>All Books Shop</span>
                <p className='navBar'>
                  <span className='about'>О нас</span>
                </p>
                <p 
                    onClick={() => setCartOpen(!cartOpen)} 
                    className={`shop-button ${cartOpen ? 'active' : ''}`}>
                    Корзина
                </p>

                <div className={`shop_Cart ${cartOpen ? 'active' : ''}`}>
                    {props.orders.length > 0 ?
                     showOrders(props) : showNothing()}
                </div>

            </div>
            <div className='presentation'></div>
        </header>
    );
}

    // return (
    //     <div>
    //         <Button onClick={onClose}>Закрыть</Button>
    //         <span className="username">
    //             {tg.initDataUnsafe?.user?.username}
    //         </span>
    //     </div>
    // )