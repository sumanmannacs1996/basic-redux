import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, restockCake } from '../redux/cake/cakeActions';

function FunctionCakeContainer() {
    const [buyValue, setBuyValue] = useState(1);
    const [restoreValue, setRestoreValue] = useState(5);
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of cakes {numOfCakes}</h2>
            <div>
                <input
                    type='number'
                    min='0' max='10'
                    value={buyValue}
                    onChange={(e) => setBuyValue(parseInt(e.target.value))}
                />
                <button onClick={() => dispatch(buyCake(buyValue))}>Buy cake</button>
            </div>
            <div>
                <input
                    type='number'
                    min='0' max='10'
                    value={restoreValue}
                    onChange={(e) => setRestoreValue(parseInt(e.target.value))}
                />
                <button onClick={() => dispatch(restockCake(restoreValue))}>Restore Cake</button>
            </div>
        </div>
    )
}

export default FunctionCakeContainer