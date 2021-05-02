import { combineReducers, Dispatch, Reducer } from "redux";
import { rootReducer } from "../store/root-reducer";
import { RootState } from "./root/InitialState";

export interface ApplicationState {
  root: RootState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>(
  {
    root: rootReducer,
  }
);
