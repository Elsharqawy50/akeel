import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import Restaurants from "./screens/Restaurants";
import RestaurantMenu from "./screens/RestaurantMenu";
import AddRestaurant from "./screens/AddRestaurant";
import IconBtn from "./components/UI/IconBtn";
import { GeneralColors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GeneralColors.secondary,
            },
            headerTintColor: GeneralColors.white,
          }}
        >
          <Stack.Screen
            name="Restaurants"
            component={Restaurants}
            options={({ navigation }) => ({
              title: "Restaurants",
              headerRight: ({ tintColor }) => (
                <IconBtn
                  color={tintColor}
                  size={28}
                  iconName={"add"}
                  onPress={() => navigation.navigate("AddRestaurant")}
                />
              ),
            })}
          />
          <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
          <Stack.Screen
            name="AddRestaurant"
            component={AddRestaurant}
            options={{ title: "Add Restaurant" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
