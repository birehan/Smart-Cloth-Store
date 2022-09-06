import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {getFirestore, collection,  getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc,
    getDoc} from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDFKanYXun65DroF3mKms8lwSbfLoX6szc",
    authDomain: "birehan-eco-db.firebaseapp.com",
    projectId: "birehan-eco-db",
    storageBucket: "birehan-eco-db.appspot.com",
    messagingSenderId: "185955401855",
    appId: "1:185955401855:web:0933f69cb26f46219aff4a",
    measurementId: "G-WN8GVTX54F"
  };

const app = initializeApp(config);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// init services
export const db = getFirestore(app);

// provider.setCustomParameters({prompt: 'select_account'}); 

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        console.log(result)
    })
    .catch(error => console.log(error))
};


export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;


    const userRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()){

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        
            console.log("document ID: " + userRef.id)
        }
        catch(error){
            console.log("error: ", reportError)
        }
        
    }
    return userRef;

}

  // const colRef = collection(db, 'users');
    // const snapShot = await getDocs(colRef);

    // const querySnapshot = await getDocs(collection(db, "users"));

    // let userExist = false;

    // querySnapshot.forEach((doc) =>{
    //     if (doc.id == userAuth.uid) userExist = true
    //     })

    // if (! userExist){
    //     const {displayName, email} = userAuth;
    //     const createdAt = new Date();

    //     try{
    //         const docRef = await addDoc(collection(db, "users"), {
    //             displayName,
    //             email,
    //             createdAt,
    //             ...additionalData
    //         });
    //         console.log("document ID: " + docRef.id)
    //     }
    //     catch(error){
    //         console.log("error: ", reportError)
    //     }
    // }
    // else{
    //     console.log("user already exists")
    // }

