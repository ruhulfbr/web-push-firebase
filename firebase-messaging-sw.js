importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyClnlqs7A-rAQ3FLDs2vS90AuLmJf5AKg4",
    authDomain: "mp-web-push.firebaseapp.com",
    projectId: "mp-web-push",
    storageBucket: "mp-web-push.appspot.com",
    messagingSenderId: "130832013885",
    appId: "1:130832013885:web:972000206541fdadf5e854",
    measurementId: "G-GM2QTB3N31"
};

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});