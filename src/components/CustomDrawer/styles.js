import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  containerItems: {
    flex: 3
  },
  containerBottom: {
    flex: 1,
    height: 100,
    backgroundColor: "#3694de",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 30
  },
  containerName: {
    width: "100%",
    marginLeft: 20,
    marginBottom: 10
  },
  containerImage: {
    width: "100%",
    alignItems: "flex-start",
    marginLeft: 20,
    marginBottom: 20
  },
  label: {
    fontSize: 23,
    fontWeight: "500"
  },
  containerLabel: {
    alignItems: "flex-end",
    backgroundColor: "red",
    width: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textName: {
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    marginTop: -40
  }
});
