import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "react-query";

import Restaurants from "./screens/Restaurants";
import RestaurantMenu from "./screens/RestaurantMenu";
import AddRestaurant from "./screens/AddRestaurant";
import IconBtn from "./components/UI/IconBtn";
import { GeneralColors } from "./constants/colors";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}
