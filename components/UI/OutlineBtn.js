import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { GeneralColors } from "../../constants/colors";

const OutlineBtn = ({ children, onPress, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlineBtn;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: GeneralColors.secondary,
    flex: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: GeneralColors.secondary,
  },
});
