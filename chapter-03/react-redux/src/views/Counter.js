import React, { PropTypes } from 'react';
import { decrement, increment } from '../Actions.js';
import { connect } from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

const Counter = ({ caption, onIncrement, onDecrement, value,sayHello }) => (
  <div>
    <button style={buttonStyle} onClick={onIncrement}>
      +
    </button>
    <button style={buttonStyle} onClick={onDecrement}>
      -
    </button>
    <span onClick={sayHello} >
      {caption} count: {value}
    </span>
  </div>
);

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(decrement(ownProps.caption));
    },
    sayHello:()=> console.log('hello world')
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
