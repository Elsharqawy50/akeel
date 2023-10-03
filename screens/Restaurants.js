import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import RestaurantItem from "../components/restaurants/RestaurantItem";

const dummyData = [
  {
    id: 1,
    title: "Example Restaurant 1",
    cuisine: "Italian",
    location: "123 Main St, Cityville, USA",
    rating: 4.5,
    imageUrl:
      "https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Example Restaurant 2",
    cuisine: "Japanese",
    location: "456 Elm St, Townsville, USA",
    rating: 4.8,
    imageUrl:
      "https://images.pexels.com/photos/988952/pexels-photo-988952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Example Restaurant 3",
    cuisine: "Mexican",
    location: "789 Oak St, Villagetown, USA",
    rating: 4.2,
    imageUrl:
      "https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Example Restaurant 4",
    cuisine: "Indian",
    location: "321 Elm St, Citytown, USA",
    rating: 4.0,
    imageUrl:
      "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Example Restaurant 5",
    cuisine: "Chinese",
    location: "567 Oak St, Metropolis, USA",
    rating: 4.6,
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Example Restaurant 6",
    cuisine: "American",
    location: "890 Maple Ave, Hometown, USA",
    rating: 4.4,
    imageUrl:
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Restaurants = () => {
  if (dummyData.length === 0) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>No Restaurants Found. Add one!</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.screen}
      data={dummyData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <RestaurantItem
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      )}
      numColumns={2}
    />
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  fallback: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
