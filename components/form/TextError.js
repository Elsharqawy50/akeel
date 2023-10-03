import React from "react";
import { StyleSheet, Text } from "react-native";
import { GeneralColors } from "../../constants/colors";

const TextError = ({ children }) => {
  return <Text style={styles.error}>{children}</Text>;
};

export default TextError;

const styles = StyleSheet.create({
  error: {
    color: GeneralColors.error,
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 4,
  },
});
