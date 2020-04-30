import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
