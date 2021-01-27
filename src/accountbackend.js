import axios from 'axios'

const api = axios.create({
    baseURL: 'http://doerga.com:5000'
})

export async function getAccountDetails(state, dispatch) {
    api.get(`/api/v1/accounts/${state.id}`)
        .then(response => {
            dispatch({ type: 'FETCH_SUCCES', payload: response.data.account })
        })
        .catch(error => {
            dispatch({ type: 'FETCH_ERROR' })
        })
}

export async function setAccountDetails(state, dispatch) {
    api.put(`/api/v1/accounts/${state.id}`, state)
        .then(response => {
            dispatch({ type: 'PUT_SUCCES' })
        })
        .catch(error => {
            dispatch({ type: 'PUT_ERROR' })
        })
}

export const onSubmit = async function(e) {
    e.preventDefault();
};