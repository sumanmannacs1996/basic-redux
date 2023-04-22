import React, { Component } from 'react'
import { buyIcecream, restockIcecream } from '../redux/icecream/icecreamAction'
import { connect } from 'react-redux'

export class ClassIcecreamContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buy_value: 1,
            restock_value: 5
        }
    }
    render() {
        const { numOfIcecream, buyIcecream, restockIcecream } = this.props
        const { buy_value, restock_value } = this.state
        return (
            <div>
                <h2>Number of Icecream {numOfIcecream}</h2>
                <div>
                    <input
                        type='number'
                        min='0' max='10'
                        value={buy_value}
                        onChange={(e) => this.setState({ buy_value: parseInt(e.target.value) })}
                    />
                    <button onClick={() => buyIcecream(buy_value)}>Buy Icecream</button>
                </div>
                <div>
                    <input
                        type='number'
                        min='0' max='10'
                        value={restock_value}
                        onChange={(e) => this.setState({ restock_value: parseInt(e.target.value) })}
                    />
                    <button onClick={() => restockIcecream(restock_value)}>Restore Icecream</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numOfIcecream: state.icecream.numOfIcecream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIcecream: (value) => dispatch(buyIcecream(value)),
        restockIcecream: (value) => dispatch(restockIcecream(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassIcecreamContainer)