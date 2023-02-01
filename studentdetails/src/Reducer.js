const Reducer = (state,action) => {

    switch (action.type) {
        case "GET_STUDENTS":
            return {
                ...state,
                Array: action.payload.hits,
            }
    }


    return state;
};

export default Reducer;