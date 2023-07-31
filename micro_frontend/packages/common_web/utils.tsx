import { store } from "./store";

let computedSharedChangeCallback = (state: any) => {
  console.log("none function");
};

const computedSharedChange = (callback: (state: any) => void) => {
  computedSharedChangeCallback = callback;
};

class Shared {
  constructor(namespace: string) {
    this.namespace = namespace;
    store.dispatch({
      type: "shared/setShared",
      payload: {
        [namespace]: {},
      },
    });
    store.subscribe(() => {
      computedSharedChangeCallback(store.getState());
    });
  }

  private namespace = "common";

  public setShared(value: string): void {
    store.dispatch({
      type: "shared/setShared",
      payload: {
        [this.namespace]: value,
      },
    });
  }

  public getShared(): any {
    const state = store.getState();
    return state.shared;
  }

  public onSharedChange = computedSharedChange;
}

export default Shared;
