
import { initializeApp } from "firebase/app";

import { getMessaging, getToken} from "firebase/messaging";

const vapidKey = "BLgBb79UdBlDy2UpLhp5q_0Pm4J5QYg1FSXROlJlnyXldhSieojJ5X4nhT6__qIs6yIZhyiezQGan2Gourr-zvk"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS4mbmmvmYgXvIc-cyNnQhrcUN2Zx06k0",
  authDomain: "fir-shopping-12504.firebaseapp.com",
  projectId: "fir-shopping-12504",
  storageBucket: "fir-shopping-12504.appspot.com",
  messagingSenderId: "314564190296",
  appId: "1:314564190296:web:529698eae0d9ade601aa2d"
};
export const app = initializeApp(firebaseConfig);

// currentToken =
// cf55Q8LMVho2sxFdfR-jE8:APA91bENbixMdluWAlko2r40U4fvpTvPHXcUq5zkifv9LVkR6g4sQFRavYYivPrbctzX7q1SPUJICYxm4zNhsyj33Ym98CIKSKUn8e_eYlAVIsDme_t4sa-bcrXbfee0KkS0nn5KFJ1K  


// ServiceWorker

export const messaging = getMessaging();


getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log("currentToken  :", currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});



// Add the public key generated from the console here.

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.


// Initialize Firebase


