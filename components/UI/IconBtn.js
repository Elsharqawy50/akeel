import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconBtn = ({ iconName, size, color, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={size} color={color} />
    </Pressable>
  );
};

export default IconBtn;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
