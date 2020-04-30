import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./styles.js";

import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";

import logo from "../../assets/logo.png";

export default props => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.containerImage}>
            <Image source={logo} style={{ height: 120, width: 120 }} />
            <Text style={styles.textName} fontWeight="bold">
              JOYJET
            </Text>
          </View>
        </View>
        <View style={styles.containerItems}>
          <DrawerItemList
            {...props}
            activeTintColor={"#3694de"}
            activeBackgroundColor={"#fff"}
            inactiveTintColor={"black"}
            labelStyle={styles.label}
            style={styles.containerLabel}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
