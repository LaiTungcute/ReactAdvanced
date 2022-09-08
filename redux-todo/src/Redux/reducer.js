const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case 'addtodo':
    return [...state, payload];

   case 'deletetodo': {
    const newArr = [...state];
    return newArr.filter((item, index) => index!==payload)
   } 

  default:
    return state;
  }
}

export default reducer