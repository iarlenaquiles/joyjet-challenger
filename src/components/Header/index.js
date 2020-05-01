import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, Text, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Header({ title }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.toggleDrawer()}
      >
        <Feather name="menu" size={30} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
}
