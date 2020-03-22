
import * as firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyA-PPGEnGGZZdkCRkOk53TcLggxbV-zp9U",
    authDomain: "dnd-far-beyond.firebaseapp.com",
    databaseURL: "https://dnd-far-beyond.firebaseio.com",
    projectId: "dnd-far-beyond",
    storageBucket: "dnd-far-beyond.appspot.com",
    messagingSenderId: "884814337195",
    appId: "1:884814337195:web:65cdcd521b2fb2b584d3ee"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export class Store {
    private db: firebase.firestore.Firestore;

    constructor() {
        this.db = firebase.firestore();
    }
    
    readSandbox(callback: (value: any) => void): () => void {
        return this.db.collection("sandbox").doc("one").onSnapshot((value) => {
            const data = value.data();
            callback(data);
        });
    }

    writeSandbox(value: any) {
        this.db.collection("sandbox").doc("one").set(value);
    }
}
