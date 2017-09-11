import merge from 'lodash/merge';

const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case "SWITCH_CURRENCY":
      let nextState = merge({}, state);
      nextState.rate = action.rate;
      nextState.baseCurrency = action.baseCurrency;
      return nextState;
    default:
      return initialState;
  }
};

export default reducer;
