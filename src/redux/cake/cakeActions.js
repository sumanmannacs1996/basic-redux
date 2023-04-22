import { BUY_CAKE, RESTOCK_CAKE } from "./actionType"

export const buyCake = (value) => {
    return {
        type: BUY_CAKE,
        payload: value
    }
}

export const restockCake = (value) => {
    return {
        type: RESTOCK_CAKE,
        payload: value
    }
}