import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { GeneralColors } from "../../constants/colors";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GeneralColors.white,
  },
});
