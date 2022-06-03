const initialState = {
    headerMode: {
        modalPosition: 0,
        isTop: true,
        isLong: true,
        isExplore: false,
        isStay: false
    }
};

export function headerReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'TOGGLE_MODAL_POSITION':
            newState = { headerMode: { ...state.headerMode, modalPosition: action.set } }
            break;
        case 'TOGGLE_HEADER_ISTOP':
            newState = { headerMode: { ...state.headerMode, isTop: action.set } }
            break;
        case 'HEADER_ISLONG':
            newState = { headerMode: { ...state.headerMode, isLong: action.set } }
            break;
        case 'SET_EXPLORE_MODE':
            newState = { headerMode: { ...state.headerMode, isExplore: action.set } }
            break;
        case 'SET_STAY_MODE':
            newState = { headerMode: { ...state.headerMode, isStay: action.set } }
            break
        default:
    }
    return newState;
}
