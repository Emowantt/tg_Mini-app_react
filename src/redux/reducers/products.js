const initialState = {
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
  isLoaded: true,
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      }
    default:
      return state
  }
}

export default products