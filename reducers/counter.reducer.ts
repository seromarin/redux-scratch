import IAction from "../interfaces/action.interface";

function reducer(state = 10, action: IAction) {
  let newState;

  switch (action.type) {
    case "INCREMENT":
      newState = state += action.payload ?? 1;
      break;
    case "DECREMENT":
      newState = state -= action.payload ?? 1;
      break;
    case "MULTIPLY":
      newState = state *= action.payload ?? 2;
      break;
    case "DIVIDE":
      newState = state /= action.payload ?? 2;
      break;
    case "RESET":
      newState = 0;
      break;
    default:
      newState = state;
      break;
  }

  return newState;
}

export { reducer as counterReducer };
