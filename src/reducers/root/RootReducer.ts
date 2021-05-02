import { Reducer } from "redux";
import { InitialState } from "../../model/InitialState";
import { DispatchAction } from "./InitialAction";
import { rootState } from "./InitialState";

export enum ActionType {
  UpdateName,
  UpdateAddress,
  DeleteName,
  DeleteAddress,
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (
  state = rootState,
  action
) => {
  if (action.type === ActionType.UpdateName) {
    return { ...state, name: action.payload.name || "" };
  } else if (action.type === ActionType.DeleteName) {
    return { ...state, name: "" };
  } else if (action.type === ActionType.DeleteAddress) {
    return { ...state, address: "" };
  } else if (action.type === ActionType.UpdateAddress) {
    return { ...state, name: action.payload.name || "" };
  } else return state;
};
