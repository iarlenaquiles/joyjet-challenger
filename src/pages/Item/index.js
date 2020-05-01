import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign } from "expo-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import Carousel from "../../components/Carousel";
import actions from "../../redux/favorites/types";
import styles from "./styles";

const Favorite = ({ favorite, onPress }) => (
  <TouchableOpacity style={styles.favoriteBtn} onPress={onPress}>
    <AntDesign name={favorite ? "star" : "staro"} color="#fff" size={30} />
  </TouchableOpacity>
);

export default function Item() {
  const [favorite, setFavorite] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const { item, category } = route.params;

  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorites !== undefined) {
      const result = favorites.list.findIndex(
        f => f.item.title === item.title && f.category === category
      );
      setFavorite(result !== -1);
    }
  }, [favorites]);

  function handleFavorite() {
    dispatch({
      type: actions.TOOGLE_FAVORITE,
      payload: {
        item: item,
        category: category
      }
    });
  }

  return (
    <ScrollView>
      <Favorite favorite={favorite} onPress={handleFavorite} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Ionicons name="ios-arrow-back" color="#fff" size={30} />
      </TouchableOpacity>
      <Carousel galery={item.galery} />

      <View style={styles.infos}>
        <Text style={styles.title}>{item.title.toUpperCase()}</Text>

        <Text style={styles.category}>{category}</Text>

        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}
