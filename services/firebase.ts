import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig: { [k: string]: string } = {
  production: {
    apiKey: 'AIzaSyD4uTx0O6ejU09-o31IaauOGU08O0bJAMk',
    authDomain: 'weather-alert-jlb.firebaseapp.com',
    projectId: 'weather-alert-jlb',
    storageBucket: 'weather-alert-jlb.appspot.com',
    messagingSenderId: '987019375743',
    appId: '1:987019375743:web:4bf0a77728242a32227b4a',
    measurementId: 'G-GWT25NT5ST',
  },
  staging: {
    apiKey: 'AIzaSyD4uTx0O6ejU09-o31IaauOGU08O0bJAMk',
    authDomain: 'weather-alert-jlb.firebaseapp.com',
    projectId: 'weather-alert-jlb',
    storageBucket: 'weather-alert-jlb.appspot.com',
    messagingSenderId: '987019375743',
    appId: '1:987019375743:web:37fe2237b88a06f0227b4a',
    measurementId: 'G-YHG0VQ6G5F',
  },
  development: {
    apiKey: 'AIzaSyD4uTx0O6ejU09-o31IaauOGU08O0bJAMk',
    authDomain: 'weather-alert-jlb.firebaseapp.com',
    projectId: 'weather-alert-jlb',
    storageBucket: 'weather-alert-jlb.appspot.com',
    messagingSenderId: '987019375743',
    appId: '1:987019375743:web:37fe2237b88a06f0227b4a',
    measurementId: 'G-YHG0VQ6G5F',
  },
}[process.env.NEXT_PUBLIC_RUN_ENV || 'development']

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(app)
