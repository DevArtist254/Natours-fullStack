import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'natours-254.firebaseapp.com',
  projectId: 'natours-254',
  storageBucket: 'natours-254.appspot.com',
  messagingSenderId: '505542981170',
  appId: process.env.APPID,
};

const firebase = initializeApp(firebaseConfig);

//setting up google storage
const photoStorage = getStorage(firebase);

export { photoStorage, ref, uploadBytesResumable, getDownloadURL };
