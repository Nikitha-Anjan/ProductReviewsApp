import axios from '../config/axios'

export const setProd =(productReviews) => {
    return {type: 'SET_PROD',payload :prod}
}

export const deleteProd=(id) => {
    return {type: 'DELETE_PROD', payload:id}
}

export const editProd=(id,prod) => {
    return {type: 'EDIT_PROD', payload:id,payload1:prod}
}

export const startAddProductReviews =(formData)=>{
    return(dispatch) => {
        axios.post('/productReviews',formData,
                    {headers:{
                    'x-auth':localStorage.getItem('authToken')
                    }})
            .then((response) => {
                if (response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    alert('Added ProductReviews Successfully')
                }
            })
            .catch((err) =>{
                console.log(err)
            })
    }
}

export const startGetProductReviews =() =>{
    return(dispatch) => {
        axios.get('/productReviews', {
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then((response) =>{
            const productReviews = response.data
            dispatch(setProd(productReviews))
        })
        .catch((err)=>{
            alert(err)
        })
    }
}

export const startDeleteProductReviews = (prodId) =>{
    const confirmRemove = window.confirm("Are you sure?")
    if(confirmRemove) {
        return(dispatch) => {
            axios.delete(`/productReviews/${Id}`,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const productReviews = response.data
            dispatch(deleteProd(productReviews._id))
        })
        .catch((err)=>{
            alert(err)
        })
}}}

export const startEditProductReviews = (prodId,formData) =>{
        return(dispatch) => {
            axios.put(`/productReviews/${prodId}`, formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
            })
        .then((response) =>{
            const productReviews = response.data
            dispatch(editProd(productReviews._id,productReviews))
            alert('Updated ProductReviews Successfully')
        })
        .catch((err)=>{
            alert(err)
        })
}}
