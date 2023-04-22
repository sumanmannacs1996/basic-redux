import { BUY_ICECREAM, RESTOCK_ICECREAM } from "./actionType"

export const buyIcecream = (value) => {
    return {
        type: BUY_ICECREAM,
        payload: value
    }
}

export const restockIcecream = (value) => {
    return {
        type: RESTOCK_ICECREAM,
        payload: value
    }
}