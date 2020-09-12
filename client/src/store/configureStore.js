import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import productReviewsReducer from '../reducers/productReviewsReducer'


const configureStore =() => {
    const store = createStore(combineReducers({
        user:userReducer,
        productReviews:productReviewsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
