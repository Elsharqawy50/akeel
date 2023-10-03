import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GeneralColors } from "../../constants/colors";
import { ErrorMessage } from "formik";
import TextError from "./TextError";

const Input = ({ label, name, onChangeText, onBlur, value, ...props }) => {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        name={name}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      <ErrorMessage component={TextError} name={name} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    backgroundColor: GeneralColors.white,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderBottomColor: GeneralColors.secondary,
    borderBottomWidth: 1,
    marginBottom: 4,
  },
});
