importScripts('https://cdnjs.cloudflare.com/ajax/libs/firebase/8.10.1/firebase.js');
importScripts('https://cdnjs.cloudflare.com/ajax/libs/firebase/8.10.1/firebase-messaging.min.js');

firebase.initializeApp({
  apiKey: "AIzaSyDS4mbmmvmYgXvIc-cyNnQhrcUN2Zx06k0",
  authDomain: "fir-shopping-12504.firebaseapp.com",
  projectId: "fir-shopping-12504",
  storageBucket: "fir-shopping-12504.appspot.com",
  messagingSenderId: "314564190296",
  appId: "1:314564190296:web:529698eae0d9ade601aa2d"
});

const messaging = firebase.messaging();


// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Hola desde public';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: 'https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });