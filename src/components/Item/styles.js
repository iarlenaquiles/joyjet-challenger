import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textItemContainer: {
    position: "absolute",
    bottom: 10,

    width: "100%",
    zIndex: 2,
    padding: 15
  },
  textItem: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  textDescription: {
    color: "white"
  }
});
