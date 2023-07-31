import { useEffect, useState } from "react";

export const useComputedSharedHook = (shared) => {
  const [state, setSharedState] = useState(shared.getShared());

  useEffect(() => {
    shared.onSharedChange((state) => {
        console.log('state', state)
      setSharedState(state);
    });
  }, []);

  return {
    state,
    setShared: shared.setShared,
  };
};
