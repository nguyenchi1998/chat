import actionType from '../_actions/actionType';

const initalState = {
  messages: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case actionType.FETCH_MESSAGES : {
      return {
        ...state,
        data: action.payload,
      }
    }
    default: {
      return state
    }
  }
};


