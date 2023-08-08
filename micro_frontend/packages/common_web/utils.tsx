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

    /**
     * 实时监听，配合子应用页面响应刷新
     */
    store.subscribe(() => {
      computedSharedChangeCallback(this.getShared());
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

  /**
   * 获取数据不参与子应用页面响应刷新
   */
  public getShared(namespace?: string): any {
    let sharedState;
    if (namespace) {
      sharedState = store.getState()?.shared?.[namespace];
    } else {
      sharedState = store.getState()?.shared;
    }
    return sharedState;
  }

  public onSharedChange = computedSharedChange;
}

export default Shared;
