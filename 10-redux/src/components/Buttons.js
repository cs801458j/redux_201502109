import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button type="button"
                        onClick={ this.props.onIncrement }>
                        +
                </button>
                <button type="button"
                        onClick={ this.props.onDecrement }>
                        -
                </button>
                <button type="button"
                        onClick={ this.props.onReset }>
                        reset
                </button>
            </div>
        )
    }
}

// 액션 생성자를 사용하여 액션 생셩. 해당 액션을 dispatch하는 함수를 만들고, props로 연결
let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onReset: () => dispatch(reset())
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
