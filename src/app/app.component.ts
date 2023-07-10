import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdRlsZX4AekDNM50um5wuIY-fJ_AjGwz4",
  authDomain: "startupdashboard.firebaseapp.com",
  projectId: "startupdashboard",
  storageBucket: "startupdashboard.appspot.com",
  messagingSenderId: "1003287716784",
  appId: "1:1003287716784:web:c94d3319ca482d51956c75",
  measurementId: "G-SQ5DD9JWHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
