
import './App.css';
import React, { useState} from "react";
import NavBar from "./components/NavBar/NavBar";
import AccountForm from "./components/AcountForm/AcountForm";
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {

  //Creamos un nuevo estado que almacenará la lista de perfiles que guardemos
  const  [profiles, setProfiles] = useState([]);

  //Funcion que nos permita acceder a todos los perfiles
  const addProfile = (profile) => {
    setProfiles([...profiles, profile])
   }

  return (
    <div className="App">
      <NavBar />
      <AccountForm addProfile={addProfile}/>
      <ProfileCard profiles={profiles}/>
    </div>
  );
}

export default App;
