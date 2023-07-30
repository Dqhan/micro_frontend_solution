import { store } from "./store";

let computedSharedChangeCallback = (state: any) => {
  console.log("none function");
};

const computedSharedChange = (callback: (state: any) => void) => {
  computedSharedChangeCallback = callback;
};

let prefixCls = "";

class Shared {
  constructor() {
    store.subscribe(() => {
      computedSharedChangeCallback(store.getState());
    });
  }

  public setShared(value: string): void {
    store.dispatch({
      type: "shared/setShared",
      payload: value,
    });
  }

  public getShared(): any {
    const state = store.getState();
    const { sharedState } = state.shared;
    return sharedState;
  }

  public onSharedChange = computedSharedChange;
}

const shared = new Shared();

export default shared;
