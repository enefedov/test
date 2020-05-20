const initialState = {
    user: {},
    year: 2015,
}

export default function test(state = initialState, action: any) {
    switch (action.type) {
        case "SET_YEAR" : 
            return {...state, year: action.payload}
        default:
            return state;
    }
}