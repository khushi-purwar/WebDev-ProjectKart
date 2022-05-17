import axios from 'axios';

export const fetchUser = () => dispatch => {
    axios.get('/api/current_user')
        .then(res => dispatch({ type: "FETCH_USER", payload: res.data.googleID }))
};

export const postMemory = (memory) => dispatch => {
    axios.post('/memories/add', memory, { headers: { 'Content-Type': 'application/json', } })
        .then(result => dispatch({ type: "ADD_MEMORY", payload: result.data }));
}

export const getMemory = () => dispatch => {
    axios.get('/memories/get')
        .then(result => dispatch({ type: "GET_MEMORY", payload: result.data }));
}

export const deleteMemory = (id) => dispatch => {
    axios.delete(`/memories/${id}`)
        .then(result => dispatch({ type: "DELETE_MEMORY", payload: id }));
}