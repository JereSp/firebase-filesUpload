import { initializeApp } from "firebase/app"; //import para inicilizar firebase
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // import para la funcion de storage
import { v4 } from "uuid";

const firebaseConfig = {
    apiKey: "AIzaSyAKaZadXWSfu6d-OIX9egJ3ErJYbMxiSCo",
    authDomain: "prueba-64252.firebaseapp.com",
    projectId: "prueba-64252",
    storageBucket: "prueba-64252.appspot.com",
    messagingSenderId: "645083198142",
    appId: "1:645083198142:web:c4a1c3761bc6e9c80d64ef",
    measurementId: "G-EZ1M04Q1TP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // aqui creo mi storage y lo exporto para utilizarlo en otras partes de mi app

export async function uploadFile(file) {
    const storageRef = ref(storage, v4()); // el segundo parametro es el nombre con el cual guarda el archivo en el storage, en este caso para crear un id unico utilizamos la libreria uuid que crea ids irrepetibles
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return url;
}
