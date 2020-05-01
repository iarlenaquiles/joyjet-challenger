import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./favorites/reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export { store, persistor };
