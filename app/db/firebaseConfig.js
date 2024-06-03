
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVT5C1KxKppa1R8R50tYyLNFw8lnmIKes",
  authDomain: "coffee-app-2ba9f.firebaseapp.com",
  projectId: "coffee-app-2ba9f",
  storageBucket: "coffee-app-2ba9f.appspot.com",
  messagingSenderId: "878856948740",
  appId: "1:878856948740:web:4af9d47d3d6c6cfc7b7951"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);