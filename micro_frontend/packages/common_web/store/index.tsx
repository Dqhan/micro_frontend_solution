import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "./reducer";
import { sharedReducer } from "./reducer";
import { actionReducer } from "./reducer";


import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: [],
};

const themePersistConf = {
  key: "theme",
  storage,
  blacklist: [],
};

const sharedPersistConf = {
  key: "shared",
  storage,
  blacklist: [],
};

const actionPersistConf = {
  key: "action",
  storage,
  blacklist: [],
};

const persistThemeReducer = persistReducer(themePersistConf, themeReducer);
const persistSharedReducer = persistReducer(sharedPersistConf, sharedReducer);
const persistActionReducer = persistReducer(actionPersistConf, actionReducer);

const rootReducer = combineReducers({
  themeState: persistThemeReducer,
  shared: persistSharedReducer,
  actionState: persistActionReducer
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

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
