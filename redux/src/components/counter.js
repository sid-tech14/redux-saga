import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, decrementAsync, increment, incrementAsync } from "../store/counter/counter.action";

class Counter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { counter, increment, decrement } = this.props;
        return (
            <>
                <div>
                    <h2>Counter: {counter}</h2>
                </div>
                <div>
                    <button onClick={increment}>Increament</button>
                    <button onClick={decrement}>Decreament</button>
                </div>
            </>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.count
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        increment: incrementAsync,
        decrement: decrementAsync,
    },
    dispatch
);


export default connect(mapStateToProps, mapDispatchToProps)(Counter);