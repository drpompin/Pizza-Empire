import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, CLEAR_CART } from '../actions/action-types/cartActionTypes'
import { products } from '../../static/products'


const initialState = {
    items: products,
    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
   
    switch(action.type) {
        //INSIDE HOME COMPONENT
        case ADD_TO_CART:
            let addedItem = state.items.find(item => item.id === action.id)
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item=> action.id === item.id)
            if(existed_item) {
                addedItem.quantity += 1 
                return{
                    ...state,
                    total: state.total + addedItem.price 
                }
            }
            else {
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price 
                
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }
                
            }
        
        case REMOVE_ITEM:
            let itemToRemove= state.addedItems.find(item=> action.id === item.id)
            let new_items = state.addedItems.filter(item=> action.id !== item.id)
            
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
            // console.log(itemToRemove)
            
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }

        case CLEAR_CART:
            return {
                ...state,
                addedItems: [],
                total: 0
            }
        
        case ADD_QUANTITY:
            let addQtyAddedItem = state.items.find(item=> item.id === action.id)
            addQtyAddedItem.quantity += 1 
            let addQtyNewTotal = state.total + addQtyAddedItem.price
            
            return {
                ...state,
                total: addQtyNewTotal
            }

        case SUB_QUANTITY:
            let subQtyAddedItem = state.items.find(item=> item.id === action.id) 
            
            //if the qt === 1, it should not be removed
            if(subQtyAddedItem.quantity === 1){
                // let new_items = state.addedItems.filter(item=>item.id !== action.id)
                // let newTotal = state.total - subQtyAddedItem.price
                
                return {
                    ...state,
                    // addedItems: new_items,
                    // total: newTotal
                }
            }
            else {
                subQtyAddedItem.quantity -= 1
                let newTotal = state.total - subQtyAddedItem.price
                return{
                    ...state,
                    total: newTotal
                }
            }

        default: 
            return state

    }
    
    
}

export default cartReducer
