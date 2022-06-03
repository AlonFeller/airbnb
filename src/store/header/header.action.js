export function toggleModalPosition(set) {
    return (dispatch) => {
        try {
            dispatch({ type: 'TOGGLE_MODAL_POSITION', set });
        } catch {
            console.log('could not toggle ');
        }
    };
}

export function toggleHeaderIsTop(set) {
    return (dispatch) => {
        try {
            dispatch({ type: 'TOGGLE_HEADER_ISTOP', set });
            
        } catch {
            console.log('could not toggle ');
        }
    };
}

export function headerIsLong(set) {
    return (dispatch) => {
        try {
            dispatch({ type: 'HEADER_ISLONG', set });
        } catch {
            console.log('could not toggle ');
        }
    };
}


export function toggleIsExplore(set) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_EXPLORE_MODE', set });
        } catch {
            console.log('could not toggle ');
        }
    };
}

export function toggleIsStay(set) {
    return (dispatch) => {
        try {
            dispatch({ type: 'SET_STAY_MODE', set });
        } catch {
            console.log('could not toggle ');
        }
    };
}


