export const initialState={
    basket: [],
};

export const getBasketTotal =(basket) => basket?.reduce((amount,item)=> item.price+amount,0)//selector

const reducer =(state, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],

            }
        case 'REMOVE_FROM_BASKET':
           const index = state.basket.findIndex((basketItem) =>basketItem.title ===action.title);
           let newBasket = [...state.basket];
           if (index >=0){
             newBasket.splice(index,1);
           }else console.warn( 'Cant remove product (title : ${action.title})as it is not in the basket')
        
        return{
            ...state,
            basket: newBasket
        }
    }
};
export default reducer;
