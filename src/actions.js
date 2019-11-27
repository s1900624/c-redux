export const inc = () => {
    return {
        type: 'INC'
    }
};

export const dec = () => {
    return {
        type: 'DEC'
    }
};

export const reset = () => {
    return {
        type: 'RESET'
    }
};

export const storeadd = (value) => {
    return {
        type: 'STOREADD',
        payload: value
    }
};

export const storedel = (value) => {
    return {
        type: 'STOREDEL',
        payload: value
    }
};

export const rnd = () => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random()*7)
    };
};