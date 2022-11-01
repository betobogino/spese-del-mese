import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore, getDocs, collection, getDoc, doc } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const getCategories = async () => {
  const categories = await getDocs(collection(db, "categories"));
  const categoriesReturn = [];

  categories.forEach(category => {
    const buttonAux = {
        id: category.id,
        data: category.data()
    }
    categoriesReturn.push(buttonAux)
  })

  return categoriesReturn;
}  

export const getCategory = async (id) => {
  const category = await getDoc(doc(db, "categories", id));

  const categoryReturn = {
    name: category.data().name, 
    icon: category.data().icon
  }
  
  return categoryReturn;
}