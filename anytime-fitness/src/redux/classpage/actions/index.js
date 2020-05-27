import axiosWithAuth from '../../../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const ADD_CLASS = 'ADD_CLASS';
export const UPDATE_CLASS = 'UPDATE_CLASS';
export const DELETE_CLASS = 'DELETE_CLASS';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    // const token = window.localStorage.getItem('token') 
    axiosWithAuth.get('/api/instructor/class')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_DATA });
    })
    .catch(err => {
        console.log(err);
    })
}