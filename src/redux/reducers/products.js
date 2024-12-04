const initialState = {
  items: [
    {
      id: 1,
      title: 'Зов Ктулху',
      imgUrl: 'https://avatars.mds.yandex.net/get-mpic/4785755/img_id5868477902003074790.jpeg/orig', // Обрати внимание, что в ProductCard используется imgUrl
      brand: 'Говард Филлипс Лавкрафт', // Переименуй, если нужно
      category: 'Ужасы',
      desc: 'Lorem ipsum',
      price: 29.99, // Измени на число, если это необходимо
    },
  ],
  isLoaded: false,
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