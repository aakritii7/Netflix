import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDlZcL8dmZ4HnN9K-da4UhFsH2ddXovfAc",
  authDomain: "netflix-clone-c5a91.firebaseapp.com",
  projectId: "netflix-clone-c5a91",
  storageBucket: "netflix-clone-c5a91.firebasestorage.app",
  messagingSenderId: "1048543997777",
  appId: "1:1048543997777:web:763e18ea05e77d489cad70",
  measurementId: "G-HD094VNRW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(error){
        console.log(error);
        alert(error);

    }
}
const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
       console.log(error);
       alert(error); 
    }

}
const logout =  ()=>{
    signOut(auth);
}

export {auth, db, login, signUp, logout};