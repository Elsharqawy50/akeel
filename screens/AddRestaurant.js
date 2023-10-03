import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../components/form/Input";
import GeneralBtn from "../components/UI/GeneralBtn";
import OutlineBtn from "../components/UI/OutlineBtn";
import ImagePickerComp from "../components/ImagePickerComp";

const AddRestaurant = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
  });

  const initialValues = {
    title: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.screen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          // setTimeout(() => getFormData(formik.values), 0);
          return (
            <>
              <Input
                label={"Restaurant Name"}
                name={"title"}
                onChangeText={formik.handleChange("title")}
                onBlur={formik.handleBlur("title")}
                value={formik.values.title}
              />
              <ImagePickerComp />
              <View style={styles.btnGroup}>
                <OutlineBtn onPress={() => navigation.navigate("Restaurants")}>
                  Cancel
                </OutlineBtn>
                <GeneralBtn onPress={formik.handleSubmit}>Submit</GeneralBtn>
              </View>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default AddRestaurant;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  btnGroup: {
    flexDirection: "row",
    gap: 10,
  },
});
