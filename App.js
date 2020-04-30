import React from "react";
import "./src/config/ReactotronConfig";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import { store, persistor } from "./src/store";

import Routes from "./src/routes";

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
