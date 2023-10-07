import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export const uploadImage = async ({ imageUri, imageTitle }) => {
  const imageRef = ref(storage, "images/" + imageTitle + ".jpg");

  const response = await fetch(imageUri);
  const blob = await response.blob();
  await uploadBytes(imageRef, blob);
  const imageUrl = await getDownloadURL(imageRef);
  return imageUrl;
};
