import React from "react";
import { View, ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import Header from "../../components/Header";
import Item from "../../components/Item";

export default function Favorite() {
  const favorites = useSelector(state => state.favorites);

  return (
    <View style={styles.container}>
      <Header title={"Favorites"} />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ flexGrow: favorites.list.length ? 0 : 1 }}
      >
        {favorites.list.length > 0 &&
          favorites.list.map((favorite, index) => (
            <Item
              key={index}
              item={favorite.item}
              category={favorite.category}
            />
          ))}
      </ScrollView>
    </View>
  );
}
