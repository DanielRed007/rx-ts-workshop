import { Action } from "redux";
import { InitialState } from "../model/InitialState";

export interface DispatchAction extends Action {
  payload: Partial<InitialState>;
}
