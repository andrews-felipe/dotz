const firebase = require('firebase');

const config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

firebase.initializeApp(config);

module.exports.signUp = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            return JSON.stringify(res)
        }).catch((error) => {
            if (error.code == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(error.message);
            }
            console.log(error);
        });
}