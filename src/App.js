import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

// function App() {

//   useEffect(() => {
//     tg.ready();
//   }, [])

//   const onClose = () => {
//     tg.close()
//   }

//   return (
//     <div className="App">
//       <button onClick={onClose}>Закрыть</button>
//     </div>
//   );
// }

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Зов Ктулху',
          img: '1.jpg',
          autor: 'Говард Филлипс Лавкрафт',
          category: 'Ужасы',
          desc: 'Lorem ipsum',
          price: '29.99',
        },
        {
          id: 2,
          title: 'Превращение',
          img: '2.jpg',
          autor: 'Франц Кафка',
          category: 'Повесть',
          desc: 'Lorem ipsum',
          price: '29.99',
        },
        {
          id: 3,
          title: 'Портрет Дориана Грея',
          img: '3.jpg',
          autor: 'Оскар Уайлд',
          category: 'Роман',
          desc: 'Lorem ipsum',
          price: '29.99',
        },
        {
          id: 4,
          title: 'Фауст',
          img: '4.jpg',
          autor: 'Иоганн Вольфганг фон Гёте',
          category: 'Драма',
          desc: 'Lorem ipsum',
          price: '29.99',
        },
        {
          id: 5,
          title: 'Мастер и маргарита',
          img: '5.jpg',
          autor: 'Булгаков',
          category: 'Роман',
          desc: 'Lorem ipsum',
          price: '29.99',
        },
        {
          id: 6,
          title: 'Ведьмак, Полный сборник',
          img: '6.jpg',
          autor: 'Анджей Сапковский',
          category: 'Фентези',
          desc: 'Lorem ipsum',
          price: '239.99',
        },
        {
          id: 7,
          title: 'Пикник на обочине',
          img: '7.jpg',
          autor: 'Братья Стругацкие',
          category: 'Фантастика',
          desc: 'Lorem ipsum',
          price: '30.00',
        },
        {
          id: 8,
          title: 'Берсерк',
          img: '8.jpg',
          autor: 'Кентато Миура',
          category: 'Комикс',
          desc: 'Lorem ipsum',
          price: '30.00',
        },
        {
          id: 9,
          title: 'Странная история доктора Джекила и мистера Хайда',
          img: '9.jpg',
          autor: 'Роберт Льюис Стивенсон',
          category: 'Повесть',
          desc: 'Lorem ipsum',
          price: '27.99',
        },
      ],
      showFullItem: false,
      fullItem: {},
      showPaymentForm: false,
      showAccount: false

    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.togglePaymentForm = this.togglePaymentForm.bind(this);
  }

  componentDidMount() {
    tg.ready();
  }

  onClose = () => {
    tg.close();
  };
  
  render() {
    return (
      <div className="wrapper">
        <button onClick={onClose}>Закрыть</button>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} togglePaymentForm={this.togglePaymentForm}/>
        <Items onShowItem={this.onShowItem} 
        items={this.state.items} 
        onAdd={this.addToOrder} 
         />

        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} onAdd={this.addToOrder}/>}
        {this.state.showPaymentForm && <PaymentForm togglePaymentForm={this.togglePaymentForm}/>}
        <Footer />
      </div>
    );
  }



  togglePaymentForm() {
    this.setState(prevState => ({
      showPaymentForm: !prevState.showPaymentForm
    }));
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  deleteOrder(id) {
    this.setState((prevState) => ({
      orders: prevState.orders.filter((el) => el.id !== id),
    }));
  }

  addToOrder(item) {
    this.setState((prevState) => {
      const isInArray = prevState.orders.some((el) => el.id === item.id);
      if (!isInArray) {
        return { orders: [...prevState.orders, item] };
      }
      return null; // Не обновляем состояние, если элемент уже в заказе
    });
  }
}

export default App;
