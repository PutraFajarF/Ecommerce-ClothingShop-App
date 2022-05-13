import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx7hnA0smP48ETn5-VBeprXbPjpt8vzAM",
  authDomain: "ecommerce-crwn-db-caed0.firebaseapp.com",
  projectId: "ecommerce-crwn-db-caed0",
  storageBucket: "ecommerce-crwn-db-caed0.appspot.com",
  messagingSenderId: "391508748269",
  appId: "1:391508748269:web:0dde9c5940f38d6914e9e4"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // Check if user data not exist => create / set the document with the data from userAuth in my collection
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  // Check if user data exists => return userDocRef
  return userDocRef;
}