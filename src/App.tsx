import React from 'react';
import { collection , getDocs, addDoc,updateDoc,doc, deleteDoc } from 'firebase/firestore';
import {db} from './firebase/config'
import { useState, useEffect } from 'react';
 import './App.css';

type useProp= {
  name : string
  age : number
  id : string
}
function App() {
  const [newName,setNewName] = useState("");
  const [newAge,setNewAge] =useState(0);
  const [user,getUser] = useState<any>([]);
  const usersCollectionRef =collection(db, "users");
    const updateUser =async (id :string,age :number) => {
      const userDoc = doc(db,"users", id )
      const newFieds = { age : age + 1}
      await updateDoc(userDoc,newFieds)
    }
    const createUser = async () => {
        await addDoc(usersCollectionRef,{name :newName ,age :newAge});
    }
    const deleteUser = async (id : string) => {
      const userDoc = doc(db,"users",id);
      await deleteDoc(userDoc)
    }
   useEffect(() => {  
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      const item = data.docs.map((doc) => ({ ...doc.data(),id : doc.id }));
      console.log(typeof item[0].id);
      getUser(item)
    };
    getUsers();
  }, []);
  console.log(user)
  return (
    <div className="App">
        <input type="text" placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}></input>
        <input type="number" placeholder="Age..." onChange={(event) => {setNewAge(Number(event.target.value))}}></input>
      <button onClick = {createUser}> Create</button>
        {user.map((item : useProp,index : number) => 
       (
         
         <div key= {index}>
          <h2 > {item.name}</h2> 
          <h2 > {item.age}</h2>
          <button onClick={() => { updateUser(item.id,item.age)}}>Increae Age</button>
          <button onClick={()=> {deleteUser(item.id)}}>DeleteUser</button>
         </div>
      ))
       }
        </div>
  );
}

export default App;
