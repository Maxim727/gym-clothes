import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAh8PxCnhdo3D_c1i0NdFhUJjUZw84-Ccw",
    authDomain: "gym-clothes-79c58.firebaseapp.com",
    databaseURL: "https://gym-clothes-79c58.firebaseio.com",
    projectId: "gym-clothes-79c58",
    storageBucket: "gym-clothes-79c58.appspot.com",
    messagingSenderId: "930702530585",
    appId: "1:930702530585:web:3d9923ab1d3c906012b288",
    measurementId: "G-PZ8ZM1JK8C"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;