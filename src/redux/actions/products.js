
import productsData from "../../products";

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchProducts = (category, sortBy) => (dispatch) => {
  const activeCategoryTag = category.brand === 'all' ? '' : `brand=${category.brand}`;
  
  dispatch(setLoaded(false));

  // Вместо axios.get используем локальные данные
  const filteredProducts = productsData.filter(product => 
    activeCategoryTag ? product.brand === category.brand : true
  );

  // Сортировка продуктов
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy.type === 'asc') {
      return a[sortBy.path] > b[sortBy.path] ? 1 : -1;
    } else {
      return a[sortBy.path] < b[sortBy.path] ? 1 : -1;
    }
  });

  // Диспатчим загруженные продукты
  dispatch(setProducts(sortedProducts));
};

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});
