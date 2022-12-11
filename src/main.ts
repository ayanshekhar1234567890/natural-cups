import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyB3E_SynU-fuij6Svw316BZBpvemahqfNw",
  authDomain: "naturalcps-15ca3.firebaseapp.com",
  projectId: "naturalcps-15ca3",
  storageBucket: "naturalcps-15ca3.appspot.com",
  messagingSenderId: "184509443626",
  appId: "1:184509443626:web:6615b014c983201b951d53",
  measurementId: "G-G42Z5L5SY9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
getAnalytics(app);