import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlxgZ7Q2SmBV-492dHHt6B6YS_-CK7qQg",
  authDomain: "imdb-replica.firebaseapp.com",
  databaseURL: "https://imdb-replica.firebaseio.com",
  projectId: "imdb-replica",
  storageBucket: "imdb-replica.appspot.com",
  messagingSenderId: "320079055731",
  appId: "1:320079055731:web:51fafeb4d0f1eeb70ad306",
  measurementId: "G-NHLZJHL4DK",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const getUserWatchlistRef = async (userId) => {
  const watchlistRef = await firestore
    .collection("watchlist")
    .where("userId", "==", userId);
  const snapshot = await watchlistRef.get();

  if (snapshot.empty) {
    const watchlistDocRef = firestore.collection("watchlist").doc();
    watchlistDocRef.set({ userId, watchlist: [] });
    return watchlistDocRef;
  } else {
    return snapshot.docs[0].ref;
  }
};

export const verifyUserCredentials = async (password) => {
  const currentUser = await firebase.auth().currentUser;

  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(currentUser.email, password);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();

export default firebase;
