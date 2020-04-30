import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: "joyjet",
      storage: AsyncStorage,
      whitelist: ["item"]
    },
    reducers
  );

  return persistedReducer;
};
