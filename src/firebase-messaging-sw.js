// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.0.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyBElU60HcEO-6oWoBIPYp19iIrrhDa_C1k',
  authDomain: 'memes-1cd61.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'memes-1cd61',
  storageBucket: 'memes-1cd61.appspot.com',
  messagingSenderId: '240935836051',
  appId: '1:240935836051:web:163892051cb09272cff066',
  measurementId: 'G-SRB6GJECX5',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
