import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDvqGaFIdywqZcIabp4SihpaA6LfHWrJ8',
  authDomain: 'natours-254.firebaseapp.com',
  projectId: 'natours-254',
  storageBucket: 'natours-254.appspot.com',
  messagingSenderId: 505542981170,
  appId: '1:505542981170:web:e3c4a3dba073dafb202e2b',
};

const firebase = initializeApp(firebaseConfig);

//setting up google storage
const photoStorage = getStorage(firebase);

export { photoStorage, ref, uploadBytesResumable, getDownloadURL };
