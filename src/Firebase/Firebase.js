import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdWXQpT3lsFDV5BIf_53qXmvzz0inAIxA",
    authDomain: "crwn-db-796e9.firebaseapp.com",
    databaseURL: "https://crwn-db-796e9.firebaseio.com",
    projectId: "crwn-db-796e9",
    storageBucket: "crwn-db-796e9.appspot.com",
    messagingSenderId: "944733082526",
    appId: "1:944733082526:web:05eb96b726c9cba36bbc8f",
    measurementId: "G-K9XP8GKMFX"
};

export const CreateUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // This means the user signed out, hence dont do anything

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        // Create user data into database
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

// Generic function that takes in a key and an object and then creates a new collections in Firebase
export const addCollectionAndDocuments = async (CollectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(CollectionKey);
    
    // Using batch allows us to batch the request together so that if it any part fails, the entire request fails
    // This ensures that we do not have a situation where only certain information pass through and stop
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    return await batch.commit();
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        
        return {
            // encodeURI converts the title to a string that is able to be a URL
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title: title,
            items: items
        }
    });

    return transformCollection.reduce((accumlator, collection) => {
        accumlator[collection.title.toLowerCase()] = collection;
        return accumlator;
    } , {})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;