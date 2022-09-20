import { getApp, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const createFirebaseApp = (config = {}) => {
  try {
    return getApp();
  } catch (error) {
    return initializeApp(config);
  }
};

const app = createFirebaseApp({
  apiKey: process.env.API_KEY, // for auth
  authDomain: process.env.AUTH_DOMAIN, // for auth
  projectId: process.env.PROJECT_ID, // for auth
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = async (): Promise<boolean> => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    return true;
  } catch (error) {
    return false;
  }
};

export const signOutWithGoogle = async (): Promise<boolean> => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};
