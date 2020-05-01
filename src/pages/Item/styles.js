import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  infos: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: "bold"
  },
  category: {
    color: "#3694de",
    fontSize: 13
  },
  description: {
    marginTop: 20,
    lineHeight: 24
  },
  btn: {
    position: "absolute",
    top: 15,
    left: 10,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  favoriteBtn: {
    position: "absolute",
    top: 15,
    right: 10,
    zIndex: 3,
    alignItems: "center",
    justifyContent: "center"
  }
});
