import React from "react";
import {
  Alert,
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GeneralColors } from "../constants/colors";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const ImagePickerComp = () => {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  const [imageUri, setImageUri] = useState("");

  const verifyPermissions = async () => {
    if (status.status !== ImagePicker.PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      if (permissionResponse.granted) {
        return permissionResponse.granted;
      }
    }

    if (status.status === ImagePicker.PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "Permission to access camera roll is required!",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Open Settings",
            onPress: () => Linking.openSettings(),
          },
        ]
      );
      return false;
    }

    return true;
  };

  addImageHandler = async () => {
    try {
      const hasPermission = await verifyPermissions();

      if (!hasPermission) {
        return;
      }

      const image = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      });
      setImageUri(image.assets[0].uri);
      console.log(image.assets[0].uri);
    } catch (error) {
      console.log(error);
    }
    // onChooseImage(image.assets[0].uri);
  };

  return (
    <Pressable
      onPress={addImageHandler}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      {!imageUri && <Text style={styles.text}>Pick an image</Text>}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </Pressable>
  );
};

export default ImagePickerComp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: GeneralColors.secondary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  text: {
    color: GeneralColors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
