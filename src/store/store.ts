import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./combineReducer";

// import { createBrowserHistory } from "history";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  //blacklist: ['scrumboard', 'themeSetting', 'LanguageSwitcher', 'themeChanger']
  blacklist: ["counterSlice"],
};

// const history = createBrowserHistory({
//   basename: process.env.REACT_APP_BASE_PATH,
// });

// const routeMiddleware = routerMiddleware(history);
// const middlewares = [thunk, routeMiddleware];
const middlewares = [thunk];

// const composeEnhancer =
//   (process.env.REACT_APP_ENV !== "production" &&
//     typeof window !== "undefined") ||
//   compose;

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: middlewares,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootGate = ReturnType<typeof store.getState>;
