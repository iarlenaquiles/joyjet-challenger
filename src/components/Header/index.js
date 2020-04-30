import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, Text, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Header() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.containerBtnMenu}
        onPress={() => navigation.toggleDrawer()}
      >
        <Feather name="menu" size={30} />
      </TouchableOpacity>
      <Text style={styles.textContainer}>Digital Space</Text>
    </SafeAreaView>
  );
}
