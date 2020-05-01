import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import styles from "./styles";
import Loading from "../../components/Loading";
import api from "../../services/api";
import Category from "../../components/Category";

export default function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadItems() {
      const result = await api.get("mobile-test-one.json");

      setItems(result.data);
      setLoading(false);
    }

    loadItems();
  }, []);

  return (
    <View style={styles.container}>
      <Header title={"Digital Space"} navigation={navigation} />

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
