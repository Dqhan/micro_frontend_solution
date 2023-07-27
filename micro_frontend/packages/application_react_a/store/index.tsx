import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { testReducer } from "./reducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const testPersistConf = {
  key: "test",
  storage,
  blacklist: [],
};

const persistSharedReducer = persistReducer(testPersistConf, testReducer);

const rootReducer = combineReducers({
  test: persistSharedReducer,
});

const rootPresistReducer = persistReducer(rootPersistConfig, rootReducer);

const normalStore = configureStore({
  reducer: rootPresistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const store = normalStore;

export const persistor = persistStore(normalStore);

