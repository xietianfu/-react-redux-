
export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case 'increment':
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case 'decrement':
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
