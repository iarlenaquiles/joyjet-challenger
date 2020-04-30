import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center"
  },
  opacity: {
    width: "100%",
    zIndex: 2,
    height: 300,
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.5
  },
  LeftArrow: {
    position: "absolute",
    left: 0,
    height: "100%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    width: 50
  },
  RightArrow: {
    position: "absolute",
    right: 0,
    height: "100%",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    width: 50
  },
  slide: { zIndex: 0 }
});
