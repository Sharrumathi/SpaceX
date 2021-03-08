import {
    LIST_DATA,
    GET_YEARS,
    UPDATE_DATA,
    SUCCESS_LAUNCH,
    SUCCESS_LANDING
} from "../constants/ActionTypes";

const initialState = {
    space: [],
    years: '2020',
    successLaunch: 'True' && true,
    successLanding: 'True' && true,
    loading: true
}

export default (state = initialState, action) => {
    console.log('action.type', action.type)
    switch (action.type) {

        case LIST_DATA:
            return Object.assign({}, state, {
                space: action.payload
            })

        case GET_YEARS:
            return Object.assign({}, state, {
                years: action.payload
            })

        case SUCCESS_LAUNCH:
            return Object.assign({}, state, {
                successLaunch: action.payload == "True" ? true : false
            })

        case SUCCESS_LANDING:
            return Object.assign({}, state, {
                successLanding: action.payload == "True" ? true : false
            })

        // case UPDATE_DATA:
        //     console.log('state', state)
        //     const filterYear = state.space.length > 0 && state.space.filter((item) => {
        //     return item.launch_year == state.years
        // })
        //     return Object.assign({}, state, {
        //         ...state,
        //         space: filterYear
        //     })

        default:
            return state;
    }
};