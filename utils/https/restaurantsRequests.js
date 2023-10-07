import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// get all restaurants
export const getAllRestaurants = async () => {
  const querySnapshot = await getDocs(collection(db, "restaurants"));
  const restaurantsArr = [];
  querySnapshot.forEach((doc) => {
    const resObject = {
      id: doc.id,
      ...doc.data(),
    };
    restaurantsArr.push(resObject);
  });
  return restaurantsArr;
};

// add new restaurant
export const addRestaurant = async (data) => {
  await addDoc(collection(db, "restaurants"), data);
};
