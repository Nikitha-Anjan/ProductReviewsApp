import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import { startGetUser } from './actions/userAction'
import configureStore from './store/configureStore'


const store = configureStore()

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

//to handle page reloads
if(localStorage.getItem('authToken')){
    store.dispatch(startGetUser())
}
const jsx =(
    <Provider store ={store}>
    <App />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))



