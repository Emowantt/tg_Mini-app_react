import React from "react";

const showOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price));
  
    return (
      <div>
        {props.orders.map(el => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
  
        <p onClick={props.AboutForm} className='sum'> 
          Сумма: {new Intl.NumberFormat().format(sum)} ₽
        </p>
  
        <button onClick={props.togglePaymentForm} className="Buy">
          Оплатить
        </button>
  
      </div>
    )
}

const showNothing = () => {
    return (
      <div className='empty'>
        <h2>
          Ваша корзина пуста
        </h2>
      </div>
    )
  }

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
  
    return (
        <header>
            <div>
                <span className='logo'>All Books Shop</span>
                
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