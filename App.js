import React from "react";
import "./src/config/ReactotronConfig";
import { AsyncStorage } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import Routes from "./src/routes";
import reducers from "./src/redux/favorites";
import { createStore, applyMiddleware } from "redux";
const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
