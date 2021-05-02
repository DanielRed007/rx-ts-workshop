import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../model/InitialState";
import { RootDispatcher } from "../store/root-reducer";

interface Props {}

interface StateProps {
  name: string;
  address: string;
}

export const DemoHooks: React.FC<Props> = () => {
  const { name, address } = useSelector<InitialState, StateProps>(
    (state: InitialState) => {
      return {
        name: state.name,
        address: state.address,
      };
    }
  );

  const dispatch = useDispatch();
  const rootDispatcher = new RootDispatcher(dispatch);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            rootDispatcher.updateName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
