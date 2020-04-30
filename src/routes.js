import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./pages/Home";
import FavoriteScreen from "./pages/Favorite";
import ItemScreen from "./pages/Item";

import CustomDrawer from "./components/CustomDrawer";

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

const HomeNavigator = () => (
  <AppStack.Navigator initialRouteName="Home" headerMode="none">
    <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    <AppStack.Screen name="ItemScreen" component={ItemScreen} />
  </AppStack.Navigator>
);

const FavoriteNavigator = () => (
  <AppStack.Navigator initialRouteName="Favorite" headerMode="none">
    <AppStack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    <AppStack.Screen name="ItemScreen" component={ItemScreen} />
  </AppStack.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <AppDrawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        drawerContent={props => <CustomDrawer {...props} />}
      >
        <AppDrawer.Screen name="Home" component={HomeNavigator} />
        <AppDrawer.Screen name="Favorites" component={FavoriteNavigator} />
      </AppDrawer.Navigator>
    </NavigationContainer>
  );
}
