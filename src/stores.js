const reducer = (results = [], action) => {
    switch (action.type) {
        case 'STOREADD': {
            const arr = results.concat({id: new Date(), value: action.payload});
            return arr;
        }
        case 'STOREDEL': {
            const arr = results.filter(result => result.id !== action.payload);
            return arr;
        }
        default:
            return results;
    }
};

export default reducer;