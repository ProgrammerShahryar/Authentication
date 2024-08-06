import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDSnnck2qnGKt4-EYlm6ncK2UAOQxwIczI",
  authDomain: "final-c35b0.firebaseapp.com",
  projectId: "final-c35b0",
  storageBucket: "final-c35b0.appspot.com",
  messagingSenderId: "227860048095",
  appId: "1:227860048095:web:78638a3d195a2f63a7e16a"
  };

const fOne =
 initializeApp(firebaseConfig);


const fTwo =
 getDatabase(fOne);


const fThree =
 getDatabase();


const fRef =
 ref(fThree, '/shahryar');

export function showData(setData) {
  onValue(fRef, (snapshot) => {
    
    const DataChanged = [];
    snapshot.forEach((childSnapshot) => {

      const fOneKey =
       childSnapshot.key;

      const fChildData =
       childSnapshot.val();


      DataChanged.push({
        id: fOneKey,
        name: fChildData.name
      });


    });
    setData(DataChanged);
  }, { onlyOnce: true });
}
