const initialState = {
    loading: false,
    data: [],
};

const reducer = (state = initialState, action) => {
    console.log("state", action.payload)

    switch (action.type) {
        case 'RESET_FORM':
            return {
                ...state,
                data: [],
            };
        case 'FETCH_DATA':
            return {
                ...state,
                loading: true,

            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload.data,
            };
        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
