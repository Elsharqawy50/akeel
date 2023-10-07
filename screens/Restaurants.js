import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";

import RestaurantItem from "../components/restaurants/RestaurantItem";
import { getAllRestaurants } from "../utils/https/restaurantsRequests";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const Restaurants = () => {
  const { data: restaurants, isFetching } = useQuery(
    "restaurants",
    getAllRestaurants
  );

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (!restaurants?.length) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>No Restaurants Found. Add one!</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.screen}
      data={restaurants}
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
