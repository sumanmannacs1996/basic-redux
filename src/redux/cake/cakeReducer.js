import { BUY_CAKE, RESTOCK_CAKE } from "./actionType";

const initalState = {
    numOfCakes: 10
}

export const cakeReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - payload }
        case RESTOCK_CAKE:
            return { ...state, numOfCakes: state.numOfCakes + payload }
        default: return state
    }
} 