import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// ... other firebase imports

export const firebaseApp = initializeApp({
apiKey: "AIzaSyA-gmRVaXpRcoEBG-lz-W10jgp9ZdhV1k4",
  authDomain: "ezclothes-vue.firebaseapp.com",
  projectId: "ezclothes-vue",
  storageBucket: "ezclothes-vue.appspot.com",
  messagingSenderId: "480649007467",
  appId: "1:480649007467:web:289cdb6eda2be034dd3c2e"
})

// used for the firestore refs
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);