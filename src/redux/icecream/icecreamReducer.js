import { BUY_ICECREAM, RESTOCK_ICECREAM } from "./actionType";

const initalState = {
    numOfIcecream: 10
}

export const icecreamReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BUY_ICECREAM:
            return { ...state, numOfIcecream: state.numOfIcecream - payload }
        case RESTOCK_ICECREAM:
            return { ...state, numOfIcecream: state.numOfIcecream + payload }
        default: return state
    }
}