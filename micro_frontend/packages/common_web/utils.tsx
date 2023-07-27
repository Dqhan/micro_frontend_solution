import { store } from "./store";

let computedSharedChangeCallback = (state: any) => {
  console.log('none function')
}

const computedSharedChange = (callback: (state: any) => void) => {
  computedSharedChangeCallback = callback;
};

class Shared {
  constructor () {
    store.subscribe(() => { 
      computedSharedChangeCallback(store.getState())
    });    
  }
  public getShared(): any {
    const state = store.getState();
    return state.shared;
  }

  public setShared(value: string): void {
    store.dispatch({
      type: "shared/setShared",
      payload: value,
    });
  }

  public onSharedChange = computedSharedChange;

}

const shared = new Shared();

export default shared;
