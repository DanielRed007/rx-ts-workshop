import { Action, Dispatch } from "redux";
import { RootState } from "./InitialState";

export interface DispatchAction extends Action {
  payload: Partial<RootState>;
}

export enum ActionType {
  UpdateName,
  UpdateAddress,
  DeleteName,
  DeleteAddress,
}

export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }

  updateName = (name: string) =>
    this.dispatch({ type: ActionType.UpdateName, payload: { name } });
  updateAddress = (address: string) =>
    this.dispatch({ type: ActionType.UpdateAddress, payload: { address } });
  deleteName = () =>
    this.dispatch({ type: ActionType.DeleteName, payload: {} });
  deleteAddress = () =>
    this.dispatch({ type: ActionType.DeleteAddress, payload: {} });
}
