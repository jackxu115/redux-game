import {actionType} from "../Helper";


const initialState = {
    gameList: []
}

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_GAMES:
            console.log('reducer')
            return{...state, gameList: action?.payload}

        default:
            return state
    }
}
