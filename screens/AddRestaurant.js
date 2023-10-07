import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";

import GeneralBtn from "../components/UI/GeneralBtn";
import OutlineBtn from "../components/UI/OutlineBtn";
import Input from "../components/form/Input";
import ImagePickerComp from "../components/ImagePickerComp";
import { uploadImage } from "../utils/https/generalRequests";
import { addRestaurant } from "../utils/https/restaurantsRequests";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const AddRestaurant = ({ navigation }) => {
  const [imageUri, setImageUri] = useState("");

  const queryClient = useQueryClient();

  const { mutateAsync: uploadImageMutate, isLoading: uploadImageLoading } =
    useMutation(uploadImage);

  const { mutate: addRestaurantMutations, isLoading: addRestaurantLoading } =
    useMutation(addRestaurant, {
      onSuccess: () => {
        queryClient.invalidateQueries("restaurants");
        navigation.navigate("Restaurants");
      },
    });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
  });

  const initialValues = {
    title: "",
  };

  const onSubmit = async (values) => {
    const imageUrl = await uploadImageMutate({
      imageUri: imageUri,
      imageTitle: values.title,
    });
    addRestaurantMutations({
      title: values.title,
      imageUrl: imageUrl || "",
    });
  };

  const selectImageHandler = (imageUri) => {
    setImageUri(imageUri);
  };

  if (addRestaurantLoading || uploadImageLoading) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.screen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <>
              <Input
                label={"Restaurant Name"}
                name={"title"}
                onChangeText={formik.handleChange("title")}
                onBlur={formik.handleBlur("title")}
                value={formik.values.title}
              />
              <ImagePickerComp onSelectImage={selectImageHandler} />
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
