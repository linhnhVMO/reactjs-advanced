import { LOAD_DATA_REQUEST,LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from "../constants";

const initialState = {
    data: [{quote: 'Life isn’t about getting and having, it’s about giving and being.',author: 'Kevin Kruse'}],
    loading: false,
    erroMessage: '',
    colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857',
      ],
}

export const randomReducer = (state = initialState, active) => {
    switch(active.type) {
        case LOAD_DATA_REQUEST:
            return{
                ...state,
                loading: true,
            };
        case LOAD_DATA_SUCCESS:
            return{
                ...state,
                loading: false,
                data: active.payload,
            };
        case LOAD_DATA_FAILURE:
            return{
                ...state,
                data: active.payload,
            };
        default:
            return state;
    }
}