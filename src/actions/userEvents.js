import { ADD_FEATURE, DELETE_FEATURE } from './types';

// Action Creators
// function() that returns an action object
// under-the-hood, Redux tahes the action object that's returned & dispatches it to the reducer
// 

export const addFeature = () => dispatch => {
    dispatch ({
        type: 'ADD_FEATURE',
        payload: addFeature
    })
}

export const deleteFeature = () => dispatch => {
   dispatch ({
        type: 'DELETE_FEATURE',
        payload: deleteFeature
    })
};