import { initializeApp } from "firebase/app";

import { getMessaging, getToken } from "firebase/messaging";

import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS4mbmmvmYgXvIc-cyNnQhrcUN2Zx06k0",
  authDomain: "fir-shopping-12504.firebaseapp.com",
  projectId: "fir-shopping-12504",
  storageBucket: "fir-shopping-12504.appspot.com",
  messagingSenderId: "314564190296",
  appId: "1:314564190296:web:529698eae0d9ade601aa2d",
};

const devFirebaseConfig = {
  apiKey: "AIzaSyB1bGz1s9zU518J4xMktdai0UE4imaPdcQ",
  authDomain: "dev-firebase-shopping-c1356.firebaseapp.com",
  projectId: "dev-firebase-shopping-c1356",
  storageBucket: "dev-firebase-shopping-c1356.appspot.com",
  messagingSenderId: "1012536102712",
  appId: "1:1012536102712:web:328386f4b526e7b784bbcd",
};

let app;

if (process.env.NODE_ENV === "production") {
  app = initializeApp(firebaseConfig);
} else {
  app = initializeApp(devFirebaseConfig);
}

// vspidKey Produccion
const vapidKey =
  "BLgBb79UdBlDy2UpLhp5q_0Pm4J5QYg1FSXROlJlnyXldhSieojJ5X4nhT6__qIs6yIZhyiezQGan2Gourr-zvk";

// vapidKey Desarroyo
  const vapidKeyDev = "BO8Ccv9GktqkYuJzOWAhwduCsoEmdgYnSGCurDmizkXiKGXwLXcS9xkMJ1oOY8laQSRbvZNNhCr08yVsh9mHP2I"

// ServiceWorker

export const messaging = getMessaging();

getToken(messaging, { vapidKey: process.env.NODE_ENV ==="production" ? vapidKey : vapidKeyDev })
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      sentTokenToServer(currentToken);
      // console.log("currentToken  :", currentToken);
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

// Enviar token solo una vez para activar notificiaciones generado arriba.

const sentTokenToServer = (token) => {
  if (localStorage.getItem("tokenSendToServer")) return;
  // Logica necesaria para almacenar el token
  console.log("Ha almacenado el token");
  localStorage.setItem("tokenSendToServer", "1");
};
const db = getFirestore();

export { app, db };
