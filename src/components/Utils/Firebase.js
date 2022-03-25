import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
 
const firebaseConfig = {
    apiKey: "AIzaSyBZOK4mn7kjT9y7RVDpfH9kB1uSnpFY6nI",
    authDomain: "coderhouse-ecommerce-51d7f.firebaseapp.com",
    projectId: "coderhouse-ecommerce-51d7f",
    storageBucket: "coderhouse-ecommerce-51d7f.appspot.com",
    messagingSenderId: "426288841058",
    appId: "1:426288841058:web:be3e44248aae19d438ec3b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);