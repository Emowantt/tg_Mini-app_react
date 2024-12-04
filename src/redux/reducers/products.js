const initialState = {
  items: [
    {
      id: 1,
      title: 'Зов Ктулху',
      imgUrl: '1.jpg', // Обрати внимание, что в ProductCard используется imgUrl
      brand: 'Говард Филлипс Лавкрафт', // Переименуй, если нужно
      category: 'Ужасы',
      desc: 'Lorem ipsum',
      price: 29.99, // Измени на число, если это необходимо
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