import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getFirestore, getDocs, collection, getDoc, doc, query, where, addDoc, Timestamp } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtiene todas las categorias
export const getCategories = async () => {
    const categories = await getDocs(query(collection(db, "categories"), where("type", "==", "spent")));
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
// Obtiene una categoria 
export const getCategory = async (id) => {
    const category = await getDoc(doc(db, "categories", id));

    const categoryReturn = {
        name: category.data().name, 
        icon: category.data().icon
    }
  
    return categoryReturn;
}

// Obtiene todos los ingresos
export const getEntries = async () => {
    const entries = await getDocs(collection(db, "entries"));
    const entriesReturn = [];

    entries.forEach(entry => {
        const entriesAux = {
            id: entry.id,
            data: entry.data()
        }
        entriesReturn.push(entriesAux)
    })

    return entriesReturn;
}

// Obtiene todos los gastos
export const getSpents = async () => {
    const spents = await getDocs(collection(db, "spents"));
    const spentsReturn = [];

    spents.forEach(spent => {
        const spentsAux = {
            id: spent.id,
            data: spent.data()
        }
        spentsReturn.push(spentsAux)
    })

    return spentsReturn;
}

// Obtiene un gasto por name
export const getSpent = async (name) => {
    const spents = await getDocs(query(collection(db, "spents"), where("nameCategory", "==", name)));
    let spentAcumulate = 0;

    spents.forEach(spent => {
        spentAcumulate += spent.data().amount;
    })
  
    return spentAcumulate;
}

// Inserta un nuevo gasto
export const insertSpent = async ({amount,date,nameCategory,observations}) => {
    const docRef = await addDoc(collection(db, "spents"), {
        amount: Number(amount),
        date: Timestamp.fromDate(new Date(date)),
        nameCategory,
        observations 
    });
    console.log("Document written with ID: ", docRef.id);
}

// 