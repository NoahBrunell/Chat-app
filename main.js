// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, onChildAdded, set, } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQmMQR8RWope6IqpZaxweb-sHM-9vFpd0",
    authDomain: "chattapp-83a8d.firebaseapp.com",
    projectId: "chattapp-83a8d",
    storageBucket: "chattapp-83a8d.appspot.com",
    messagingSenderId: "91904429543",
    appId: "1:91904429543:web:534f39381ec805361b4142",
    databaseURL: "https://chattapp-83a8d-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize realtime Database and get a reference to the service
const db = getDatabase(app)

// Create reference, where in the database do we want to work
const chatRef = ref(db, "/chat")

// Listen to database changes
onChildAdded(chatRef, function (data) {
    // Create message element and append to list element (ul)
    const message = document.createElement("li")
    message.innerText = data.val()
    list.appendChild(message)
});

// Chat
const input = document.querySelector("input")
const list = document.querySelector("ul")

input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        // Create "unique" id for message (current time)
        const messageId = Date.now()

        set(ref(db, 'chat/' + messageId), input.value)
        // Clear input
        input.value = ""
    }
})