import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyCake, restockCake } from '../redux/cake/cakeActions'

class ClassCakeContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            buy_value: 1,
            restock_value: 5
        }
    }
    render() {
        const { numOfCakes, dispatch } = this.props
        const { buy_value, restock_value } = this.state
        return (
            <div>
                <h2>Number of cakes {numOfCakes}</h2>
                <div>
                    <input
                        type='number'
                        min='0' max='10'
                        value={buy_value}
                        onChange={(e) => this.setState({ buy_value: parseInt(e.target.value) })}
                    />
                    <button onClick={() => dispatch(buyCake(buy_value))}>Buy cake</button>
                </div>
                <div>
                    <input
                        type='number'
                        min='0' max='10'
                        value={restock_value}
                        onChange={(e) => this.setState({ restock_value: parseInt(e.target.value) })}
                    />
                    <button onClick={() => dispatch(restockCake(restock_value))}>Restore Cake</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCakeContainer)