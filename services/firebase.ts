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
    apiKey: 'AIzaSyA9mFy2QOhnDcI7hZq60VOwR5GXchB5U6g',
    authDomain: 'weather-alert-jlb-staging.firebaseapp.com',
    projectId: 'weather-alert-jlb-staging',
    storageBucket: 'weather-alert-jlb-staging.appspot.com',
    messagingSenderId: '54911916656',
    appId: '1:54911916656:web:2c7069766649a5cf06f2b5',
    measurementId: 'G-QE38RPW0T3',
  },
  development: {
    apiKey: 'AIzaSyA9mFy2QOhnDcI7hZq60VOwR5GXchB5U6g',
    authDomain: 'weather-alert-jlb-staging.firebaseapp.com',
    projectId: 'weather-alert-jlb-staging',
    storageBucket: 'weather-alert-jlb-staging.appspot.com',
    messagingSenderId: '54911916656',
    appId: '1:54911916656:web:2c7069766649a5cf06f2b5',
    measurementId: 'G-QE38RPW0T3',
  },
}[process.env.NEXT_PUBLIC_RUN_ENV || 'development']

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// export const analytics = getAnalytics(app)
