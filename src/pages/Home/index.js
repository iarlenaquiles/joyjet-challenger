import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import styles from "./styles";
import Loading from "../../components/Loading";
import api from "../../services/api";
import Category from "../../components/Category";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item"
  }
];

function Item({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadItems() {
      const result = await api.get("mobile-test-one.json");
      console.tron.log(result);
      setItems(result.data);
      setLoading(false);
    }

    loadItems();
  }, []);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      {loading ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.list}
          data={items}
          renderItem={({ item }) => <Category item={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}
