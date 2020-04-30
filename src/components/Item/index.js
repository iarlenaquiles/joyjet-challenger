import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Carousel from "../Carousel";

export default function Item({ item, category }) {
  const navigation = useNavigation();

  function handleClick() {
    navigation.navigate("ItemScreen", { item: item, category: category });
  }

  return (
    <View style={styles.container}>
      <Carousel galery={item.galery} />

      <TouchableOpacity style={styles.textItemContainer} onPress={handleClick}>
        <Text style={styles.textItem}>{item.title}</Text>
        <Text style={styles.textDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
