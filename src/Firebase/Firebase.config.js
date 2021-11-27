// const firebaseConfig = {
//   apiKey: "AIzaSyC9_Hr5oh-eZuQidBqSRhu1yok3cY5DXT0",
//   authDomain: "camera-zone.firebaseapp.com",
//   projectId: "camera-zone",
//   storageBucket: "camera-zone.appspot.com",
//   messagingSenderId: "664642557767",
//   appId: "1:664642557767:web:fdc82c578b23a4347e9e62",
// };
  
//   export default firebaseConfig;



  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
  };
  
  export default firebaseConfig;








