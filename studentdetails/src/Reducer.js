const Reducer = (state,action) => {

    switch (action.type) {
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            };

        case "GET_STUDENTS":
            return {
                ...state,
                isLoading: false,
                Array: action.payload.Array,
            };
    }


    return state;
};

export default Reducer;