import React from "react";
import { Pressable } from "react-native";
import { Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GeneralColors } from "../../constants/colors";

const RestaurantItem = ({ id, imageUrl, title }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() =>
        navigation.navigate("RestaurantMenu", {
          restaurantId: id,
        })
      }
    >
      <Image style={styles.imageContainer} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: GeneralColors.white,
    elevation: 4,
    borderRadius: 4,
    overflow: "hidden",
    margin: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    width: "100%",
    height: 100,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
