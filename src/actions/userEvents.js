import { ADD_FEATURE, DELETE_FEATURE } from './types';

export const addFeature = () => dispatch => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const deleteFeature = () => dispatch => {
    return {
        type: DELETE_FEATURE,
        payload: feature
    }
}