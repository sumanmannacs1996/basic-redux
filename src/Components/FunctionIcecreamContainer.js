import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream, restockIcecream } from '../redux/icecream/icecreamAction';

function FunctionIcecreamContainer() {
    const [buyValue, setBuyValue] = useState(1);
    const [restoreValue, setRestoreValue] = useState(5);
    const numOfIcecream = useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecream {numOfIcecream}</h2>
            <div>
                <input
                    type='number'
                    min='0' max='10'
                    value={buyValue}
                    onChange={(e) => setBuyValue(parseInt(e.target.value))}
                />
                <button onClick={() => dispatch(buyIcecream(buyValue))}>Buy Icecream</button>
            </div>
            <div>
                <input
                    type='number'
                    min='0' max='10'
                    value={restoreValue}
                    onChange={(e) => setRestoreValue(parseInt(e.target.value))}
                />
                <button onClick={() => dispatch(restockIcecream(restoreValue))}>Restore Icecream</button>
            </div>
        </div>
    )
}

export default FunctionIcecreamContainer