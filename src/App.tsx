import React from 'react';
import { collection , getDocs } from 'firebase/firestore';
import {db} from './firebase/config'
import { useState, useEffect } from 'react';
 import './App.css';
type userProp = {

}
function App() {
  const [user,getUser] = useState<userProp[]>([]);
  const usersCollectionRef =collection(db, "users");

   useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const item = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      getUser(item)
    };
    getUsers();
  }, []);
  console.log(user)
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
