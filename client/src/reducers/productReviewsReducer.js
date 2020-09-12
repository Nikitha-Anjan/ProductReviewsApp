const productReviewsInitialState =[]

const productReviewsReducer = (state = productReviewsInitialState, action) => {
    switch(action.type){
        case 'SET_PROD': {
            return [].concat(action.payload)
        }
        case 'DELETE_PROD': {
            return state.filter(prod =>{
                return prod._id !== action.payload
            })
        }
        case 'EDIT_PROD': {
            return state.map(prod =>{
                if(prod._id === action.payload){
                    return Object.assign({},prod,action.payload)
                }else{
                    return Object.assign({},prod)
                }
            })
        }
        default: {
            return [].concat(state)
        }
    }
}

export default productReviewsReducer