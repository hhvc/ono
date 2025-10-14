import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCAfX7DLpJpp3GQ-F8hdKGo602iYT86Q3A",
  authDomain: "ono-ar.firebaseapp.com",
  projectId: "ono-ar",
  storageBucket: "ono-ar.firebasestorage.app",
  messagingSenderId: "227102803643",
  appId: "1:227102803643:web:079e748c0e363437cb4b9e",
  measurementId: "G-7NK58JR8V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Opcional: Analytics (si lo vas a usar)
const analytics = getAnalytics(app);

export { app, analytics };