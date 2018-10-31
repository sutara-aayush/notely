export const fetchData = () => {
    return {
        type: "fetchData"
    };
};
export const favTapped = (item) => {
    return {
        type: "fav",
        item: item,
    };
};

export const heartTapped = (item) => {
    return {
        type: "heart",
        item: item,
    };
};
export const saveTapped = (item, purpose = "") => {
    return {
        type: "save",
        item: item,
        purpose: purpose,
    };
};
export const deleteTapped = (item) => {
    return {
        type: "delete",
        item: item,
    };
};
export const filterFavs = () => {
    return {
        type: "filterFavs"
    };
};
export const filterHearts = () => {
    return {
        type: "filterHearts"
    };
};
export const flterFavsAndHearts = () => {
    return {
        type: "filterFavsAndHearts"
    }
};