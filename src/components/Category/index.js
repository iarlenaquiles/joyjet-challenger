import React from "react";
import { View, Text } from "react-native";

import Item from "../Item";
import styles from "./styles";

export default function Category({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.textCategoryContainer}>
        <Text style={styles.textCategory}>{item.category}</Text>
      </View>

      {item.items.length > 0 &&
        item.items.map((i, index) => (
          <Item key={index} item={i} category={item.category} />
        ))}
    </View>
  );
}
