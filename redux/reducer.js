import list from '../assets/DataList';

const INITIAL_STATE = {
    list,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "fetchData":

            return {
                ...state,
            };
        case "filterFavsAndHearts":

            return {
                ...state,
            };
        case "fav":

            return {
                ...state,
            };
        case "heart":

            return {
                ...state,
            };
        case "save":

            return {
                ...state,
            };
        case "delete":

            return {
                ...state,
            };
        case "filterFavs":

            return {
                ...state,
            };
        case "filterHearts":

            return {
                ...state,
            };

        default:
            return state;
    }
}